import { SCREEN_LIST_FETCHING } from "../constants";

const initialState = {
  screen: [],
};

const screenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCREEN_LIST_FETCHING:
      return {
        ...state,
        screen: action.payload,
      };
    default:
      return state;
  }
};

export default screenReducer;
