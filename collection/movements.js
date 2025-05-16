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





await db.collection("movements").insertMany([
    {
      doc: "100000001",
      type: "Consignación",
      amount: 500,
      date: new Date("2024-05-01T10:00:00"),
      balance: 1500,
      service: null
    },
    {
      doc: "100000001",
      type: "Retiro",
      amount: 200,
      date: new Date("2024-05-02T12:00:00"),
      balance: 1300,
      service: null
    },
    {
      doc: "100000002",
      type: "Pago de Servicio",
      amount: 100,
      date: new Date("2024-05-03T09:00:00"),
      balance: 1900,
      service: "agua"
    },
    {
      doc: "100000003",
      type: "Consignación",
      amount: 300,
      date: new Date("2024-05-04T11:00:00"),
      balance: 1800,
      service: null
    },
    {
      doc: "100000004",
      type: "Retiro",
      amount: 400,
      date: new Date("2024-05-05T14:00:00"),
      balance: 1400,
      service: null
    },
    {
      doc: "100000005",
      type: "Pago de Servicio",
      amount: 150,
      date: new Date("2024-05-06T15:00:00"),
      balance: 1050,
      service: "gas"
    },
    {
      doc: "100000006",
      type: "Consignación",
      amount: 600,
      date: new Date("2024-05-07T16:00:00"),
      balance: 2300,
      service: null
    },
    {
      doc: "100000007",
      type: "Retiro",
      amount: 250,
      date: new Date("2024-05-08T17:00:00"),
      balance: 850,
      service: null
    },
    {
      doc: "100000008",
      type: "Pago de Servicio",
      amount: 120,
      date: new Date("2024-05-09T18:00:00"),
      balance: 1480,
      service: "luz"
    },
    {
      doc: "100000009",
      type: "Consignación",
      amount: 350,
      date: new Date("2024-05-10T19:00:00"),
      balance: 1750,
      service: null
    },
    {
      doc: "100000010",
      type: "Retiro",
      amount: 100,
      date: new Date("2024-05-11T20:00:00"),
      balance: 1200,
      service: null
    },
    {
      doc: "100000011",
      type: "Pago de Servicio",
      amount: 200,
      date: new Date("2024-05-12T21:00:00"),
      balance: 1050,
      service: "agua"
    },
    {
      doc: "100000012",
      type: "Consignación",
      amount: 400,
      date: new Date("2024-05-13T22:00:00"),
      balance: 1750,
      service: null
    },
    {
      doc: "100000013",
      type: "Retiro",
      amount: 300,
      date: new Date("2024-05-14T23:00:00"),
      balance: 1150,
      service: null
    },
    {
      doc: "100000014",
      type: "Pago de Servicio",
      amount: 180,
      date: new Date("2024-05-15T08:00:00"),
      balance: 1370,
      service: "gas"
    },
    {
      doc: "100000015",
      type: "Consignación",
      amount: 700,
      date: new Date("2024-05-16T09:00:00"),
      balance: 2350,
      service: null
    },
    {
      doc: "100000016",
      type: "Retiro",
      amount: 350,
      date: new Date("2024-05-17T10:00:00"),
      balance: 1400,
      service: null
    },
    {
      doc: "100000017",
      type: "Pago de Servicio",
      amount: 160,
      date: new Date("2024-05-18T11:00:00"),
      balance: 1690,
      service: "luz"
    },
    {
      doc: "100000018",
      type: "Consignación",
      amount: 800,
      date: new Date("2024-05-19T12:00:00"),
      balance: 2750,
      service: null
    },
    {
      doc: "100000019",
      type: "Retiro",
      amount: 150,
      date: new Date("2024-05-20T13:00:00"),
      balance: 900,
      service: null
    }
  ]);
  