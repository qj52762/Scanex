import './App.css';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NoMatch from './Pages/NoMatch';
import Services from './Pages/Services';
import AboutUs from './Pages/AboutUs';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Scanex</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/aboutus">AboutUs</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/aboutus' element={<AboutUs />}/>
        <Route path='*' element={<NoMatch />}/>
      </Routes>
      <div className='footer-div'>
        <div className="footer-element">
          <div className='footer-title'>Location</div>
          <p>1200,Main Square Parkavenue, Prishtina</p>
        </div>
        <div className="footer-element">
          <div className='footer-title'>Around the Web</div>
          <p>Find us on these social media platforms</p>
          <a href="https://www.facebook.com"><img  width="25px" height='25px' src={require('./Pages/Images/Facebook-icon.png')} /></a>
        </div>
        <div className="footer-element">
          <div className='footer-title'>About Us</div>
          <p>Since 2018 we have informed you about Crypto</p>
        </div>
        
      </div>

    </Router>
    
  );
}

export default App;
