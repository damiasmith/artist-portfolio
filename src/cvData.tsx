import { CvDataModel, SocialLinksModel } from './models/cvData.model';

import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

export const footerLinks: { socialLinks: SocialLinksModel[] } = {
  socialLinks: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/damia-smith',
      className: faLinkedin,
    },
    {
      name: 'github',
      url: 'https://github.com/damiasmith',
      className: faGithub,
    },
]};

export const cvData: CvDataModel = {
  name: 'Damia Smith',
  email: 'damia.v.smith@gmail.com',
  address: 'Seattle, WA',
  website: 'https://damiasmith.com',
  socialLinks: footerLinks.socialLinks,
  cv: {
    url: 'https://s3.amazonaws.com/damia.smith.website.images/Damia.Smith.CV_2023.pdf',
    education: [
      {
        universityName: 'University of Kansas',
        specialization: 'MFA Studio Art',
        location: 'Lawrence, KS',
        year: '2013',
        honors: '(With Honors)'
      },
      {
        universityName: 'Southern Illinois University Edwardsville',
        location: 'Edwardsville, IL',
        specialization: 'BFA Studio Art/ BS Art Education',
        year: '2008',
        honors: '(Summa Cum Laude)' 
      },
    ],
    teachingExperience: [
      {
        role: 'Adjunct Instructor',
        institution: 'Lindenwood University',
        location: 'St. Charles, MO',
        year: '2018',
        classes: ['ART 136 Three-Dimensional Design']
      },
      {
        role: 'Adjunct Instructor',
        institution: 'East Central College',
        location: 'Union, MO',
        year: '2017-2018',
        classes: ['ART 125 Two-Dimensional Design', 'ART 251 Three-Dimensional Design', 'ART 255 Professional Practices']
      },
      {
        role: 'Adjunct Instructor ',
        institution: 'Front Range Community College',
        location: 'Longmont, CO',
        year: '2016',
        classes: ['ART 133 Jewelry and Metalwork I', 'ART 233-235 Jewelry and Metalwork II-IV']
      },
      {
        role: 'Art Teacher',
        institution: 'Highlands Ranch High School',
        location: 'Highlands Ranch, CO',
        year: '2015-2016',
        classes: ['Jewelry I-III', 'Sculpture I-II']
      },
      {
        role: 'Lecturer/ Instructor-of-Record',
        institution: 'University of Kansas',
        location: 'Lawrence, KS',
        year: '2010-2013, 2014-2015',
        classes: ['ART 123 Fundamentals of Metalsmithing and Jewelry']
      },
    ],
    soloExhibitions: [
      {
        year: '2019',
          exhibitions: [
            {
            title: 'projection…empathy',
            gallery: 'Contemporary Gallery',
            institution: 'St. Louis Community College - Florissant Valley',
            location: 'St. Louis, MO'
          }
        ]
      },
      {
        year: '2016',
        exhibitions: [
          {
            title: 'Burdensome',
            gallery: 'Emanuel Gallery',
            institution: 'University of Colorado',
            location: 'Denver, CO'
          }
        ]
      },
      {
        year: '2015',
        exhibitions: [
          {
            title: 'The Weight of an Object: iPhone',
            gallery: 'Massachusetts Street',
            location: 'Lawrence, KS'
          },
          {
            title: 'The Weight of an Object: TOMs shoes',
            gallery: 'Massachusetts Street',
            location: 'Lawrence, KS'
          },
          {
            title: 'The Weight of an Object: KU t-shirt',
            gallery: 'Massachusetts Street',
            location: 'Lawrence, KS'
          }
        ]
      },
      {
        year: '2013',
        exhibitions: [
          {
            title: 'projection…identification…empathy',
            gallery: 'Plenum Space Gallery',
            location: 'Kansas City, MO'
          },
          {
            title: 'projection…identification…empathy',
            gallery: 'Art and Design Gallery',
            institution: 'University of Kansas',
            location: 'Lawrence, KS'
          }
        ]
      }
    ],
    groupExhibitions: [
      {
        year: '2019',
        exhibitions: [
          {
            title: 'Domestic Matters: The Uncommon Apron',
            gallery: 'Contemporary Gallery',
            institution: 'Peters Valley School of Craft',
            location: 'Layton, NJ'
          }
        ]
      },
      {
        year: '2018',
        exhibitions: [
          {
            title: 'Artist in Residence Anniversary Exhibition',
            institution: 'Craft Alliance',
            location: 'St. Louis, MO'
          }
        ]
      },
      {
        year: '2017',
        exhibitions: [
          {
            title: 'Adorned Spaces: Interconnected',
            gallery: 'Sheraton Hotel',
            institution: 'Society of North American Goldsmiths',
            location: 'New Orleans, LA'
          },
          {
            title: 'Halstead Design Challenge',
            institution: 'Society of North American Goldsmiths',
            location: 'online exhibition'
          },
          {
            title: 'Makers: Past + Present',
            gallery: 'Meeting Place Gallery',
            institution: 'Lambert International Airport',
            location: 'St. Louis, MO'
          },
          {
            title: 'Biennial Faculty Exhibition',
            institution: 'Craft Alliance',
            location: 'St. Louis, MO'
          },
          {
            title: 'Crafting-a-Future Exhibition',
            institution: 'Craft Alliance',
            location: 'St. Louis, MO'
          }
        ]
      },
      {
        year: '2016',
        exhibitions: [
          {
            title: 'Fire + Iron = Art',
            institution: 'The Curtis Center for the Arts and Humanities',
            location: 'Denver, CO'
          },
          {
            title: 'Heating Up:  Artists Respond to Climate Change',
            institution: 'Percolator',
            location: 'Lawrence, KS'
          },
          {
            title: 'Faculty Exhibition',
            gallery:'Boulder County Campus',
            institution: 'Front Range Community College',
            location: 'Longmont, CO'
          },
          {
            title: 'Colorado Community College Faculty Art Show',
            institution: 'Lowry Conference Center',
            location: 'Aurora, CO'
          }
        ]
      },
      {
        year: '2015',
        exhibitions: [
          {
            title: 'Douglas County School District Faculty Art Show',
            institution: 'Douglas County Library',
            location: 'Highlands Ranch, CO'
          }
        ]
      },
      {
        year: '2014',
        exhibitions: [
          {
            title: 'Visual Art Annual Faculty Exhibition',
            gallery: 'Art and Design Gallery',
            institution: 'University of Kansas',
            location: 'Lawrence, KS'
          }
        ]
      },
      {
        year: '2012',
        exhibitions: [
          {
            title: 'Metamorphic: Presentation of Student Work',
            institution: 'Society of North American Goldsmiths',
            location: 'Phoenix, AZ'
          },
          {
            title: 'Directed Visions',
            institution: 'Lawrence Art Center',
            location: 'Lawrence, KS'
          }
        ]
      },
      {
        year: '2011',
        exhibitions: [
          {
            title: 'Crossing the Spectrum',
            institution: 'BNIM Architecture Firm',
            location: 'Kansas City, MO'
          },
          {
            title: 'Above Average: Recent Work by Decent People',
            gallery: 'Art and Design Gallery',
            institution: 'University of Kansas',
            location: 'Lawrence, KS'
          }
        ]
      },
      {
        year: '2010',
        exhibitions: [
          {
            title: 'Material Juxtaposition',
            institution: 'Main Street Art Gallery',
            location: 'Edwardsville, IL'
          }
        ]
      },
      {
        year: '2009',
        exhibitions: [
          {
            title: 'Biennial Faculty Exhibition',
            institution: 'Craft Alliance',
            location: 'St. Louis, MO'
          },
          {
            title: 'Concurrent: Artists-in-Residence Exhibition',
            gallery: 'Grand Center Gallery',
            institution: 'Craft Alliance',
            location: 'St. Louis, MO'
          }
        ]
      },
      {
        year: '2008',
        exhibitions: [
          {
            title: 'New Faces of Craft: Artists from Craft Alliance at Grand Center',
            institution: 'St. Louis University',
            location: 'St. Louis, MO'
          }
        ]
      },
    ],
    juriedExhibitions: [
      {
        year: '2017',
        exhibitions: [
          {
            title: 'Topeka Competition 33',
            gallery: 'Alice C. Sabatini Gallery',
            institution: 'Topeka and Shawnee County Public Library',
            location: 'Topeka, KS'
          }
        ]
      },
      {
        year: '2015',
        exhibitions: [
          {
            title: 'Free State Festival',
            institution: ' Lawrence Art Center',
            location: 'Lawrence, KS'
          }
        ]
      },
      {
        year: '2013',
        exhibitions: [
          {
            title: 'Wearable Art Awards',
            gallery: '(performance and exhibition)',
            institution: 'Port Moody Art Centre',
            location: 'Port Moody, British Columbia, Canada'
          },
          {
            title: 'How Much Can We Control?',
            gallery: 'Clayton Staples Gallery',
            institution: 'Wichita State University',
            location: 'Wichita, KS'
          }
        ]
      },
      {
        year: '2012',
        exhibitions: [
          {
            title: 'Juried Summer Show',
            gallery: 'Sylvia White Gallery',
            location: 'Ventura, CA'
          },
          {
            title: 'The Body Adorned',
            institution: 'Society of North American Goldsmiths',
            location: 'online exhibition'
          },
          {
            title: 'Fusion: Juried Student Exhibition',
            institution: 'Society of North American Goldsmiths',
            location: 'Phoenix, AZ'
          },
          {
            title: 'LibArt',
            institution: 'University of Kansas',
            location: 'Lawrence, KS'
          },
          {
            title: 'Connection-Misconnection Juried Student Art Show',
            gallery: 'Spencer Museum of Art',
            institution: 'University of Kansas',
            location: 'Lawrence, KS'
          },
          {
            title: 'Crafts National Mulvane',
            gallery: 'Mulvane Art Museum',
            institution: 'Washburn University',
            location: 'Topeka, KS'
          },
          {
            title: 'Outside/Inside the Box',
            institution: 'Crane Arts Building',
            location: 'Philadelphia, PA'
          }
        ]
      },
      {
        year: '2011',
        exhibitions: [
          {
            title: 'Craft Forms',
            institution: 'Wayne Art Center',
            location: 'Wayne, PA'
          },
          {
            title: 'Alchemy: 9th International Juried Enamel Student Exhibition',
            gallery: '(traveling exhibition)',
            institution: 'Arrowmont School of Arts and Crafts; Knoxville Museum of Art; Metals Museum',
            location: 'Gatlinburg, TN; Knoxville, TN; Memphis, TN'
          }
        ]
      },
      {
        year: '2010',
        exhibitions: [
          {
            title: 'All Media Juried Show',
            institution: 'Edwardsville Art Center',
            location: 'Edwardsville, IL'
          },
          {
            title: 'Exhibition in Motion',
            institution: 'Houston Art Museum',
            location: 'Houston, TX'
          }
        ]
      },
      {
        year: '2009',
        exhibitions: [
          {
            title: '41st Mid-States Craft Exhibition',
            institution: 'Evansville Museum',
            location: 'Evansville, IN'
          },
          {
            title: 'Radiance: A Juried Enamel Exhibition',
            institution: 'San Diego Enamel Guild',
            location: 'San Diego, CA'
          },
          {
            title: 'Surfacing: 12th Biennial International Juried Enamel Exhibition',
            institution: 'Oakland Gallery',
            location: 'Oakland, CA'
          },
          {
            title: 'Double Vision',
            institution: 'Luke & Eloy Gallery',
            location: 'Pittsburgh, PA'
          }
        ]
      },
      {
        year: '2008',
        exhibitions: [
          {
            title: 'Form, Fabricate, and Forge',
            institution: 'Southern Illinois University',
            location: 'Carbondale, IL'
          },
          {
            title: 'National Cup Show',
            institution: 'Barrett Clay Works',
            location: 'Poughkeepsie, NY'
          },
          {
            title: 'Annual Juried Exhibition',
            institution: 'Jacoby Art Center',
            location: 'Alton, IL'
          },
          {
            title: 'Student Art Competition',
            institution: 'Southern Illinois University',
            location: 'Edwardsville, IL'
          }
        ]
      }
    ],
  }
};

