import { combineReducers } from 'redux';
import sideMenu from './sideMenu';
import network from './networkStatus';

/**
 * when combining reducers, this will make sure to only pass the sideMenu portion of the state to the sideMenu reducer. So, when looking at the
 * state, the properties set in the sideMenu reducers will be properties of the parent states sideMenu property. eg; parentState.sideMenu...
 */
const rootReducer = combineReducers({
  sideMenu,
  network,
});

export default rootReducer;