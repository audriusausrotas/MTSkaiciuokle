import { defineMongooseModel } from "#nuxt/mongoose";
import type { GateSchema } from "~/data/interfaces";

export const gateSchemaGigasta = defineMongooseModel<GateSchema>(
  "gateSchemaGigasta",
  {
    _id: Object,
    client: Object,
    creator: Object,
    measure: {
      type: String,
      required: false,
      default: "Eilėje",
    },
    gates: [Object],
    dateCreated: String,
  },
  { collection: "gatesGigasta" }
);
