import { main, client } from '../helpers/db.js';

async function createIndexes() {

    const db = await main();


    // indice principal : por doc y date descendente
    await db.collection('movements').createIndex({ doc: 1, date: -1 });


    // indice por tipo de movimiento
    await db.collection('movements').createIndex({ type: 1 });
   
   
    // indice por servicio !
    await db.collection('movements').createIndex({ service: 1 });
   
   
    // indices para users
    await db.collection('users').createIndex({ doc: 1 }, { unique: true });
    await db.collection('users').createIndex({ email: 1 }, { unique: true });
    console.log('Índices creados correctamente en las colecciones movements y users.');
    await client.close();
}

createIndexes(); 