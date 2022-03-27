import { DATA_ADDED, DATA_UPDATED } from "../constants";

const INITIAL_STATE = {
  addedData: false,
};

const addedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_ADDED:
      return {
        ...state,
        addedData: true,
      };

    case DATA_UPDATED:
      return {
        ...state,
        addedData: false,
      };

    default:
      return state;
  }
};

export default addedReducer;
