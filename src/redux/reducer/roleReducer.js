import { FETCH_ROLES } from "../constants";

const initialState = {
  role: [],
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROLES:
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};

export default roleReducer;
