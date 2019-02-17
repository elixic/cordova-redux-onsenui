import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface INetworkStatusProps {
  isConnected: boolean;
}

const NetworkStatus = ({ isConnected }: INetworkStatusProps) => (
  <div>{`Connected: ${isConnected}`}</div>
)

NetworkStatus.propTypes = {
  isConnected: PropTypes.bool.isRequired,
}

export default NetworkStatus;