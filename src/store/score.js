


const initialState = {
  currentScore: 0,
  clickPowerUpgrades: {
    
    upgradeOne: 1,
    upgradeTwo: 2,
    
  },
  autoPower: 0,

};



const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      currentScore: state.currentScore + action.payload
    }
  }
  if (action.type === "CLICK_BUY_ONE") {
    return {
      ...state,
      clickPowerUpgrades: {
        ...state.clickPowerUpgrades,
        upgradeOne: state.clickPowerUpgrades.upgradeOne + action.payload
      }
    }
  }
  if (action.type === "CLICK_BUY_TWO") {
    return {
      ...state,
      clickPowerUpgrades: {
        ...state.clickPowerUpgrades,
        upgradeTwo: state.clickPowerUpgrades.upgradeTwo + action.payload
      }
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