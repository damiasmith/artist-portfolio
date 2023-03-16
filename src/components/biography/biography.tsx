import React from 'react';
import './biography.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { biography } from '../../biographyData';
const s3 = 'https://s3.amazonaws.com/damia.smith.website.images';

export const Biography = () => {
  return (
     <div className='bio-item'>
     <Row>
       <Col className='bio-header' sm='8'>
           <h3><span>Biography</span></h3>
       </Col>
       <Col className='bio-body' lg='12'>
        <Row>
        <Col md='9'>
          {
            biography.paragraph && biography.paragraph.map((item, index: number) => {
              return(
                <div>
                  <Row className='bio-item' key={index}>
                     <Col>
                     <p>{item}</p>
                     </Col>
                  </Row>
                </div>
              )}
            )                    
           }
         </Col>
         <Col className='bio-image-container' sm='3'>
          <img src={`${s3}/damia_smith.jpg`} className='bio-image' alt='damia smith' height = '200'/>
        </Col>
        </Row>
       </Col>
     </Row>
   </div>
  );
}

export default Biography;
