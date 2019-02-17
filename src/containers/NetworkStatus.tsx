import { connect } from 'react-redux';
import NetworkStatus, { INetworkStatusProps } from '../components/NetworkStatus';
import { IAppState } from './state';

/**
 * We are making sure that our app state and return values are the proper type. this helps us avoid typos and catch errors
 * that would be related to the app state shape changing at build time.
 * @param state 
 */
const mapStateToProps = (state: IAppState): INetworkStatusProps => ({
  isConnected: state.network.isConnected,
});

export default connect(mapStateToProps)(NetworkStatus);