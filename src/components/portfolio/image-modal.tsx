import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Image, Images } from '../../models/images.model';
import Col from 'react-bootstrap/Col';
import './portfolio-image.css';
const s3 = 'https://s3.amazonaws.com/damia.smith.website.images';

export const ImageOrVideo = (item: Image, setShow: React.Dispatch<React.SetStateAction<boolean>>, setId: React.Dispatch<React.SetStateAction<null>>) => {
  if (item.video) {
    return (
      <div className='video-container'>
        <div>
          <iframe
            src={item.video}
            allow='autoplay; fullscreen; picture-in-picture'
            title={item.title}
            className='video'>
          </iframe>
        </div>
        <script
          src='https://player.vimeo.com/api/player.js'>
        </script>
      </div>
    )
  } else {
    return (
      <div key={item.id}>
        <img src={`${s3}/${item.image}.jpg`} className='image' alt={`${item.image}`} height='600' onClick={() => { setShow(true); setId(item.id as any) }} />
      </div>
    )
  }
}

export const PortfolioImage = (portfolioImage: Images) => {
  let image: Image | undefined;
  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);
  const getImage = (id: any) => portfolioImage.imageList?.filter(image => image.id === id)[0];

  return (
    <>
      <div>
        <div className='header'>{portfolioImage.title}</div>
      </div>
      <div className='image-container'>
        {
          portfolioImage.imageList?.map((item: Image) => (
            ImageOrVideo(item, setShow, setId)
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
            <div>
              <img src={`${s3}/${getImage(id)?.image}.jpg`} className='modal-image img-fluid' alt={`${getImage(id)?.image}`} height='600' />
            </div>
          </Modal.Body>
          <Modal.Header className='modal-header' closeButton>
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
  )
}

