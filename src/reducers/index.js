import {combineReducers} from 'redux'
import {shoppingListItems} from './shoppingListItemReducer'

export default const rootReducer = combineReducers({
  shoppingListItems
})
