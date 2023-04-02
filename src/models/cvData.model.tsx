// import IconProp from '@fortawesome/fontawesome-common-types';

export  interface CvDataModel {  
  name?: string,
  role?: string,
  roleDescription?: string,
  socialLinks: SocialLinksModel[], 
  aboutme?: string,
  email?: string,
  address?: string,
  website?: string,
  cv: CvModel
};

export interface CvModel {
    url: string,
    education: 
      {
        universityName: string,
        specialization: string,
        location: string,
        year: string,
        honors: string,
      } [],
    teachingExperience: 
      {
        role: string,
        institution: string,
        location: string,
        year: string,
        classes: string[],
      } [],
    soloExhibitions?: 
      {
        year: string,
        exhibitions: Exhibition[],
      }[]
    groupExhibitions?: 
      {
        year: string,
        exhibitions: Exhibition[],
      }[]
    juriedExhibitions?: 
      {
        year: string,
        exhibitions: Exhibition[],
      }[]
    grants?: 
      {} [],
    awards?: 
      {} [],
  
};

export interface SocialLinksModel {
  name: string, 
  url: string, 
  className: any
} 

export interface Exhibition {
    title: string,
    gallery?: string,
    institution?: string,
    location: string
}

export interface FooterLinks {
  socialLinks: SocialLinksModel[]
} 



