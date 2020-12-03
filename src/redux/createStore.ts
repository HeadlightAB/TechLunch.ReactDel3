import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { IApplicationState, reducers } from "./root-reducer";

export default function configureStore(initialState?: IApplicationState) {
  const middleware = [thunk];

  const rootReducer = combineReducers({
    ...reducers,
  });

  const enhancers = [];
  const windowIfDefined =
    typeof window === "undefined" ? null : (window as any);
  if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
  }

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
}
