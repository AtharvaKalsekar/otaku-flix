import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { modalReducer } from "./reducers/modalReducers";

const reducers = combineReducers({
  modal: modalReducer,
});

const initialState = {
  // modalComponent:null,
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
