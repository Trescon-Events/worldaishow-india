"use client";

export interface Speaker {
  id: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  bio?: string;
  reviewRequired?: boolean;
  reviewReason?: string;
}

export const speakers: Speaker[] = [
  {
    id: "sumnesh-joshi",
    name: "Sumnesh Joshi",
    designation: "Deputy Director General, Ministry of Communication",
    company: "Government of India",
    image: "/mumbai/enterprise/images/speakers/processed/Sumnesh-Joshi.png",
  },
  {
    id: "ashwini-tewari",
    name: "Ashwini Tewari",
    designation: "Managing Director",
    company: "State Bank of India",
    image: "/mumbai/enterprise/images/speakers/processed/Ashwini.png",
  },
  {
    id: "cp-gurnani",
    name: "CP Gurnani",
    designation: "Co-Founder & Executive Vice Chairman",
    company: "AIonOS",
    image: "/mumbai/enterprise/images/speakers/processed/Chander-Prakash.png",
  },
  {
    id: "tapan-singhel",
    name: "Tapan Singhel",
    designation: "MD & CEO",
    company: "Bajaj Allianz General Insurance",
    image: "/mumbai/enterprise/images/speakers/processed/Tapan-Singhel.png",
  },
  {
    id: "kirti-patil",
    name: "Kirti Patil",
    designation: "Chief Technology Officer",
    company: "Kotak Mahindra Life Insurance Company Limited",
    image: "/mumbai/enterprise/images/speakers/processed/Kirti-Patil.png",
  },
  {
    id: "saumer-kumar-phukan",
    name: "Saumer Kumar Phukan",
    designation: "Director, Head of Customer & Partner Engineering",
    company: "Intel India",
    image: "/mumbai/enterprise/images/speakers/processed/Saumer.png",
  },
  {
    id: "shruti-kashyap",
    name: "Shruti Kashyap",
    designation: "Chief Information Officer",
    company: "Hindustan Unilever",
    image: "/mumbai/enterprise/images/speakers/processed/Shruti-Kshyap.png",
  },
  {
    id: "sangeeta-roy",
    name: "Sangeeta Roy",
    designation: "Director, Software & Services Partner Business, Sales & Marketing Group",
    company: "Intel India",
    image: "/mumbai/enterprise/images/speakers/processed/Sangeeta-Roy.png",
  },
  {
    id: "sanjay-mohan",
    name: "Sanjay Mohan",
    designation: "Group Chief Technology Officer",
    company: "MakeMyTrip",
    image: "/mumbai/enterprise/images/speakers/processed/SANJAY-MOHAN.png",
  },
  {
    id: "krishnan-venkateswaran",
    name: "Krishnan Venkateswaran",
    designation: "Chief Digital & Information Officer",
    company: "Titan Company Limited",
    image: "/mumbai/enterprise/images/speakers/processed/KRISHNAN-VENKATESWARAN.png",
  },
  {
    id: "vikram-chauhan",
    name: "Vikram Chauhan",
    designation: "Director & Head of Enterprise & Government Business",
    company: "Intel India",
    image: "/mumbai/enterprise/images/speakers/processed/Vikram-Chauhan.png",
  },
  {
    id: "abhinav-srivastava",
    name: "Abhinav Srivastava",
    designation: "Chief Information Officer & Head of IT Shared Services",
    company: "Daimler India Commercial Vehicles Pvt. Ltd. (DICV)",
    image: "/mumbai/enterprise/images/speakers/processed/Abhinav-Srivastava.png",
  },
  {
    id: "golok-kumar-simli",
    name: "Golok Kumar Simli",
    designation: "Principal Advisor and Chief Technology Officer",
    company: "Ministry of External Affairs, India",
    image: "/mumbai/enterprise/images/speakers/processed/Golok-Kumar-Simli.png",
  },
  {
    id: "suhail-ghai",
    name: "Suhail Ghai",
    designation: "Chief Digital & Information Officer",
    company: "Max Life Insurance",
    image: "/mumbai/enterprise/images/speakers/processed/Suhail-Ghai.png",
  },
  {
    id: "harshavardhan-chauhaan",
    name: "Harshavardhan Chauhaan",
    designation: "VP, Chief Marketing & Omnichannel Officer",
    company: "Spencer’s Retail & Nature’s Basket",
    image: "/mumbai/enterprise/images/speakers/processed/Harshavardhan-Chauhaan.png",
  },
  {
    id: "ajay-nambiar",
    name: "Ajay Nambiar",
    designation: "Chief Operating Officer at PYP; Chief Service Officer",
    company: "M3M India Pvt Ltd",
    image: "/mumbai/enterprise/images/speakers/processed/Ajay-Nambiar.png",
  },
  {
    id: "nordin-abdullah",
    name: "Nordin Abdullah",
    designation: "Co-Founder",
    company: "News Desk Asia",
    image: "/mumbai/enterprise/images/speakers/processed/Nordin%20Abdullah.png",
  },
  {
    id: "fabian-bigar",
    name: "Fabian Bigar",
    designation: "Secretary General",
    company: "Ministry of Digital Malaysia",
    image: "/mumbai/enterprise/images/speakers/processed/Fabian%20Bigar.png",
  },
  {
    id: "sahaj-kothari",
    name: "Sahaj Kothari",
    designation: "Partner",
    company: "Capzara Capital",
    image: "/mumbai/enterprise/images/speakers/processed/Sahaj%20Kothari.png",
  },
  {
    id: "sr-jamie-tan",
    name: "Sr Jamie Tan",
    designation: "Managing Director",
    company: "JLL Appraisal & Property Services Sdn Bhd",
    image: "/mumbai/enterprise/images/speakers/processed/Sr%20Jamie%20Tan.png",
  },
  {
    id: "pratikno",
    name: "H.E. Prof. Dr. Pratikno",
    designation: "Coordinating Minister of Human Development and Culture",
    company: "Republic of Indonesia",
    image: "/mumbai/enterprise/images/speakers/processed/H.E.%20Prof.%20Dr.%20Pratikno.png",
  },
  {
    id: "vivi-yulaswati",
    name: "Vivi Yulaswati",
    designation: "Deputy for Economic Affairs and Digital Transformation",
    company: "BAPPENAS",
    image: "/mumbai/enterprise/images/speakers/processed/Vivi%20Yulaswati.png",
  },
  {
    id: "muhammad-neil-el-himam",
    name: "Muhammad Neil El Himam",
    designation: "Deputy for Digital and Technology Creativity",
    company: "Ministry of Creative Economy/Creative Economy Agency (EKRAF) of the Republic of Indonesia",
    image: "/mumbai/enterprise/images/speakers/processed/Muhammad%20Neil%20El%20Himam.png",
  },
  {
    id: "hammam-riza",
    name: "Prof. Hammam Riza",
    designation: "President",
    company: "KORIKA - Collaborative Research and Industrial Innovation in AI",
    image: "/mumbai/enterprise/images/speakers/processed/Prof.%20Hammam%20Riza.png",
  },
  {
    id: "dr-eesa-bastaki",
    name: "Dr. Eesa Bastaki",
    designation: "President",
    company: "University of Dubai, UAE",
    image: "/mumbai/enterprise/images/speakers/processed/Dr-Eesa-Bastaki.png",
  },
  {
    id: "dr-omar-hatamleh",
    name: "Dr. Omar Hatamleh",
    designation: "Chief Advisor, Artificial Intelligence & Innovation",
    company: "NASA - Goddard Space Flight Center, USA",
    image: "/mumbai/enterprise/images/speakers/processed/Dr-Omar-Hatamleh.png",
  },
  {
    id: "dr-ramadan-alblooshi",
    name: "Dr. Ramadan Alblooshi",
    designation: "Senior Advisor to the Director General",
    company: "Dubai Health Authority, UAE",
    image: "/mumbai/enterprise/images/speakers/processed/DR.-RAMADAN-ALBLOOSHI.png",
  },
  {
    id: "salwa-al-blushi",
    name: "Salwa Al Blushi",
    designation: "Head of Digital Standards and Operations",
    company: "MOHAP, UAE",
    image: "/mumbai/enterprise/images/speakers/processed/Mrs.-Salwa-Al-Blushi.png",
  },
];
