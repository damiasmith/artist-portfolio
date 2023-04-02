import './cv.css';
import classNames from 'classnames/bind';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { CvDataModel } from '../../models/cvData.model';
library.add(faFilePdf);

export const CV = (cvData: CvDataModel) => {
  const cx = classNames.bind({ item: 'item' });
  return (
    <section>
      <header className='cv-header'>
        <h4>Curriculum Vitae</h4>
      </header>
      <div className='pdf'>
        <div>
          <a href={cvData.cv.url} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faFilePdf} size='2x' className='pdf-icon' />
          </a>
        </div>
      </div>
      <div className='education cv-item'>
        <Row>
          <Col className='cv-heading' sm='8'>
            <h4>Education</h4>
          </Col>
          <Col lg='12'>
            <Row>
              {
                cvData.cv.education && cvData.cv.education.map((item, index) => {
                  return (
                    <div>
                      <Row className='item' key={index}>
                        <Col sm='2'>{item.year}</Col>
                        <Col className='info'>
                          <Row>
                            <div className='container'>
                              <span className='item bold'>{item.universityName}</span>
                              <span className='item'>{item.honors}</span>
                            </div>
                          </Row>
                          <Row>
                            <div className='indent container'>
                              {item.specialization}
                            </div>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </div>
      <div className='teaching cv-item'>
        <Row>
          <Col className='cv-heading' sm='8'>
            <h4>Teaching Experience</h4>
          </Col>
          <Col lg='12'>
            <Row>
              {
                cvData.cv.teachingExperience && cvData.cv.teachingExperience.map((item, index: number) => {
                  return (
                    <div>
                      <Row className='item' key={index}>
                        <Col sm='2'>{item.year}</Col>
                        <Col>
                          <Row>
                            <div className='container'>
                              <span className='item bold'>{item.role}</span>
                              <span className='item'>
                                {item.institution}
                              </span>
                              <span className='item'>
                                {item.location}
                              </span>
                            </div>
                            <div className='space'>
                              {item.classes && item.classes.map((item, index) => {
                                return (
                                  <div key={index} className='indent'>{item}</div>
                                )
                              }
                              )}
                            </div>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </div>
      <div className='solo cv-item'>
        <Row>
          <Col className='cv-heading' lg='12'>
            <h4>Solo Exhibitions and Performances</h4>
          </Col>
          <Col lg='12'>
            <Row>
              {
                cvData.cv.soloExhibitions && cvData.cv.soloExhibitions.map((item, index: number) => {
                  return (
                    <div>
                      <Row className='item space' key={index}>
                        <Col sm='2'>{item.year}</Col>
                        <Col className='info'>
                          <Row>
                            {item.exhibitions && item.exhibitions.map((item, index) => {
                              const className = cx({ item: item.institution });
                              return (
                                <div key={index} className='container'>
                                  <span className='bold item'>{item.title}</span>
                                  <span className='item'>{item.gallery}</span>
                                  <span className={className}>{item.institution}</span>
                                  <span className='item'>{item.location}</span>
                                </div>
                              )
                            }
                            )}
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </div>
      <div className='group cv-item'>
        <Row>
          <Col className='cv-heading' sm='8'>
            <h4><span> Selected Group Exhibitions </span></h4>
          </Col>
          <Col className='cv-body' lg='12'>
            <Row>
              {
                cvData.cv.groupExhibitions && cvData.cv.groupExhibitions.map((item, index: number) => {
                  return (
                    <div>
                      <Row className='item space' key={index}>
                        <Col sm='2'>{item.year}</Col>
                        <Col className='info'>
                          <Row>
                            {item.exhibitions && item.exhibitions.map((item, index) => {
                              const className = cx({ item: item.gallery });
                              return (
                                <div key={index} className='container'>
                                  <span className='bold item'>{item.title}</span>
                                  <span className={className}>{item.gallery}</span>
                                  <span className='item'>{item.institution}</span>
                                  <span className='item'>{item.location}</span>
                                </div>
                              )
                            }
                            )}
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </div>
      <div className='juried cv-item'>
        <Row>
          <Col className='cv-heading' sm='8'>
            <h4><span> Selected Juried Exhibitions </span></h4>
          </Col>
          <Col lg='12'>
            <Row>
              {
                cvData.cv.juriedExhibitions && cvData.cv.juriedExhibitions.map((item, index: number) => {
                  return (
                    <div>
                      <Row className='item space' key={index}>
                        <Col className='year' sm='2'>{item.year}</Col>
                        <Col className='info'>
                          <Row>
                            {item.exhibitions && item.exhibitions.map((item, index) => {
                              const className = cx({ item: item.gallery });
                              return (
                                <div key={index} className='container'>
                                  <span className='bold item'>{item.title}</span>
                                  <span className={className}>{item.gallery}</span>
                                  <span className='item'>{item.institution}</span>
                                  <span className='item'>{item.location}</span>
                                </div>
                              )
                            }
                            )}
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  )
};
