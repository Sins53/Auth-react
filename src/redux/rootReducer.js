import { combineReducers } from "redux";
import screenReducer from "./reducer/screenReducer";
import addedReducer from "./reducer/addedReducer";

const rootReducer = combineReducers({
  screen: screenReducer,
  added: addedReducer,
});

export default rootReducer;
