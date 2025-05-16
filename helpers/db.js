import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
//'mongodb+srv://bxllar0:bella2007isa@acmebank.ahx5oyp.mongodb.net/bank?retryWrites=true&w=majority&appName=acmeBank';
const dbName = 'bank';

const client = new MongoClient(uri);

export const main = async () => {
    try {
        await client.connect();
        console.log('Connect...');
        return client.db(dbName);
    } catch (error) {
        console.error('Error en la conexion...', error);
        throw error;
    }
};

export { client }; 