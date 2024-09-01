/* eslint-disable react/no-unescaped-entities */
// Init
import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import Farhan from '../assets/farhanHeader.png';
import Categories from '../assets/categories.svg';
import FarhanMob from '../assets/farhan.png';
import Path from '../assets/path.svg';

// Component
export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerTextContainer">
        <h3>Product Designer | Google UX Design Pro Certified</h3>
        <h1>I’M Farhan S.</h1>
        <h4>
          Product Designer <br /> Google UX Design Pro Certified
        </h4>
        <div className="headerBtncontainerMob">
          <button type="button" className="headerLocationBtn">
            <PlaceIcon sx={{ color: '#0E88FA' }} /> Abu Dhabi, UAE
          </button>
          <a href="mailto:farhan11.fk22@gmail.com" className="headerEmailBtn">
            <EmailIcon /> farhan11.fk22@gmail.com
          </a>
        </div>
        <p>
          Hello! I'm an accomplished Product Designer, dedicated to creating exceptional user
          experiences. With a programming background & over 6 years of experience in the field, I
          bring a unique blend of technical expertise and design acumen. My dedication to
          understanding user needs and translating them into visually captivating interfaces has led
          to successful 60+ projects across various industries.
          <br />
          <br />
          From wireframing to prototyping, I thrive on turning ideas into intuitive and engaging
          digital experiences. Let's collaborate to build remarkable products that leave a lasting
          impact. Welcome to my world of design!
        </p>
        <div className="headerBtncontainer">
          <button type="button" className="headerLocationBtn">
            <PlaceIcon sx={{ color: '#0E88FA' }} /> Abu Dhabi, UAE
          </button>
          <a href="mailto:farhan11.fk22@gmail.com" className="headerEmailBtn">
            <EmailIcon /> farhan11.fk22@gmail.com
          </a>
        </div>
      </div>
      <div className="headerImageDiv">
        <img src={Farhan} alt="header" />{' '}
      </div>
      <div className="headerTagsImageDiv">
        <img src={Categories} alt="header" />{' '}
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
