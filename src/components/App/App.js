import React, { Component } from 'react';
import { connect } from "react-redux";



class App extends Component {
  totalClickPower() {
    const {upgradeOne, upgradeTwo} = this.props.score.clickPowerUpgrades
    return 1 + upgradeOne + upgradeTwo
  }

  render() {
    return (
      <>
        <div className='score-area'>
          <p>
            score: {this.props.score.currentScore}
          </p>
          <p>
            click power: {this.totalClickPower()}
          </p>
          <p>
            auto power: {this.props.score.autoPower}
          </p>

        </div>

        <div className='menu-area'>
          menu
        </div>

        <div className='click-area'>
          <button onClick={() => this.props.dispatch({ type: 'INCREMENT', payload: this.totalClickPower() })}>clickable</button>
        </div>

        <div className='upgrade-area'>
          <button onClick={() => this.props.dispatch({ type: 'CLICK_BUY_ONE', payload: 3 })}>up to click power</button>
          <button onClick={() => this.props.dispatch({ type: 'CLICK_BUY_TWO', payload: 4 })}>up to click power</button>

        </div>
        <div className='minion-area'>
          <button onClick={() => this.props.dispatch({ type: 'AUTO_BUY', payload: 10 })}>up to auto power</button>
        </div>
      </>


    );
  }
}

export default connect(state => ({
  score: state.score
}))(App);
