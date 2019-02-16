import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';

function createStoreDev(preloadState: any) {
  return createStore(
    rootReducer,
    preloadState,
    compose(applyMiddleware(logger))
  );
}

function createStoreProd(preloadState: any) {
  return createStore(
    rootReducer,
    preloadState
  );
}

/**
 * We can supply default state values here that are computed by the environment or possibly set by environment variables, etc.
 * @param preloadState 
 */
export function configureStore(preloadState = {}) {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'production') {
    return createStoreProd(preloadState);
  } else {
    return createStoreDev(preloadState);
  }
}
