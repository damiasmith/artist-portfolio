import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {
  StudentImage,
  StudentImages,
  Project,
} from '../../models/images.model';
import Col from 'react-bootstrap/Col';
import './teaching-portfolio.css';
const s3 = 'https://s3.amazonaws.com/damia.smith.website.images/teaching';

export const ClassImages = (classImages: StudentImages) => {
  let image: StudentImage | undefined;
  const [show, setShow] = useState(false);
  const [id, setId] = useState('');
  const [index, setIndex] = useState(0);

  const getImage = (projectIndex: number, imageId: string) =>
    classImages.projects[projectIndex].imageList?.filter(
      (image) => image.id === imageId
    )[0];

  return (
    <>
      <div className='header'>{classImages.class}</div>
      <div>
        {classImages.projects!.map((project: Project, index: number) => (
          <div className='teaching-container'>
            <div className='class-header'>{project.title}</div>
            <div>
              <div className='teaching-image-container'>
                {project.imageList!.map((item: StudentImage) => (
                  <div key={item.id}>
                    <img
                      src={`${s3}/${item.image}.jpg`}
                      className='teaching-image'
                      alt={`${item.image}`}
                      height={item.orientation === 'portrait' ? '300' : 'auto'}
                      width={item.orientation === 'landscape' ? '300' : 'auto'}
                      onClick={() => {
                        setShow(true);
                        setId(item.id);
                        setIndex(index);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName='modal-90w'
            aria-labelledby='example-custom-modal-styling-title'
          >
            <Modal.Body className='modal-container'>
              <div>
                <img
                  src={`${s3}/${getImage(index, id)?.image}.jpg`}
                  className='teaching-modal-image img-fluid'
                  alt={`${getImage(index, id)?.image}`}
                  height='600'
                />
              </div>
            </Modal.Body>
            <Modal.Header className='modal-header' closeButton>
              <Col {...(image = getImage(index, id))}>
                <div>{image?.institution}</div>
                <div>{image?.year}</div>
              </Col>
            </Modal.Header>
          </Modal>
        </div>
      </div>
    </>
  );
};
