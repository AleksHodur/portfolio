import './Navbar.css';

import {Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div id='div-navbar' className='offside-regular'>
            <ul id='navbar'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li>Contact</li>
            </ul>
        </div>
     );
}

export default Navbar;