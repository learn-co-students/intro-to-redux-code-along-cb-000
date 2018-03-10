import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import configureStore from './stores/configureStore';
import getShoppingListItems from './actions/shoppingListItemActions';

const store = configureStore();

store.dispatch(getShoppingListItems());

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>
  document.getElementById('root')
);


