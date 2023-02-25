// import IconProp from '@fortawesome/fontawesome-common-types';

export interface Images {  
  imageList?: Image[],
  imageListData?: {
    title: string,
    date: string,
    description: string,
    media: string
  }
};

export interface Image {
  image: string,
  page: string
};




