// Init
import React, { useEffect, useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import Logo from '../../assets/logo.svg';
import LinkedIn from '../../assets/linkedinIcon.svg';
import Behance from '../../assets/behanceIcon.svg';
import Email from '../../assets/emailIcon.svg';
// Component

export default function FloatingNav() {
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setIsFloatingVisible(true);
    } else {
      setIsFloatingVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`floatingNavContainer ${isFloatingVisible ? 'floatingNavVisible' : ''}`}>
      <div className="floatingNavDiv">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="floatingNavRightDiv">
          <div className="floatingNavIconDiv">
            <img src={Email} alt="Email" />
          </div>
          <div className="floatingNavIconDiv">
            <img src={Behance} alt="Behance" />
          </div>
          <div className="floatingNavIconDiv">
            <img src={LinkedIn} alt="LinkedIn" />
          </div>
          <button type="button">
            Download Resume
            <DownloadIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
