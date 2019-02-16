import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { configureStore } from './store/configureStore';
import Root from './containers/Root';
import './index.scss'

// We could put some code here, or call some helper functions to set app state defaults that are supplied to the configure store method
const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)