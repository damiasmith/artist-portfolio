import { Images } from '../../models/images.model';
import './portfolio.css';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { images } from '../../portfolioData';
const s3 = 'https://s3.amazonaws.com/damia.smith.website.images';


function Portfolio() {
  return (
    <div className="portfolio">
      <header className="portfolio-header">
        {/* Portfolio */}
      </header>
      <section className="portfolio-image-container">
        {
          images.thumbnailImageList && images.thumbnailImageList.map(( item, index ) => (
            <div key={index} >
                <img src={`${s3}/${item.image}.jpg`} className="thumbnail-image" alt={`${item.image}`} height = "200"/>
            </div>
          ))
        }
      </section>
    </div>
  );
}

export default Portfolio;
