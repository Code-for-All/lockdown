export class SnapshotRepository{
    constructor(db){
        this.model = db.collection("snapshots");
    }

    async insert(snaphot){
        return this.model.insert(snaphot);
    }
}