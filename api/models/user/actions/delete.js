import { deleteRecord, ActionOptions, DeleteUserActionContext } from "gadget-server";

/**
 * @param { DeleteUserActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  await deleteRecord(record);
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete",
};