import { connect } from 'react-redux';
import NetworkStatus, { INetworkStatusProps } from '../components/NetworkStatus';
import { INetworkStatus, IAppState } from './state';

const mapStateToProps = (state: IAppState): INetworkStatusProps => ({
  isConnected: state.network.isConnected,
});

export default connect(mapStateToProps)(NetworkStatus);