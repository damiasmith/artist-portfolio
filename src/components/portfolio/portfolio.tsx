import { ThumbnailImage } from '../../models/images.model';
import './portfolio.css';
import { thumbnailImage } from '../../portfolioData';
const s3 = 'https://s3.amazonaws.com/damia.smith.website.images';


export const Portfolio = () => {
  return (
    <div className='portfolio'>
      <section className='portfolio-image-container'>
        {
          thumbnailImage.imageList && thumbnailImage.imageList.map(( item: ThumbnailImage, index: number ) => (
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

