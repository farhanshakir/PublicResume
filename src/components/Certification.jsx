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
    <div className="educationSectionContainer">
      <div className="educationSectionImageDiv">
        <img src={Globe} alt="Globe" />
      </div>
      <div className="educationSectionContentDiv">
        <h2>CERTIFICATION</h2>
        <CertificateTag
          Icon={Google}
          title1="Build Wireframes and Low-Fidelity Prototypes"
          title2="UX Design Process"
          title3="Foundations of UX Design"
          organization1="Google"
          organization2="Google"
          organization3="Google"
          year1="2023"
          year2="2023"
          year3="2022"
        />
        <CertificateTag
          Icon={Falcon}
          title1="Hidden Gem"
          organization1="Falcon Consulting"
          year1="2022"
        />
        <CertificateTag
          Icon={Virtual}
          title1="Virtual Exchange Program of the University of Dundee in collaboration with GIFT University"
          organization1="University of Dundee"
          year1="2021"
        />
        <CertificateTag
          Icon={Emperor}
          title1="Language and Multicultural Communication Program"
          organization1="Emperor Alexander I St. Petersburg State Transport University"
          year1="2021"
        />
      </div>
    </div>
  );
}
