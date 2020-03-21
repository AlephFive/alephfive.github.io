import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

function HomePage() {
  return (
    <Container>
      <br />
      <br />
      <Row>
        <Col sm={{ span: 2, offset: 2 }}>
          <Image src="me_drawn.png" roundedCircle fluid />
        </Col>
        <Col sm={6} style={{ textAlign: 'left' }}>
          <h2>Hello There!</h2>

          <p>
            I'm <strong>Brian</strong>! I am currently a junior at{' '}
            <strong>Colgate University</strong>. I major in <strong>Physics</strong> and minor in{' '}
            <strong>Mathematics</strong> and
            <strong> Jewish Studies</strong>.
          </p>
          <p>
            I will be attending <strong>Columbia University</strong> starting from the fall of 2020
            studying <strong>Computer Science </strong>
            as part of a 3-2 engineering program.
          </p>
        </Col>
      </Row>
      <Row>
        <br />
        
      </Row>
      <Row>
        <Col sm={{ span: 8, offset: 2 }} style={{ textAlign: 'left' }}>
          <Card>
            <Card.Body>
                <p>
                    You can download my resume in pdf form here, and you can find me on LinkedIn, GitHub, and Instagram.
                </p>
                <h5>What are my interests?</h5>
                <p>
                    My interests include web-front end development, quantum computing, superconductors, machine learning, human-computer interaction, music, linguistics, graphic design, and humanitarian aid.
                </p>
                <h5>What am I up to now?</h5>
                <p>
                    This summer I will be working under Professor Kenneth Segall at Colgate Universtiy doing research on 
                    superconducting josephson junctions and its applications in simulating neural networks.
                </p>
                
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
