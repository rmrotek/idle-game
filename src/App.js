import React, { Component } from 'react';
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
            score
          </Col>


        </Row>
        <Row style={{ background: 'lightblue' }}>
          <Col md={{ size: 4}} style={{ border: '2px solid black', textAlign: 'center' }}>
            clickable
          </Col>
          <Col md={{ size: 8}} style={{ border: '2px solid black', textAlign: 'center' }}>
            upgrades
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
