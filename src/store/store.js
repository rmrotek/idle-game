import { createStore } from "redux";

const initialState = 0;
const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }

  return state;
};
// Tworzenie store'a (potrzebny jest reducer)
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);
export default store 