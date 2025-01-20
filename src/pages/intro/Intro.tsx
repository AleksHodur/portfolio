import './Intro.css';

import {Container, Row, Col, Card} from 'react-bootstrap';
import PageTransition from '../../transitions/PageTransition';
import { motion } from 'framer-motion';

function Intro () {
    return ( 
        <div className="box-body">
          <div className="box-column">
            <div>Some text here Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Numquam modi quae sunt voluptatem corporis
                nesciunt aspernatur id provident est? Eligendi vel quos libero
                ipsam officia quaerat eos blanditiis, laudantium quibusdam!
                Dolorum nostrum repellendus assumenda amet accusantium nesciunt
                consequatur! Suscipit magnam est, eveniet autem odio laudantium
                ab quibusdam tempore perspiciatis! Commodi.
            </div>
          </div>
          <div className="box-column">
            <h1>Hi! I'm Aleks</h1>
          </div>
        </div>
     );
}

export default Intro;