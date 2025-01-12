import './About.css';

import {Container, Row, Col, Card} from 'react-bootstrap';

function About () {
    return ( 
        <Card id='intro'>
        <Card.Body>
          <Container>
            <Row className='row-class'>
              <Col>
                <h1>We are in the About page</h1>
              </Col>
              <Col>Hellooooooo!!!</Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
     );
}

export default About;