import React from 'react';
import homeImage from '../../images/profligacy2.jpg';
import smallHomeImage from '../../images/profligacy.jpg';
import Row from 'react-bootstrap/Row';
import './home.css';


function Home() {
  return (
    <div className='home-container'>
      {/* <header className='Home-header'>
        Home
      </header> */}
 
        <section className='home-image-container'>
          <div>
            <img src={homeImage} className='home-image' alt='profligacy'/>
          </div>
          <div>
            <img src={smallHomeImage} className='small-home-image' alt='profligacy_body'/>
          </div>
        </section>

    </div>
  );
}

export default Home;
