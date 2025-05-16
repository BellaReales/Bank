import { createCollection } from "./create.js";

export class CrearUserCollection extends createCollection {
    #coll = {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["doc", "name", "email", "password", "balance"],
                properties: {
                    doc: { bsonType: "string" }, // identificador único
                    name: { bsonType: "string" },
                    email: { bsonType: "string" },
                    password: { bsonType: "string" },
                    balance: { bsonType: "double" }
                }
            }
        }
    };

    get Schema() {
        return this.#coll;
    }
}