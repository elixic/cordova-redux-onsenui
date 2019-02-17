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
  // depending on the device and browser type there is more or less network information in the
  // connection property here, but I've decided to skip evaluating that because I'm really
  // only interested in knowing if we're online or not.
  return navigator.onLine;
}

function startApp() {
  const store = configureStore();
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  );

  // TODO: move this to a 'determine initial state' section possibly.
  // check the current network status to make sure the display is correct
  store.dispatch(networkStateChange(getNetworkStatus()));

  // TODO: Move this stuff into a better location, possibly a setup event listeners section.
  // when on a device, the cordova-plugin-network-information plugin is required. on the browser these work without it.
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