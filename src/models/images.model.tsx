
export interface Images {  
  imageList?: Image[]
};

export interface ThumbnailImages {  
  imageList?: ThumbnailImage[]
};

export interface ThumbnailImage {
  id: string,
  image: string,
  page: string
};

export interface Image {
  id: string,
  image: string,
  title: string,
  year: string,
  dimensions: string,
  media: string,
  description?: string
};




