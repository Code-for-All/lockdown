require('dotenv').config();

const httpContext = require('express-http-context');
const express = require('express');
const routerApi = express.Router();
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const Joi = require('joi-browser');
const uuid = require('uuid');

const lugg = require('lugg');
const pino = require('pino');
const noir = require('pino-noir');
const morgan = require('morgan');

class DayData {
  constructor (db) {
    this._db = db;
  }

  list() {
    return new Promise((resolve, reject) => {
      resolve([])
    });
  }

  get(day) {
    return new Promise((resolve, reject) => {
      resolve({day: day, metadata: {}})
    });
  }
}

class DataStore {
  constructor () {
    this.name = 'datastore';
    this.dbClient = {};
  }
  get day() {
    return new DayData(this.dbClient);
  }
}

const api = {
  getDayList: async function (dataStore) {
    const dayItems = await dataStore.day.list();
    return dayItems;
  },
  getDay: async function (dataStore, params) {
    const dayItem = await dataStore.day.get(params.day);
    dayItem.hello = 'from express with love'

    return dayItem;
  }
}


const app = express();
const server = http.Server(app);


const logLevel = process.env.LOG_LEVEL || 'warn';
const serializers = noir(
  pino.stdSerializers,
  ['req.headers.xxx-api-key'],
);
lugg.init({
  name: 'lockdown',
  level: logLevel,
  mixin: () => ({ requestId: httpContext.get('requestId') }),
  serializers,
});

const logger = lugg();

process.on('unhandledRejection', (error) => {
  logger.error(error);
});

function forward(res, next, data) {
  if (data) res.json(data);
  next();
}

function middlewareErrorHandler(err, req, res, next) {
  // We must delegate to the Express error handler if the response has started
  if (res.headersSent) {
    logger.error({ err, req, res });
    return next(err);
  }
  res.json({
    error: 'some error',
    code: 500,
    requestId: httpContext.get('requestId'),
  });

  logger.error({ err, req, res });


}

function isLogined(req, res, next) {
  // const apiKey = req.get('xxx-api-key');
  return next();
  // if (apiKey === process.env.ApiKey) {
  //   return next();
  // }

  res.status(403);
  res.json({ error: `Invalid API key ${apiKey}` });
};

const daySchema = {
  day: Joi.string().regex(/^\d{4}[/-]\d{2}[/-]\d{2}$/).required(),
};
const validateDate = (req, res, next) => {
  const { params } = req;
  const paramsSchema = {
    ...daySchema,
  };

  const { error, value: { day } } = Joi.validate(params, paramsSchema);

  if (error) {
    return next(error);
  }
  req.day = day;
  next();
};

function run() {
  const options = {

  };

  const dataStore = new DataStore(options);

  app.use(cors());

  routerApi.use(morgan('tiny'));
  routerApi.use(bodyParser.json({ limit: '50mb' }));
  routerApi.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  routerApi.use(httpContext.middleware);
  routerApi.use(setRequestContext);
  routerApi.use(isLogined);

  function setRequestContext(req, res, next) {
    httpContext.set('requestId', uuid.v4());
    next();
  }


  function validate(schema) {
    return (req, res, next) => {
      const { error } = Joi.validate(req, schema.unknown(true));
      const isValid = error === null;
      if (isValid) {
        next();
      } else {
        const { details } = error;
        const message = details.map((i) => i.message).join(',');
        res.status(422).json({ error: message });
      }
    };
  }

  app.get('/', (req, res, next) => {
    res.json({ status: 'ok' });
    next();
  });

  routerApi.get('/days/', (req, res, next) => {
    api.getDayList(dataStore).then(forward.bind(null, res, next)).catch(next);
  });

  routerApi.get('/days/:day', validateDate, (req, res, next) => {
    api.getDay(dataStore, {
      day: req.params.day,
    }).then(forward.bind(null, res, next)).catch(next);
  });

  app.use('/api', routerApi);

  // Fallback handler
  app.use((req, res) => {
    if (!res.headersSent) {
      res.status(404);
      res.json({ error: 'Not Found' });
    }
  });

  app.use(middlewareErrorHandler);

  const port = Number(process.env.PORT) || 80;
  server.listen(port, () => {
    logger.info(`Server is running at http://localhost:${port}`);
  });
}

run();
