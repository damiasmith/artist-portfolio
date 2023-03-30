import React from 'react';
import './footer.css';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CvDataModel, SocialLinksModel } from '../../models/cvData.model';

export const Footer = (cvData: CvDataModel) => {
  return (
    <footer className='footer'>
      <Navbar>
        <Col className='social'>
          {
            cvData.socialLinks && cvData.socialLinks.map((item: SocialLinksModel, index) => {
              return (
                <Nav.Item className='social-links' key={index}>
                  <a href={item.url} target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={item.className} size='2x' className='icon' />
                  </a>
                </Nav.Item>
              )
            })
          }
        </Col>
      </Navbar>
    </footer>
  );
}
