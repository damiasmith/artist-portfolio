import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'; 
import { Image, Images } from '../../models/images.model';
import Col from 'react-bootstrap/Col';
import './portfolio-image.css';
const s3 = 'https://s3.amazonaws.com/damia.smith.website.images';

export const PortfolioImage = (portfolioImage: Images) => {
  let image: Image | undefined;
  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);
  const getImage = (id: any) => portfolioImage.imageList?.filter(image => image.id === id)[0];

  return (
    <>
      <div className='header'>
        <h5>{portfolioImage.title}</h5>
      </div>
      <div className='image-container'>
        {
          portfolioImage.imageList?.map((item: Image) => (
            <div key={item.id}>
              <img src={`${s3}/${item.image}.jpg`} className='image' alt={`${item.image}`} height='600' onClick={() => { setShow(true); setId(item.id as any) }} />
            </div>
          ))
        }
      </div>
      <div>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName='modal-90w'
          aria-labelledby='example-custom-modal-styling-title'
        >
          <Modal.Body className='modal-container'>
            <div >
              <img src={`${s3}/${getImage(id)?.image}.jpg`} className='modal-image img-fluid' alt={`${getImage(id)?.image}`} height='600' />
            </div>
          </Modal.Body>
          <Modal.Header closeButton>
            <Col {...image = getImage(id)}>
              <div>{image?.title}</div>
              <div>{image?.media}</div>
              <div>{image?.year}</div>
              <div>{image?.dimensions}</div>
            </Col>
          </Modal.Header>
        </Modal>
      </div>
    </>
  );
}