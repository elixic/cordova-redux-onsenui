import { NETWORK_STATE_CHANGE, INetworkStatusAction } from '../actions';
import { INetworkStatus } from '../containers/state';

/**
 * This reducer is only concerned with the network state, and so we make sure we have the proper types imported and a default value set.
 * @param state 
 * @param action 
 */
export default function network(state: INetworkStatus = { isConnected: false }, action: INetworkStatusAction): INetworkStatus {
  if (action.type === NETWORK_STATE_CHANGE) {
    return { ...state, isConnected: action.isConnected };
  } else {
    return state;
  }
}
