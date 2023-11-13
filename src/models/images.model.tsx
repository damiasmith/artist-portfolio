
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
  function: string,
  orientation?: string,
  class?: string
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
  orientation?: string,
};

export interface StudentImage {
  id: string,
  image: string,
  institution: string,
  year: string,
  orientation: string
  dimensions?: string,
  media?: string,
};

export interface StudentImages { 
  class: string
  projects: Project[]
};

export interface Project {
  title: string,
  description?: string
  imageList?: StudentImage[]
}




