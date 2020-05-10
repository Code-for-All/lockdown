import { BaseRepository } from "./BaseRepository";

export class CovidRepository extends BaseRepository {

  getCollectionName() {
    return "covid_records";
  }

  constructor(db) {
    super(db);

    this._model.createIndex("last_updated");
    this._model.createIndex("country");
    this._model.createIndex("country_code");
  }

  getMaximumDate() {
    return this._model.find().sort({ last_updated: -1 }).limit(1);
  }

  getTotals(startDate, endDate) {
    const query = [
      {
        "$match": {
          $and: [
            { last_updated: { $lte: endDate } },
            { last_updated: { $gte: startDate } }
          ]
        }
      },
      {
        "$group": {
          "_id": {
            "$dateToString": {
              "format": "%Y-%m-%d",
              "date": "$last_updated"
            }
          },
          "total_deaths": {
            "$sum": "$total_deaths"
          },
          "total_confirmed": {
            "$sum": "$total_confirmed"
          }
        }
      }
    ];

    return this._model.aggregate(query);
  }
}