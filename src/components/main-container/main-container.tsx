import * as react from 'react';
import './main-container.css';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Home from '../home/home';
import { CV } from '../cv/cv';
import Biography from '../biography/biography';
import Portfolio from '../portfolio/portfolio';
import Shop from '../shop/shop';
import Footer from '../footer/footer';
import { CvDataModel } from '../../models/cvData.model';

export const MainContainer = (cvData: CvDataModel) => {
    return (
      <div className='app-container'>
        <Router>
          <div className='heading'>
            <Nav >
              <div className='home'>
                <Nav.Link as={Link} to='/'>
                  Damia Smith
                </Nav.Link>
              </div> 
              <div className='nav-container'>
                <Nav.Item>
                  <Nav.Link as={Link} to='/portfolio' className='heading'>Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to='/cv' className='heading'>CV</Nav.Link>
                </Nav.Item>
                <Nav.Item> 
                  <Nav.Link as={Link} to='/biography' className='heading'>Biography</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to='/shop' className='heading'>Shop</Nav.Link>
                </Nav.Item>
              </div>
            </Nav>
          </div>
          <div className='body'>
            <Routes>
              <Route path='/' element={<Home />} /> 
              <Route path='/biography' element={<Biography />} />
              <Route path='/cv' element={<CV {...cvData}/>} />
              <Route path='/portfolio' element={<Portfolio/>} />
              <Route path='/shop' element={<Shop/>} />
            </Routes> 
          </div>
        </Router>
        <Container className='footer'>
          <Footer></Footer>
        </Container>
      </div>  
    )
  };
