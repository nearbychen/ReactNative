import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './Store/ConfigureStore';

import App from './Containers/App';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}
