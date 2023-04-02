import './home.css';

export const Home = () => {
  const s3 = 'https://s3.amazonaws.com/damia.smith.website.images';
  return (
    <div className='home-container'>
        <section className='home-image-container'>
          <div>
            <img src={`${s3}/profligacy.jpg`} className='home-image img-fluid' alt='profligacy'/>
          </div>
          <div>
            <img src={`${s3}/profligacy.jpg`} className='large-home-image img-fluid' alt='profligacy'/>
          </div>
          <div>
            <img src={`${s3}/profligacy_body.jpg`} className='small-home-image img-fluid' alt='profligacy_body'/>
          </div>
        </section>
    </div>
  );
}

