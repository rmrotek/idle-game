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
  if (action.type === "CLICK_BUY") {
    return {
      ...state,
      clickPower: state.clickPower + action.payload
    }
  }

  if (action.type === "AUTO_BUY") {
    return {
      ...state,
      autoPower: state.autoPower + action.payload
    }
  }
  
  if (action.type === "AUTO_INCREASE") {
    return {
      ...state,
      currentScore: state.currentScore + state.autoPower
    }
  }

  return state;
};

export default reducer