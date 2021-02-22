import {combineReducers} from 'redux'
import {championsReduser} from './champions-reduser'
import {itemsReduser} from './item-reduser'

export const rootReducer = combineReducers({
  champions: championsReduser,
  items: itemsReduser,
})
