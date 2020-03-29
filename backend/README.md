## Backend scripts to load and transform data

### Requirements:
Minimum node version: 8.5

#### Installation:
For google sheet access, you will need either:
- A credentials.json generated from the google developer for sheets api v4 in the base folder
- Set `GOOGLE_SERVICE_ACCOUNT_EMAIL` and `GOOGLE_PRIVATE_KEY` environment variable
```
npm install
```


#### Build & run:
```
npm start
```

#### Debug run
*Note: Still replaces data*
```
npm run dev
```

#### Test
```
npm run test
```