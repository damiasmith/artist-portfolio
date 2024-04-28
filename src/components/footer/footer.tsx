import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './footer.css';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { CvDataModel, SocialLinksModel } from '../../models/cvData.model';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit';

export const Footer = (cvData: CvDataModel) => {
  const [ showEmail, setShowEmail ] = useState(false);

  return (
    <footer className='footer'>
      <Navbar className='navbar'>
        <Col className='social'>
        <Nav.Item className='social-links'>
          <FontAwesomeIcon icon={faEnvelope} size='2x' className='icon' onClick={() => {setShowEmail(true)}}/>
        </Nav.Item>
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
          <div>
            <Modal
              show={showEmail}
              onHide={() => setShowEmail(false)}
              >
              <Modal.Body className='modal-container'>
                <div>
                  {EmailContactForm(setShowEmail)}
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </Col>
      </Navbar>
      <div className='copyright'>
        Copyright © 2008-2024 Damia Smith
      </div>
    </footer>
  );
}

export const EmailContactForm = (setShowEmail: React.Dispatch<React.SetStateAction<boolean>>) => {
  const [validated, setValidated] = useState(false);

  const sendEmail = (event: any) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
        return
    }

    setValidated(true);

    emailjs.sendForm('service_hpocxk5', 'template_rt0el7x', form, 'x0SpLLRFd5U49Df7I')
      .then((result) => {
          setShowEmail(false);
      })
  };
  
  return (
    <MDBValidation id='form' noValidate className='text-center' style={{ width: '100%', maxWidth: '300px' }} onSubmit={sendEmail}>
      <h2>email me</h2>

      <MDBValidationItem  invalid feedback='Please provide your name.'>
        <MDBInput label='Name' v-model='name' wrapperClass='mb-4' name='Name' required />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide your email.'>
        <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' name='Email address' required />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide mail subject.'>
        <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' name='Subject' required />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide a message text.'>
        <MDBTextArea wrapperClass='mb-4' label='Message' name='Message' required />
      </MDBValidationItem>

      <MDBValidationItem feedback=''>
        <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />
      </MDBValidationItem>

      <MDBBtn type='submit' color='dark' block className='my-4' >
        Send
      </MDBBtn>
    </MDBValidation>
  );
 };
  


