import React from 'react';
import './biography.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { biography } from '../../biographyData';
const s3 = 'https://s3.amazonaws.com/damia.smith.website.images';

export const Biography = () => {
  return (
    <div>
      <header className='bio-header'> 
        <h4>Biography</h4>
      </header>
      <div className='bio-container'>
        <div className='bio-body'>
          {
            biography.paragraph && biography.paragraph.map((item, index: number) => {
              return(
                <div>
                  <Row key={index}>
                     <Col>
                     <p>{item}</p>
                     </Col>
                  </Row>
                </div>
              )}
            )                    
           }
         </div>
         <div className='bio-image-container'>
          <img src={`${s3}/damia_smith.jpg`} className='bio-image' alt='damia smith' height = '200'/>
        </div>
      </div>
   </div>
  );
}

