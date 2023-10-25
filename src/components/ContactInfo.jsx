/* eslint-disable no-nested-ternary */
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
  const { innerWidth } = window;
  console.log('innerWidth', innerWidth);
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
              <RingVolumeIcon
                sx={{ color: '#0E88FA' }}
                fontSize={innerWidth < 768 ? 'small' : innerWidth < 1366 ? 'medium' : 'large'}
              />
            </div>
            <div className="contactInfoLinks">
              <p>For Call</p>
              <a href="tel:+92 315 0403254">+92 315 0403254</a>
            </div>
          </div>
          <div className="contactInfoLinksDiv">
            <div className="contactInfoIcons">
              <MarkEmailUnreadIcon
                sx={{ color: '#0E88FA' }}
                fontSize={innerWidth < 768 ? 'small' : innerWidth < 1366 ? 'medium' : 'large'}
              />
            </div>
            <div className="contactInfoLinks">
              <p>Email</p>
              <a href="mailto:farhan11.fk22@gmail.com">farhan11.fk22@gmail.com</a>
            </div>
          </div>
          <div className="contactInfoLinksDiv">
            <div className="contactInfoIcons">
              <LinkedInIcon
                sx={{ color: '#0E88FA' }}
                fontSize={innerWidth < 768 ? 'small' : innerWidth < 1366 ? 'medium' : 'large'}
              />
            </div>
            <div className="contactInfoLinks">
              <p>Linkedin</p>
              <a
                href="https://www.linkedin.com/in/farhansofficial/"
                target="_blank"
                rel="noreferrer"
              >
                www.linkedin.com/in/farhansofficial/
              </a>
            </div>
          </div>
          <div className="contactInfoLinksDiv">
            <div className="contactInfoIcons">
              <img src={Behance} alt="Behance" />
            </div>
            <div className="contactInfoLinks">
              <p>Behance</p>
              <a href="https://www.behance.net/farhansofficial" target="_blank" rel="noreferrer">
                www.behance.net/farhansofficial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
