// Init
import React from 'react';
import EducationImage from '../assets/education.svg';
import GiftUni from '../assets/giftUniversity.svg';
import Govt from '../assets/govtCollege.svg';
import EducationTag from './common/EducationTag';

// Component
export default function Education() {
  return (
    <div className="educationSectionContainer">
      <div className="educationSectionContentDiv">
        <h2>EDUCATION</h2>
        <EducationTag
          Icon={GiftUni}
          degree="BS in Computer Science"
          organization="GIFT University"
          date="Oct 2017 - Oct 2021"
          area="GUJRANWALA"
        />
        <EducationTag
          Icon={Govt}
          degree="ICS (Intermediate in Computer Science)"
          organization="Govt. Post Graduate College"
          date="Sep 2015 - Apr 2017"
          area="OKARA"
        />
      </div>
      <div className="educationSectionImageDiv">
        <img src={EducationImage} alt="EducationImage" />
      </div>
    </div>
  );
}
