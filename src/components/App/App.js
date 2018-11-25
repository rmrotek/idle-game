import React, { Component } from 'react';
import { connect } from "react-redux";



class App extends Component {
  totalClickPower() {
    const { upgradeOne, upgradeTwo } = this.props.clickPowerUpgrades
    return (1 + upgradeOne.power) * upgradeTwo.power
  }

  render() {
    return (
      <>
        <div className='score-area'>
          <p>
            score: {this.props.currentScore.toFixed(2)}
          </p>
          <p>
            click power: {this.totalClickPower().toFixed(2)}
          </p>
          <p>
            auto power: {this.props.currentAutoPower.toFixed(2)}
          </p>
        </div>

        <div className='menu-area'>
          menu
        </div>

        <div className='click-area'>
          <button onClick={() => this.props.increment(this.totalClickPower())}>clickable</button>
        </div>

        <div className='upgrade-area'>
          <button onClick={() => this.props.buyClickUpgradeOne()}>up to click power</button>
          <button onClick={() => this.props.buyClickUpgradeTwo()}>up to click power %</button>

        </div>
        <div className='minion-area'>
          <button onClick={() => this.props.buyAutoUpgradeOne(10)}>up to auto power</button>
        </div>
      </>


    );
  }
}

const mapStateToProps = state => ({
  currentScore: state.score.currentScore,
  currentAutoPower: state.score.autoPower,
  clickPowerUpgrades: state.score.clickPowerUpgrades,
  
});

const mapDispatchToProps = dispatch => ({
  increment: (power) =>
    dispatch({
      type: "INCREMENT",
      payload: power
    }),
  buyClickUpgradeOne: () =>
    dispatch({
      type: "CLICK_BUY_ONE"
      
    }),
  buyClickUpgradeTwo: () =>
    dispatch({
      type: "CLICK_BUY_TWO"
      
    }),
  buyAutoUpgradeOne: power =>
    dispatch({
      type: "AUTO_BUY",
      payload: power
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
