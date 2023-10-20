/* eslint-disable react/no-unescaped-entities */
// Init
import React from 'react';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactImage from '../assets/contactSection.svg';
import Behance from '../assets/behance.svg';

// Component
export default function ContactInfo() {
  return (
    <div className="contactInfoContainer">
      <div className="contactInfoImageDiv">
        <img src={ContactImage} alt="ContactImage" />
      </div>
      <div className="contactInfoContentDiv">
        <h3>Let Your Vision Come to Life! Contact Me Today.</h3>
        <div className="contactInfoLinksContainer">
          <div className="contactInfoLinksDiv">
            <div className="contactInfoIcons">
              <RingVolumeIcon sx={{ color: '#0E88FA' }} fontSize="large" />
            </div>
            <div className="contactInfoLinks">
              <p>For Call</p>
              <a href="/">+92 315 0403254</a>
            </div>
          </div>
          <div className="contactInfoLinksDiv">
            <div className="contactInfoIcons">
              <MarkEmailUnreadIcon sx={{ color: '#0E88FA' }} fontSize="large" />
            </div>
            <div className="contactInfoLinks">
              <p>Email</p>
              <a href="/">farhan11.fk22@gmail.com</a>
            </div>
          </div>
          <div className="contactInfoLinksDiv">
            <div className="contactInfoIcons">
              <LinkedInIcon sx={{ color: '#0E88FA' }} fontSize="large" />
            </div>
            <div className="contactInfoLinks">
              <p>Linkedin</p>
              <a href="/">www.linkedin.com/in/farhansofficial/</a>
            </div>
          </div>
          <div className="contactInfoLinksDiv">
            <div className="contactInfoIcons">
              <img src={Behance} alt="Behance" />
            </div>
            <div className="contactInfoLinks">
              <p>Behance</p>
              <a href="/">www.behance.net/farhansofficial</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
