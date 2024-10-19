import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://blogmate-ai.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "fGHqAStzucle",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "sLEK_Wm3p9OJ",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "020AqcWNW_wB",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "0Zdw6RTY8gES",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "giWJ4GcpygMr",
    },
    firstName: { type: "string", storageKey: "2ayHYdlU1of-" },
    googleImageUrl: { type: "url", storageKey: "f9TPejYWHdD-" },
    googleProfileId: { type: "string", storageKey: "9Oev7Ci0j8hU" },
    lastName: { type: "string", storageKey: "7XBkmbb79tql" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "ow4iVdspRBWb",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "rd5-iHCNHM12",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "5jONPoeiCzmO",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "BIn-LUDHKfT1",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "9XVezPQqVQlm",
    },
  },
};
