export class createCollection {
    constructor(db, CollectionName) {
        this.db = db;
        this.CollectionName = CollectionName;
    }

    async create() {
        try {
            const exist = await this.db.listCollections({ name: this.CollectionName }).toArray();
            if (exist.length > 0) {
                console.log(`La colección ${this.CollectionName} ya se encuentra creada`);
                return;
            }
            await this.db.createCollection(this.CollectionName, this.Schema);
            console.log(`La colección ${this.CollectionName} fue creada correctamente :)`);
        } catch (error) {
            console.error("Hubo un error al crear la colección:", error);
        }
    }

   
    async generateCollection() {
        await this.create();
    }
}
