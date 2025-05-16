import { createCollection } from "./create.js";

export class CrearMovementCollection extends createCollection {
    #coll = {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["doc", "type", "amount", "date", "balance"],
                properties: {
                    doc: { bsonType: "string" }, // identificador del usuario
                    type: { enum: ["Consignación", "Retiro", "Pago de Servicio"] },
                    amount: { bsonType: "double" },
                    date: { bsonType: "string" },
                    balance: { bsonType: "double" },
                    service: { bsonType: "string" } // opcional
                }
            }
        }
    };

    get Schema() {
        return this.#coll;
    }
}