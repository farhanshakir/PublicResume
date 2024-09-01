// Init
import React from 'react';
import Globe from '../assets/globe.png';
// import GiftUni from '../assets/giftUniversity.svg';
import Google from '../assets/google.svg';
import Falcon from '../assets/falconIcon.png';
import Virtual from '../assets/virtual.png';
import Emperor from '../assets/emperor.png';
import CertificateTag from './common/CertificateTag';

// Component
export default function Certification() {
  return (
    <div className="certificateSectionContainer">
      <div className="educationSectionImageDiv">
        <img src={Globe} alt="Globe" />
      </div>
      <div className="educationSectionContentDiv">
        <h2>CERTIFICATION & ACHIEVEMENTS </h2>
        <CertificateTag
          Icon={Google}
          title1="Create High-Fidelity Designs and Prototypes in Figma"
          title2="Conduct UX Research and Test Early Concepts"
          title3="Build Wireframes and Low-Fidelity Prototypes"
          title4="UX Design Process"
          title5="Foundations of UX Design"
          organization1="Google"
          organization2="Google"
          organization3="Google"
          organization4="Google"
          organization5="Google"
          year1="2024"
          year2="2024"
          year3="2023"
          year4="2023"
          year5="2022"
          link3="https://www.coursera.org/account/accomplishments/certificate/PRQMAQPNGAPA"
          link4="https://www.coursera.org/account/accomplishments/certificate/GHSXCWMK5C4S"
          link5="https://coursera.org/verify/EPX2NAUDD7HA"
        />
        <CertificateTag
          Icon={Falcon}
          title1="Employee of the Year"
          organization1="Falcon Consulting"
          year1="2023"
          title2="Hidden Gem"
          organization2="Falcon Consulting"
          year2="2022"
        />
        <CertificateTag
          Icon={Virtual}
          title1="Virtual Exchange Program of the University of Dundee in collaboration with GIFT University"
          organization1="University of Dundee"
          year1="2021"
          link1="https://www.dundee.ac.uk/"
        />
        <CertificateTag
          Icon={Emperor}
          title1="Language and Multicultural Communication Program"
          organization1="Emperor Alexander I St. Petersburg State Transport University"
          year1="2021"
          link1="https://www.pgups.ru/en/"
        />
      </div>
    </div>
  );
}
