import React, { Component } from 'react';

import App from './containers/App';
import { Provider } from 'mobx-react';
import RootStore from './mobxStore/RootStore';
import ReactDOM from 'react-dom';
import store from './store';

const mobxStore = new RootStore({ gitHubUserRepositoriesStore: { user: 'pvpshoot' } });

ReactDOM.render(
  <Provider {...mobxStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
