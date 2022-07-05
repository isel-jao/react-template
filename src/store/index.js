/* eslint-disable no-unused-vars */
import { combineReducers } from "redux";
import { createStore } from "redux";
import configReducer from "./config";

const rootReducer = combineReducers({
  config: configReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
