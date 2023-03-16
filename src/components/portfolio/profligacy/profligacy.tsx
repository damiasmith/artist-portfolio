import { Image } from '../../../models/images.model';
import './profligacy.css';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { profligacyImage } from '../../../portfolioData';
const s3 = 'https://s3.amazonaws.com/damia.smith.website.images';


function Profligacy() {
  return (
    <div className='profligacy'>
      <header className='profligacy-header'>
        Profligacy
      </header>
      <section className='profligacy-image-container'>
        {
          profligacyImage.imageList && profligacyImage.imageList.map(( item: Image, index: number ) => (
            <div key={index} >
                <img src={`${s3}/${item.image}.jpg`} className='profligacy-image' alt={`${item.image}`} height = '600'/>
            </div>
          ))
        }
      </section>
    </div>
  );
}

export default Profligacy;
