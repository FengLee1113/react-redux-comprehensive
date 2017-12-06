import {createStore, combineReducers} from 'redux'
import counter from './reducers/counter'
let mainReducer = combineReducers({
  counter
})
let store = createStore(mainReducer)
export default store