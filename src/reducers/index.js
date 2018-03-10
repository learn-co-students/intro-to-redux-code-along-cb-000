import { combineReducers } from 'redux';
import shoppingListItems from './shoppingListItemsReducer';

const rootReducer = combineReducers({
  shoppingListItems
});

export default rootReducer;
