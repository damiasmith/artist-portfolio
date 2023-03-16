import { Images, Image } from '../../models/images.model';
import './portfolio.css';
// import Col from 'react-bootstrap/Col';
import { thumbnailImage} from '../../portfolioData';
const s3 = 'https://s3.amazonaws.com/damia.smith.website.images';


function Portfolio() {
  return (
    <div className='portfolio'>
      <header className='portfolio-header'>
        {/* Portfolio */}
      </header>
      <section className='portfolio-image-container'>
        {
          thumbnailImage.imageList && thumbnailImage.imageList.map(( item: Image, index: number ) => (
            <div key={index} >
              <a href={item.page} >
                <img src={`${s3}/${item.image}.jpg`} className='thumbnail-image' alt={`${item.image}`} height = '200'/>
              </a>
            </div>
          ))
        }
      </section>
    </div>
  );
}

export default Portfolio;
