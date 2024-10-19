import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "session" model, go to https://blogmate-ai.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "JmHBMZbjDIt6",
  fields: {
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "PKh2d5aqga-M",
    },
    user: {
      type: "belongsTo",
      parent: { model: "user" },
      storageKey: "DJsWqQ1LFj5r",
    },
  },
  shopify: { fields: ["shop", "shopifySID"] },
};
