// Entrypoint
import './main';

require('dotenv').configure()

console.log(process.env.MONGO_DB_USER)
console.log(process.env.MONGO_DB_PASSWORD)
console.log(process.env.MONGO_DB)