import './cv.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { CvDataModel } from '../../models/cvData.model';
library.add(faFilePdf);

export const CV = ( cvData : CvDataModel) =>{
  return (
      <section className="cv-container">
        <div className="cv">
          <header className="cv-header"> 
            <div>
              <div>
                <h1>Curriculum Vitae</h1>
              </div>
              <div className='pdf'> 
                <div>PDF</div>
                <div>
                  <a href={cvData.cv.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={ faFilePdf } size="2x" className='pdf-icon'/>
                  </a>
                </div>
              </div>
            </div>
            <div className='education cv-item'>
              <Row>
                <Col className='cv-heading' sm="4">
                  <h3>Education</h3>
                </Col>
                <Col className='cv-body' lg="12">
                <Row>
                  {
                    cvData.cv.education && cvData.cv.education.map(( item ) => {
                      return(
                        <Row>
                          <Col className='item'>
                              <span className="date">{item.year}</span>
                              <span>{item.universityName}</span>
                              <span>
                                {item.honors}
                              </span>
                          
                            <Row>
                            <div className="info">
                              {item.specialization}
                            </div>
                            </Row>
                          </Col>
                        </Row>
                      )
                    })
                  }
                  </Row>
                </Col>
              </Row>
            </div>
            <div className="teaching cv-item">
              <Row>
                <Col className='resume-heading' sm="4">
                  <h3><span>Teaching Experience</span></h3>
                </Col>
                <Col className='resume-body' lg="12">
                  {
                    cvData.cv.teachingExperience && cvData.cv.teachingExperience.map((item, index) => {
                      return(
                        <Row className='item' key={index}>
                          <Col>
                              <span className="date">
                                {item.year}
                              </span>
                              <h5>{item.role}</h5>
                              <span className="info">
                                {item.institution}
                              </span>
                              <span>
                                {item.location}
                              </span>
                              <p>
                                {item.classes}
                              </p>
                          </Col>
                        </Row>
                      )
                    })
                  }
                </Col>
              </Row>
            </div>
          </header>
        </div>
      </section>
    )};
