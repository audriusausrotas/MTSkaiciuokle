import { defineMongooseModel } from "#nuxt/mongoose";
import type { GateSchema } from "~/data/interfaces";

export const gateSchema = defineMongooseModel<GateSchema>(
  "gateSchema",
  {
    _id: Object,
    client: Object,
    creator: Object,
    manager: String,
    orderNr: {
      type: String,
      required: false,
      default: "",
    },
    comments: {
      type: [Object],
      required: false,
      default: [],
    },
    measure: {
      type: String,
      required: false,
      default: "Eilėje",
    },
    gates: [Object],
    dateCreated: String,
  },
  { collection: "gates" }
);
