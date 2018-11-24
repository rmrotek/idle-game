import React, { Component } from 'react';
import { connect } from "react-redux";

import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <>
        <div className='score-area'>
          score: {this.props.score}
        </div>

        <div className='menu-area'>
          menu
        </div>

        <div className='click-area'>
          <button onClick={() => this.props.dispatch({ type: 'INCREMENT' })}>clickable</button>
        </div>

        <div className='upgrade-area'>
          <button onClick={() => this.props.dispatch({ type: 'CLICK_INCREASE', })}>up to click power</button>
        </div>
        <div className='minion-area'>
          minion
        </div>
      </>
      // <Row style={{ background: 'grey' }}>
      //   <Col>
      //     menu
      //     </Col>
      // </Row>
      // <Row style={{ background: 'red' }}>
      //   <Col md='12' style={{ border: '2px solid black', textAlign: 'center' }}>
      //     score: {this.props.score}
      //   </Col>


      // </Row>
      // <Row style={{ background: 'lightblue' }}>
      //   <Col md={{ size: 4 }} style={{ border: '2px solid black', textAlign: 'center' }}>
      //     <button onClick={() => this.props.dispatch({ type: 'INCREMENT' })}>clickable</button>
      //   </Col>
      //   <Col md={{ size: 8 }} style={{ border: '2px solid black', textAlign: 'center' }}>
      //     <Row>
      //       <Col md='12' lg='12' xl='6'>
      //         <button onClick={() => this.props.dispatch({ type: 'CLICK_INCREASE', })}>up to click power</button>

      //       </Col>
      //       <Col md='12' lg='12' xl='6'>
      //         minions
      //         </Col>
      //     </Row>

      //   </Col>
      // </Row>

    );
  }
}

export default connect(state => ({
  score: state.score.currentScore
}))(App);
