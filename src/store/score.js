const initialState = {
  currentScore: 0,
  clickPower: 1,
  autoPower: 0,

};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      currentScore: state.currentScore + state.clickPower
    }
  }
  if (action.type === "CLICK_INCREASE") {
    return {
      ...state,
      currentScore: state.currentScore + state.clickPower
    }
  }

  return state;
};

export default reducer