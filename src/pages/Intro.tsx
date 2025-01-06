import './Intro.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Intro () {
    return ( 
        <Card id='intro'>
        <Card.Body>
          <Container>
            <Row className='row-class'>
              <Col>
                <div>Some text here Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Numquam modi quae sunt voluptatem corporis
                  nesciunt aspernatur id provident est? Eligendi vel quos libero
                  ipsam officia quaerat eos blanditiis, laudantium quibusdam!
                  Dolorum nostrum repellendus assumenda amet accusantium nesciunt
                  consequatur! Suscipit magnam est, eveniet autem odio laudantium
                  ab quibusdam tempore perspiciatis! Commodi.
                </div>
              </Col>
              <Col>Some image here</Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
     );
}

export default Intro;