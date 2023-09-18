import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import logo from '../assets/logo.png'

const Header = ()=> {
  return (
    <header>
        <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
            <Container>
                
                <Navbar.Brand href='/'> <img width={35} height={25} src={logo} alt="Anashop" /> anas-store </Navbar.Brand>
                
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id = 'basic-navbar-nav'>
                    <Nav className='ms-auto'>
                    <Nav.Link href="/cart"><FaShoppingCart/> Cart</Nav.Link>
                    <Nav.Link href="/login"><FaUser/> Cart</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
}

export default Header;