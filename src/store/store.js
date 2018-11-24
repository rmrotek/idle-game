import { createStore, combineReducers } from "redux";
import scoreReducer from './score'

const reducer = combineReducers({
  score: scoreReducer
})

// Tworzenie store'a (potrzebny jest reducer)
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);


setInterval(() => { 
  store.dispatch({ type: 'AUTO_INCREASE'})
}, 1000)


export default store 