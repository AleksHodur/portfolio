import './About.css';

import {Container, Row, Col, Card} from 'react-bootstrap';
import PageTransition from '../../transitions/PageTransition';
import { motion } from 'framer-motion';

function About () {
    return ( 
        <div className="box-body">
          <div className="box-column">
            <h1>We are in the About page</h1>
          </div>
          <div className="box-column">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, repellendus earum pariatur, laboriosam numquam doloribus dolor architecto quo voluptates quisquam exercitationem illum, laudantium quis? Quibusdam impedit facilis, recusandae consequatur, delectus beatae harum quod dolorum voluptatibus amet consectetur repellendus error esse rerum eum accusantium, dicta eius distinctio. Dolor sapiente fugit aliquam.</p>
          </div>
        </div>
     );
}

export default About;