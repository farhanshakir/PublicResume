// Init
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import BgEffect from '../../assets/project_section_bg.png';
// Component
export default function ProjectCard(props) {
  const {
    topHeading,
    Logo,
    desp,
    link,
    // linkText,
    tag1,
    tag2,
    tag3,
    bgImage,
    bgImageMob,
    gradientColor1,
    gradientColor2,
    TagBg,
  } = props;

  const cardStyle = {
    width: '100%',
    background: `linear-gradient(90deg, ${gradientColor1} 0%, ${gradientColor2} 100%)`,
    backgroundSize: 'cover',
    backgroundBlendMode: 'multiply, normal, normal',
    // height: '100%',
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
              {/* <span>&nbsp;Link:&nbsp;</span>
              <a href={link} rel="noopener noreferrer" target="_blank">
                {linkText}
              </a> */}
            </p>
          </div>
          <div className="projectCardTagsDiv">
            <div className="projectCardTag" style={{ background: TagBg }}>
              <p>{tag1}</p>
            </div>
            <div className="projectCardTag" style={{ background: TagBg }}>
              <p>{tag2}</p>
            </div>
            <div className="projectCardTag" style={{ background: TagBg }}>
              <p>{tag3}</p>
            </div>
          </div>
          <a
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            className="projectCardDemoMobBtn"
          >
            <p>Live Demo</p>
            <ArrowForwardIcon sx={{ color: '#fff', fontSize: '20px' }} />
          </a>
        </div>
        <a href={link} rel="noopener noreferrer" target="_blank" className="projectCardDemoBtn">
          <p>Live Demo</p>
          <ArrowForwardIcon sx={{ color: '#fff', fontSize: '20px' }} />
        </a>
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
