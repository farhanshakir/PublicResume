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
  } = props;

  return (
    <div className="certificateTagContainer">
      <div className="certificateTagIconDiv">
        <img src={Icon} alt="GiftUni" />
      </div>
      <div className="certificateTagTextContainer">
        {title1 && (
          <div className="certificateTagTextDiv">
            <h3>{title1}</h3>
            <div className="certificateTagDateDiv">
              <p>{organization1}</p>
              <span>{year1}</span>
            </div>
          </div>
        )}
        {title2 && (
          <div className="certificateTagTextDiv">
            <h3>{title2}</h3>
            <div className="certificateTagDateDiv">
              <p>{organization2}</p>
              <span>{year2}</span>
            </div>
          </div>
        )}
        {title3 && (
          <div className="certificateTagTextDiv">
            <h3>{title3}</h3>
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
