import { applyParams, save, ActionOptions, UpdateUserActionContext } from "gadget-server";

/**
 * @param { UpdateUserActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await save(record);
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update",
};
