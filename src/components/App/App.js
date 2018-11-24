import React, { Component } from 'react';
import { connect } from "react-redux";

import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Row style={{ background: 'grey' }}>
          <Col>
            menu
          </Col>
        </Row>
        <Row style={{ background: 'red' }}>
          <Col md={{ size: 6, offset: 3}} style={{ border: '2px solid black', textAlign: 'center' }}>
            score: {this.props.score}
          </Col>


        </Row>
        <Row style={{ background: 'lightblue' }}>
          <Col md={{ size: 4}} style={{ border: '2px solid black', textAlign: 'center' }}>
            <button onClick={() => this.props.dispatch({type: 'INCREMENT'})}>clickable</button>
          </Col>
          <Col md={{ size: 8}} style={{ border: '2px solid black', textAlign: 'center' }}>
            upgrades
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(state => ({
  score: state
})) (App);
