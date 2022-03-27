import { DATA_ADDED, DATA_UPDATED } from "../constants";

export const dataAdded = () => {
  return {
    type: DATA_ADDED,
  };
};

export const dataUpdated = () => {
  return {
    type: DATA_UPDATED,
  };
};
