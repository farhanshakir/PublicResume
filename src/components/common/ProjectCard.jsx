// Init
import React from 'react';
import BgEffect from '../../assets/project_section_bg.png';
// Component
export default function ProjectCard(props) {
  const {
    topHeading,
    Logo,
    desp,
    link,
    linkText,
    tag1,
    tag2,
    tag3,
    bgImage,
    bgImageMob,
    gradientColor1,
    gradientColor2,
  } = props;

  const cardStyle = {
    width: '100%',
    background: `url(${BgEffect}), linear-gradient(270deg, ${gradientColor1} 0%, ${gradientColor2} 100.49%), #003b7e`,
    backgroundSize: 'cover',
    backgroundBlendMode: 'multiply, normal, normal',
    height: '100%',
  };
  return (
    <div className="projectCardContainer" style={cardStyle}>
      {topHeading && <h2>RECENT WORKS</h2>}
      <div className="projectCardDiv">
        <div className="projectCardContentDiv">
          <div className="projectCardLogoDiv">
            <img src={Logo} alt="RepisodicLogo" />
          </div>
          <div className="projectCardDesp">
            <p>
              {desp}
              <span>&nbsp;Link:&nbsp;</span>
              <a href={link} rel="noopener noreferrer" target="_blank">
                {linkText}
              </a>
            </p>
          </div>
          <div className="projectCardTagsDiv">
            <div className="projectCardTag">
              <p>{tag1}</p>
            </div>
            <div className="projectCardTag">
              <p>{tag2}</p>
            </div>
            <div className="projectCardTag">
              <p>{tag3}</p>
            </div>
          </div>
        </div>
        <div className="projectCardImageDiv">
          <img src={bgImage} alt="ProjectImage" />
        </div>
        <div className="projectCardImageDivMob">
          <img src={bgImageMob} alt="ProjectImage" />
        </div>
      </div>
    </div>
  );
}
