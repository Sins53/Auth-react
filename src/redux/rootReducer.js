import { combineReducers } from "redux";
import screenReducer from "./reducer/screenReducer";
import addedReducer from "./reducer/addedReducer";
import roleReducer from "./reducer/roleReducer";

const rootReducer = combineReducers({
  screen: screenReducer,
  added: addedReducer,
  role: roleReducer,
});

export default rootReducer;
