import { combineReducers, createStore, applyMiddleware } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import cardReducer from "./reducers/cardReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  restaurantReducer,
  cardReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
