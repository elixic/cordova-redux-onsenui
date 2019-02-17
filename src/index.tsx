import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as logger from 'js-logger';
import { networkStateChange } from './actions'

import { configureStore } from './store/configureStore';
import Root from './containers/Root';
import './index.scss'

// We could put some code here, or call some helper functions to set app state defaults that are supplied to the configure store method
logger.useDefaults();

function getNetworkStatus() {
  logger.info(navigator);
  const isConnected = navigator.onLine;
  logger.info(isConnected);
  return isConnected;
}

function setupNetworkStatusListeners() {
}

function startApp() {
  const store = configureStore();
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  );
  store.dispatch(networkStateChange(getNetworkStatus()));

  window.addEventListener("online", () => store.dispatch(networkStateChange(true)));
  window.addEventListener("offline", () => store.dispatch(networkStateChange(false)));
}

if (!window.cordova) {
  logger.info("No cordova, starting the app.");
  startApp();
} else {
  logger.info("Waiting for device to be ready.");
  document.addEventListener("deviceready", startApp, false);
}