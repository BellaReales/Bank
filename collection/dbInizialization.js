import { client, main } from "../helpers/db.js";
import { CrearUserCollection } from "./users.js";
import { CrearMovementCollection } from "./movements.js";

async function crearCollection() {
    const db = await main();

    const users = new CrearUserCollection(db, "users");
    await users.generateCollection();

    const movements = new CrearMovementCollection(db, "movements");
    await movements.generateCollection();

    await client.close();
}

crearCollection();
