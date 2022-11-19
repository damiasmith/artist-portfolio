import IconDefinition from '@fortawesome/fontawesome-common-types';

export  interface CvDataModel {  
  name?: string,
  role?: string,
  roleDescription?: string,
  socialLinks?: 
    { 
      name: string, 
      url: string, 
      className: any
    } [], 
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
      {} [],
    portfolio?: 
      {} []
    
};



