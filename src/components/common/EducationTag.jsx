// Init
import React from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

// Component
export default function EducationTag(props) {
  const { Icon, degree, organization, date, area, link } = props;

  return (
    <div className="EducationTagContainer">
      <a href={link} target="_blank" rel="noreferrer" className="EducationTagIconDiv">
        <img src={Icon} alt="GiftUni" />
      </a>
      <div className="EducationTagTextDiv">
        <h3>{degree}</h3>
        {/* <h4>{organization}</h4> */}
        <a href={link} target="_blank" rel="noreferrer">
          {organization}
        </a>
        <div className="EducationTagDateDiv">
          <p> {date}</p>
          <div className="EducationTagLocationDiv">
            <FmdGoodIcon />
            <p>{area}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
