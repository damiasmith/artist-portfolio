import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';import { Image } from '../../../models/images.model';
import './profligacy.css';
import { profligacyImage } from '../../../portfolioData';
const s3 = 'https://s3.amazonaws.com/damia.smith.website.images';



export const Profligacy = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);
  const getImage = (id: any) => profligacyImage.imageList?.filter(image => image.id === id)[0];

  return (
    <>
    <div className='profligacy-header'>
      <h5>Profligacy</h5>
    </div>
    <div className='profligacy-image-container'>
      {
        profligacyImage.imageList?.map((item: Image) => (
          <>
            <div key={item.id}>
              <img src={`${s3}/${item.image}.jpg`} className='profligacy-image' alt={`${item.image}`} height='600' onClick={() => {setShow(true); setId(item.id as any)} }/>
            </div>
          </>
        ))
      }
      <div>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName='modal-90w'
          aria-labelledby='example-custom-modal-styling-title'
        >
          <Modal.Body>
            <div >
              <img src={`${s3}/${getImage(id)?.image}.jpg`} className='profligacy-modal-image img-fluid' alt={`${getImage(id)?.image}`} height='600'/>
            </div>
          </Modal.Body>
          <Modal.Header closeButton>
            <Modal.Title id='example-custom-modal-styling-title'>
              Profligacy
            </Modal.Title>
          </Modal.Header>
        </Modal>
      </div>
    </div>
    </>
  );
}
