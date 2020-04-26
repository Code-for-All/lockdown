import express from 'express';
import { connect } from './repositories';
import SnapshotsService from './services/SnapshotsService';
import CacheService from './services/CacheService';
import cors from 'cors';

const app = express();

app.use(cors())

const ttl = 60 * 60 * 1;
const cacheService = new CacheService(ttl);

connect().then(database => {

    const snapshotService = new SnapshotsService(database);
    
    app.listen(process.env.PORT || 3000, function () {
        console.log(`listening on ${process.env.PORT || 3000}`)
    });
    
    app.get('/status/:iso/:date', function (req, res) {
        let iso = req.params.iso;
        let date = new Date(req.params.date);

        cacheService.get(`${iso}${date}`, () => {
            return snapshotService.getSnapshot(iso, date);
        }).then(result => {
            res.json(result);
        })
    });

});