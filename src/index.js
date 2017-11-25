import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import App from './App';

import configureStore from './stores/configureStore'
import { getShoppingListItems } from './actions/shoppingListItemActions'
import './index.css';

const store = configureStore()

store.dispatch(getShoppingListItems())

ReactDOM.render(
  <Provider store={store}>
   <App />
  </Provider>,
  document.getElementById('root')
);
