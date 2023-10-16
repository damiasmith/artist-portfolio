import './main-container.css';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Home } from '../home/home';
import { CV } from '../cv/cv';
import { Biography } from '../biography/biography';
import { Portfolio } from '../portfolio/portfolio';
import * as portfolio from '../portfolio/portfolio-images';
import { Shop } from '../shop/shop';
import { Footer } from '../footer/footer';
import { CvDataModel } from '../../models/cvData.model';
import { thumbnailImage } from '../../portfolioData';
import { ThumbnailImage } from '../../models/images.model';


export const MainContainer = (cvData: CvDataModel) => {
  return (
    <div className='app-container'>
      <Router>
        <div className='heading'>
          <Nav>
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
              {/* <Nav.Item>
                  <Nav.Link as={Link} to='/shop' className='heading'>Shop</Nav.Link>
                </Nav.Item> */}
            </div>
          </Nav>
        </div>
        <div className='body'>
          <Routes>
            
            {/* {
              thumbnailImage?.imageList.map(( item: ThumbnailImage, index: number ) => 
                Component = portfolio[item.function]
                <Route path={`/${item.page}`} element={ <[Component] />} />
              ))
            } */}
            <Route path='/' element={<Home />} />
            <Route path='/biography' element={<Biography />} />
            <Route path='/cv' element={<CV {...cvData} />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/profligacy' element={<portfolio.Profligacy />} />
            <Route path='/fragile.myths' element={<portfolio.FragileMyths />} />
            <Route path='/decorative' element={<portfolio.Decorative />} />
            <Route path='/expectations' element={<portfolio.Expectations />} />
            <Route path='/excessive' element={<portfolio.Excessive />} />
            <Route path='/apothecia' element={<portfolio.Apothecia />} />
            <Route path='/burdensome' element={<portfolio.Burdensome />} />
            <Route path='/chain.reaction' element={<portfolio.ChainReaction />} />
            <Route path='/defense.mechanism' element={<portfolio.DefenseMechanism />} />
            <Route path='/epithelial.neoplasms' element={<portfolio.EpithelialNeoplasms />} />
            <Route path='/dream.big' element={<portfolio.DreamBig />} />
            <Route path='/hands.tied' element={<portfolio.HandsTied />} />
            <Route path='/onus' element={<portfolio.Onus />} />
            <Route path='/osteoderm' element={<portfolio.Osteoderm />} />
            <Route path='/phalangeal.thelodonts' element={<portfolio.PhalangealThelodonts />} />
            <Route path='/projection.identification.empathy' element={<portfolio.ProjectionIdentificationEmpathy />} />
            <Route path='/self.fulfilling.prophecy' element={<portfolio.SelfFulfillingProphecy />} />
            <Route path='/the.weight.of.an.object' element={<portfolio.TheWeightOfAnObject />} />
            <Route path='/wild.seeds' element={<portfolio.WildSeeds />} />
            <Route path='/shop' element={<Shop />} />
          </Routes>
        </div>
      </Router>
      <Container className='footer'>
        <Footer {...cvData}></Footer>
      </Container>
    </div>
  )
};
