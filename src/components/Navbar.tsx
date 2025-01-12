import './Navbar.css';

import {Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div id='div-navbar'>
            <ul id='navbar'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
     );
}

export default Navbar;