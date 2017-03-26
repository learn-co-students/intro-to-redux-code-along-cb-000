import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
// import {createStore} from 'redux'
import configureStore from './store/configureStore.js'
import {getShoppingListItems} from './actions/shoppingListItemActions'


const store = configureStore();

store.dispatch(getShoppingListItems());

ReactDOM.render(
  <provider store={store} >
    <App />,
  </provider>
  document.getElementById('root')
);
