import { main, client } from '../helpers/db.js';
import path from 'path';
import fs from 'fs';

class CSVload {
    constructor(filePath) {
        this.filePath = filePath;
    }

    load() {
        const data = fs.readFileSync(this.filePath, 'utf-8');
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
        const rows = lines.slice(1).map(line => {
            const values = line.split(',');
            const row = {};
            headers.forEach((header, index) => {
                let value = values[index]?.trim() ?? '';
                // conversion de campos especiiificoooooos !!
                if (header === 'doc') value = String(value);
                if (header === 'balance' || header === 'amount') value = value ? Number(value) : undefined;
                if (value === '') return; // No agregar campos vacíos
                row[header] = value;
            });
            // eliminar campos vacíos
            Object.keys(row).forEach(key => {
                if (row[key] === '' || row[key] === undefined) delete row[key];
            });
            return row;
        }).filter(row => Object.keys(row).length > 0);
        return rows;
    }
}

function validateUser(doc) {
    return (
        typeof doc.doc === 'string' &&
        typeof doc.name === 'string' &&
        typeof doc.email === 'string' &&
        typeof doc.password === 'string' &&
        typeof doc.balance === 'number'
    );
}

function validateMovement(doc) {
    return (
        typeof doc.doc === 'string' &&
        typeof doc.type === 'string' &&
        typeof doc.amount === 'number' &&
        typeof doc.date === 'string' &&
        typeof doc.balance === 'number'
    );
}

async function loadCSVtoCollection(csvPath, collectionName, validator) {
    const db = await main();
    const loader = new CSVload(csvPath);
    const data = loader.load();

    if (data.length === 0) {
        console.error(`No hay datos válidos para la colección ${collectionName}`);
        return;
    }

    // eliminar todos los documentos antes de insertar
    await db.collection(collectionName).deleteMany({});

    for (let doc of data) {
        if ('_id' in doc) delete doc._id;
        if (!validator(doc)) continue;   
        try {
            await db.collection(collectionName).insertOne(doc);
        } catch (err) {
            console.error('Documento que falló:', doc);
            throw err;
        }
    }
    console.log(`Datos insertados en la colección ${collectionName}`);
}

async function mainLoad() {
    try {
        await loadCSVtoCollection(path.join('rawData', 'users.csv'), 'users', validateUser);
        await loadCSVtoCollection(path.join('rawData', 'movements.csv'), 'movements', validateMovement);
    } catch (err) {
        console.error('Error al cargar los CSV:', err);
    } finally {
        await client.close();
    }
}

mainLoad(); 