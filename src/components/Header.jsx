/* eslint-disable react/no-unescaped-entities */
// Init
import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import Farhan from '../assets/farhanHeader.png';
import FarhanMob from '../assets/farhan.png';
import Path from '../assets/path.svg';

// Component
export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerTextContainer">
        <h3>Sr. UI/UX Designer | Google UX Design Pro Certified</h3>
        <h1>I’M Farhan S.</h1>
        <h4>
          Sr. UI/UX Designer <br /> Google UX Design Pro Certified
        </h4>
        <div className="headerBtncontainerMob">
          <button type="button" className="headerLocationBtn">
            <PlaceIcon sx={{ color: '#0E88FA' }} /> Lahore, Pakistan
          </button>
          <a href="mailto:farhan11.fk22@gmail.com" className="headerEmailBtn">
            <EmailIcon /> farhan11.fk22@gmail.com
          </a>
        </div>
        <p>
          Hello! I'm an accomplished UI/UX Designer, dedicated to creating exceptional user
          experiences. With a programming background & 5 years of experience in the field, I bring a
          unique blend of technical expertise and design acumen. My dedication to understanding user
          needs and translating them into visually captivating interfaces has led to successful 40+
          projects across various industries.
          <br />
          <br />
          From wireframing to prototyping, I thrive on turning ideas into intuitive and engaging
          digital experiences. Let's collaborate to build remarkable products that leave a lasting
          impact. Welcome to my world of design!
        </p>
        <div className="headerBtncontainer">
          <button type="button" className="headerLocationBtn">
            <PlaceIcon sx={{ color: '#0E88FA' }} /> Lahore, Pakistan
          </button>
          <a href="mailto:farhan11.fk22@gmail.com" className="headerEmailBtn">
            <EmailIcon /> farhan11.fk22@gmail.com
          </a>
        </div>
      </div>
      <div className="headerImageDiv">
        <img src={Farhan} alt="header" />{' '}
      </div>
      <div className="headerImageDivMob">
        <img src={FarhanMob} alt="header" />{' '}
      </div>
      <div className="headerPathDiv">
        <img src={Path} alt="path" />
      </div>
    </div>
  );
}
