import * as React from 'react';
import SideMenu from '../containers/SideMenu';
import NetworkStatus from '../containers/NetworkStatus';

const App = () => (
  <div>
    <SideMenu>
      <NetworkStatus />
    </SideMenu>
  </div>
)

export default App;