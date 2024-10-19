import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "shopifyAppInstallation" model, go to https://blogmate-ai.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "DataModel-Shopify-AppInstallation",
  fields: {},
  shopify: {
    fields: [
      "accessScopes",
      "app",
      "launchUrl",
      "shop",
      "uninstallUrl",
    ],
  },
};
