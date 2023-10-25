// Init
import React from 'react';

// Component
export default function CertificateTag(props) {
  const {
    Icon,
    title1,
    title2,
    title3,
    organization1,
    organization2,
    organization3,
    year1,
    year2,
    year3,
    link1,
    link2,
    link3,
  } = props;

  return (
    <div className="certificateTagContainer">
      <div className="certificateTagIconDiv">
        <img src={Icon} alt="GiftUni" />
      </div>
      <div className="certificateTagTextContainer">
        {title1 && (
          <div className="certificateTagTextDiv">
            <a href={link1} target="_blank" rel="noreferrer">
              {title1}
            </a>
            <div className="certificateTagDateDiv">
              <p>{organization1}</p>
              <span>{year1}</span>
            </div>
          </div>
        )}
        {title2 && (
          <div className="certificateTagTextDiv">
            <a href={link2} target="_blank" rel="noreferrer">
              {title2}
            </a>
            <div className="certificateTagDateDiv">
              <p>{organization2}</p>
              <span>{year2}</span>
            </div>
          </div>
        )}
        {title3 && (
          <div className="certificateTagTextDiv">
            <a href={link3} target="_blank" rel="noreferrer">
              {title3}
            </a>
            <div className="certificateTagDateDiv">
              <p>{organization3}</p>
              <span>{year3}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
