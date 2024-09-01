// Init
import React, { useEffect, useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { motion, useAnimation } from 'framer-motion';
// import Logo from '../../assets/logo.svg';
import LinkedIn from '../../assets/linkedinIcon.svg';
import Behance from '../../assets/behanceIcon.svg';
import Email from '../../assets/emailIcon.svg';
import LogoIcon from '../../assets/logo_icon.svg';
import Path from '../../assets/resume/FarhanResume.pdf';

// Component

export default function FloatingNav() {
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);
  const controls = useAnimation();
  const downloadPdf = () => {
    const pdfFile = Path;
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'Farhan Shakir - UI UX Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
  useEffect(() => {
    if (isFloatingVisible) {
      controls.start({ width: '80%' });
    } else {
      controls.start({ width: '10%' });
    }
  }, [isFloatingVisible, controls]);
  return (
    <div className={`floatingNavContainer ${isFloatingVisible ? 'floatingNavVisible' : ''}`}>
      <motion.div
        initial={{ width: '10%' }}
        animate={controls}
        exit={{ width: '10%' }}
        transition={{ type: 'tween', duration: 1, ease: 'easeOut' }}
        className="floatingNavDiv"
      >
        <motion.div
          initial={{ opacity: '0' }}
          whileInView={{ opacity: '1' }}
          transition={{ duration: 0.5, delay: 1 }}
          className="floatingNavLogoDiv"
        >
          {/* <img src={Logo} alt="logo" /> */}
          <p>Experience</p>
          <p>Skills</p>
          <p>Projects</p>
          <p>Education</p>
        </motion.div>
        <div className="logoIconDiv">
          <img src={LogoIcon} alt="LogoIcon" />
        </div>
        <motion.div
          initial={{ opacity: '0' }}
          whileInView={{ opacity: '1' }}
          transition={{ duration: 0.5, delay: 1 }}
          className="floatingNavRightDiv"
        >
          <a href="mailto:farhan11.fk22@gmail.com" className="floatingNavIconDiv">
            <img src={Email} alt="Email" />
          </a>
          <a
            href="https://www.behance.net/farhansofficial"
            target="_blank"
            rel="noreferrer"
            className="floatingNavIconDiv"
          >
            <img src={Behance} alt="Behance" />
          </a>
          <a
            href="https://www.linkedin.com/in/farhansofficial/"
            target="_blank"
            rel="noreferrer"
            className="floatingNavIconDiv"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a
            className="downloadResume"
            rel="noreferrer"
            target="_blank"
            href={Path}
            onClick={downloadPdf}
          >
            Download Resume
            <DownloadIcon />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
