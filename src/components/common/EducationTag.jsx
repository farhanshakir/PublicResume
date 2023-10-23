// Init
import React from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

// Component
export default function EducationTag(props) {
  const { Icon, degree, organization, date, area } = props;

  return (
    <div className="EducationTagContainer">
      <div className="EducationTagIconDiv">
        <img src={Icon} alt="GiftUni" />
      </div>
      <div className="EducationTagTextDiv">
        <h3>{degree}</h3>
        <h4>{organization}</h4>
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
