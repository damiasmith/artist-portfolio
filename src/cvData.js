// import ToDo from "./images/to-do-app.png";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const cvData = {
  name: "Damia Smith",
  role: "Full Stack Developer",
  roleDescription:
    "I enjoy creating applications in the cloud with a specialization in AWS. I am passionate about writing clean, readable, reusable code and learning new ways to solve problems.",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/damia-smith",
      className: faLinkedin,
    },
    {
      name: "github",
      url: "https://github.com/damiasmith",
      className: faGithub,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/damia.smith/",
      className: faInstagram,
    },
    {
      name: "youtube",
      url: "https://www.youtube.com/channel/UCLmE8SX9smcZrFMVTyDKm1g",
      className: faYoutube,
    },
  ],
  aboutme:
    "I am currently working as a full-stack developer on the Public Cloud Services team at Centene. I enjoy developing innovative applications for documentation and proof of concept, as well as automating manual ops processes. In my spare time, I am advancing my react skills, learning java, and building personal projects. I also enjoy yoga, biking, hiking, creating art and spending time with my pets.",
  email: "damia.v.smith@gmail.com",
  address: "Seattle, WA",
  website: "https://damiasmith.com",
  cv: {
    url: "https://s3.amazonaws.com/damia.smith.cv/cv/CV2022.pdf",
    education: [
      {
        universityName: "University of Kansas",
        specialization: "MFA Studio Art",
        location: "Lawrence, KS",
        year: "2013",
        honors: "(With Honors)"
      },
      {
        universityName: "Southern Illinois University Edwardsville",
        location: "Edwardsville, IL",
        specialization: "BFA Studio Art/ BS Art Education",
        year: "2008",
        honors: "(Summa Cum Laude)" 
      },
    ],
    teachingExperience: [
      {
        role: "Adjunct Instructor",
        institution: "Lindenwood University",
        location: "St. Charles, MO",
        year: "2018",
        classes: ["ART 136 Three-Dimensional Design"]
      },
      {
        role: "Adjunct Instructor",
        institution: "East Central College",
        location: "Union, MO",
        year: "2017-2018",
        classes: ["ART 125 Two-Dimensional Design", "ART 251 Three-Dimensional Design", "ART 255 Professional Practices"]
      },
      {
        role: "Adjunct Instructor ",
        institution: "Front Range Community College",
        location: "Longmont, CO",
        year: "2016",
        classes: ["ART 133 Jewelry and Metalwork I", "ART 233-235 Jewelry and Metalwork II-IV"]
      },
      {
        role: "Art Teacher",
        institution: "Highlands Ranch High School",
        location: "Highlands Ranch, CO",
        year: "2015- 2016",
        classes: ["Jewelry I-III", "Sculpture I-II"]
      },
      {
        role: "Lecturer/ Instructor-of-Record",
        institution: "University of Kansas",
        location: "Lawrence, KS",
        year: "2010-2015",
        classes: ["ART 123 Fundamentals of Metalsmithing and Jewelry"]
      },
    ],
    soloExhibitions: [
      {
      }
    ],
    portfolio: [
      {
        
      },
    ],
  }
};
