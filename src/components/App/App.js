import React, { Component } from 'react';
import { connect } from "react-redux";



class App extends Component {
  totalClickPower() {
    const { upgradeOne, upgradeTwo } = this.props.clickPowerUpgrades
    return (1 + upgradeOne) * upgradeTwo
  }

  render() {
    return (
      <>
        <div className='score-area'>
          <p>
            score: {this.props.currentScore}
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
          <button onClick={() => this.props.buyClickUpgradeOne(3)}>up to click power</button>
          <button onClick={() => this.props.buyClickUpgradeTwo(0.1)}>up to click power %</button>

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
  clickPowerUpgrades: state.score.clickPowerUpgrades
});

const mapDispatchToProps = dispatch => ({
  increment: (power) =>
    dispatch({
      type: "INCREMENT",
      payload: power
    }),
  buyClickUpgradeOne: power =>
    dispatch({
      type: "CLICK_BUY_ONE",
      payload: power
    }),
  buyClickUpgradeTwo: power =>
    dispatch({
      type: "CLICK_BUY_TWO",
      payload: power
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
