import { NETWORK_STATE_CHANGE, INetworkStatusAction } from '../actions';
import { INetworkStatus } from '../containers/state';

export default function network(state: INetworkStatus = { isConnected: false }, action: INetworkStatusAction): INetworkStatus {
  if (action.type === NETWORK_STATE_CHANGE) {
    return { ...state, isConnected: action.isConnected };
  } else {
    return state;
  }
}
