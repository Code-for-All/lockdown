export class BaseRepository {
  getCollectionName() {
    throw "You should specify collection name";
  }

  constructor(db) {
    this._model = db.collection(this.getCollectionName());
  }

  /**
   *
   * @param {*} snaphot
   */
  insert(obj) {
    return this._model.insert(obj);
  }

  /**
   *
   * @param {[]} snaphot
   */
  insertMany(arrayOfObjects) {
    return this._model.insertMany(arrayOfObjects);
  }

  /**
   * 
   * @param {[]} arrayOfObjects 
   * @param {Function} searchMapper
   */
  insertManyOrUpdate(arrayOfObjects, searchMapper) {
    return arrayOfObjects.map((s) => {
      return this._model.update(
        searchMapper(s),
        s,
        { upsert: true }
      );
    });
  }
}
