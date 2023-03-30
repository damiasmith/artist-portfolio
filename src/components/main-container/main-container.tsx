import './main-container.css';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Home } from '../home/home';
import { CV } from '../cv/cv';
import { Biography } from '../biography/biography';
import { Portfolio } from '../portfolio/portfolio';
import { Profligacy } from '../portfolio/profligacy/profligacy';
import { Decorative } from '../portfolio/decorative/decorative';
import { Expectations } from '../portfolio/expectations/expectations';
import { Excessive } from '../portfolio/excessive/excessive';
import { Apothecia } from '../portfolio/apothecia/apothecia';
import { Burdensome } from '../portfolio/burdensome/burdensome';
import { ChainReaction } from '../portfolio/chain-reaction/chain-reaction';
import { DefenseMechanism } from '../portfolio/defense-mechanism/defense-mechanism';
import { EpithelialNeoplasms } from '../portfolio/epithelial-neoplasms/epithelial-neoplasms';
import { Equality } from '../portfolio/equality/equality';
import { HandsTied } from '../portfolio/hands-tied/hands-tied';
import { Onus } from '../portfolio/onus/onus';
import { Osteoderm } from '../portfolio/osteoderm/osteoderm';
import { PhalangealThelodonts } from '../portfolio/phalangeal-thelodonts/phalangeal-thelodonts';
import { ProjectionIdentificationEmpathy } from '../portfolio/projection-identification-empathy/projection-identification-empathy';
import { SelfFulfillingProphecy} from '../portfolio/self-fulfilling-prophecy/self-fulfilling-prophecy';
import { TheWeightOfAnObject } from '../portfolio/the-weight-of-an-object/the-weight-of-an-object';
import { WildSeeds } from '../portfolio/wild-seeds/wild-seeds';
import { Shop } from '../shop/shop';
import { Footer } from '../footer/footer';
import { CvDataModel } from '../../models/cvData.model';
import { Images } from '../../models/images.model';

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
            <Route path='/' element={<Home />} />
            <Route path='/biography' element={<Biography />} />
            <Route path='/cv' element={<CV {...cvData} />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/profligacy' element={<Profligacy />} />
            <Route path='/decorative' element={<Decorative />} />
            <Route path='/expectations' element={<Expectations />} />
            <Route path='/excessive' element={<Excessive />} />
            <Route path='/apothecia' element={<Apothecia />} />
            <Route path='/burdensome' element={<Burdensome />} />
            <Route path='/chain.reaction' element={<ChainReaction />} />
            <Route path='/defense.mechanism' element={<DefenseMechanism />} />
            <Route path='/epithelial.neoplasms' element={<EpithelialNeoplasms />} />
            <Route path='/equality' element={<Equality />} />
            <Route path='/hands.tied' element={<HandsTied />} />
            <Route path='/onus' element={<Onus />} />
            <Route path='/osteoderm' element={<Osteoderm />} />
            <Route path='/phalangeal.thelodonts' element={<PhalangealThelodonts />} />
            <Route path='/projection.identification.empathy' element={<ProjectionIdentificationEmpathy />} />
            <Route path='/self.fulfilling.prophecy' element={<SelfFulfillingProphecy />} />
            <Route path='/the.weight.of.an.object' element={<TheWeightOfAnObject />} />
            <Route path='/wild.seeds' element={<WildSeeds />} />
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
