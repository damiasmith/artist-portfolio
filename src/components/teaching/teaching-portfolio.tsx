import { ThumbnailImage } from '../../models/images.model';
import './teaching-portfolio.css';
import { teachingThumbnailImage } from '../../teachingPortfolioData';
const s3 = 'https://s3.amazonaws.com/damia.smith.website.images/teaching';

export const TeachingPortfolio = () => {
  return (
    <div className='teaching-portfolio'>
      <section className='teaching-thumbnail-container'>
        {teachingThumbnailImage.imageList &&
          teachingThumbnailImage.imageList.map(
            (item: ThumbnailImage, index: number) => (
              <div key={index}>
                <a href={item.page}>
                  <img
                    src={`${s3}/${item.image}.jpg`}
                    className='teaching-thumbnail-image'
                    alt={`${item.image}`}
                    height={item.orientation === 'portrait' ? '300' : 'auto'}
                    width={item.orientation === 'landscape' ? '300' : 'auto'}
                  />
                </a>
                <div className='class-name'>{item.class}</div>
              </div>
            )
          )}
      </section>
    </div>
  );
};
