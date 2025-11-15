// Certification Images (Dummy)
const certImg1 = "../../../../public/img/common/greenvedaa-certificate.png";
const certImg2 = "../../../../public/img/common/greenvedaa-certificate.png";
const certImg3 = "../../../../public/img/common/greenvedaa-certificate.png";
const certImg4 = "/../../../../public/img/common/greenvedaa-certificate.png";
const certImg5 = "../../../../public/img/common/greenvedaa-certificate.png";

const getAllCertificationSections = () => {
  const sections = [
    {
      id: 1,
      title: "ISO 9001:2015 Quality Management Certification",
      desc: "Ensures consistent quality improvement with globally accepted standards.",
      img: certImg1,
      icon: <i className='fas fa-certificate'></i>,
      path: "/certifications/iso-9001",
      dep: "ISO Certification",
      duration: "1800",
    },
    {
      id: 2,
      title: "Organic Certification",
      desc: "Validates eco-friendly and chemical-free production practices.",
      img: certImg2,
      icon: <i className='fas fa-leaf'></i>,
      path: "/certifications/organic",
      dep: "Agriculture",
      duration: "2000",
    },
    {
      id: 3,
      title: "GMP Certification",
      desc: "Guarantees standardized manufacturing practices for product safety.",
      img: certImg3,
      icon: <i className='fas fa-shield-alt'></i>,
      path: "/certifications/gmp",
      dep: "Manufacturing",
      duration: "1600",
    },
    {
      id: 4,
      title: "HACCP Certification",
      desc: "Food safety standard ensuring hygienic production & hazard control.",
      img: certImg4,
      icon: <i className='fas fa-utensils'></i>,
      path: "/certifications/haccp",
      dep: "Food Industry",
      duration: "2100",
    },
  ];

  return sections;
};

export default getAllCertificationSections;
