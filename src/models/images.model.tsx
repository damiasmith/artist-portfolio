
export interface Images { 
  title?: string
  imageList?: Image[]
};

export interface ThumbnailImages {  
  imageList?: ThumbnailImage[]
};

export interface ThumbnailImage {
  id: string,
  image: string,
  page: string,
  function: string
};

export interface Image {
  id: string,
  image?: string,
  video?: string,
  title: string,
  year: string,
  dimensions: string,
  media: string,
  description?: string
};




