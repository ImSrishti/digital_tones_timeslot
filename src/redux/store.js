
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
    rootReducer,   composeWithDevTools(applyMiddleware(logger))
  );