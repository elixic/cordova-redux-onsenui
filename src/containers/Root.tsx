import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import App from '../components/App';

interface IRootProps {
  store: Store;
}

/**
 * This is our top level container, it set's up our react-redux state provider container that helps redux
 * state be supplied to our stateless react components via their containers.
 * @param param
 */
const Root:React.FC<IRootProps> = ({ store }) => (
    <Provider store={store}>
      <App />
    </Provider>
);

export default Root;