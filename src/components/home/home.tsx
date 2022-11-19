import React from 'react';
import homeImage from '../../images/profligacy.jpg';
import './home.css';


function Home() {
  return (
    <div className="home-container">
      {/* <header className="Home-header">
        Home
      </header> */}
      <section>
        <img src={homeImage} className="home-image" alt="profiglacy"/>
      </section>
    </div>
  );
}

export default Home;
