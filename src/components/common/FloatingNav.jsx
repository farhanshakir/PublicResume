/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// Init
import React, { useEffect, useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import Logo from '../../assets/newLogo.svg';
import LinkedIn from '../../assets/linkedinIcon.svg';
import Behance from '../../assets/behanceIcon.svg';
import Email from '../../assets/emailIcon.svg';
// import Path from '../../assets/resume/demoPdf.pdf';
import Path from '../../assets/resume/FarhanResume.pdf';

// Component

export default function FloatingNav({
  onNavClick,
  experienceRef,
  skillsRef,
  projectsRef,
  educationRef,
}) {
  const [isFloatingVisible, setIsFloatingVisible] = useState(true);

  const downloadPdf = () => {
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
    const pdfFile = Path;
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'Farhan Shakir - UI UX Resume.pdf'; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setIsFloatingVisible(true);
    } else {
      setIsFloatingVisible(true);
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
        <div className="floatingNavLeftDiv">
          <p onClick={() => onNavClick(experienceRef)}>Experience</p>
          <p onClick={() => onNavClick(skillsRef)}>Skills</p>
          <p onClick={() => onNavClick(projectsRef)}>Projects</p>
          <p onClick={() => onNavClick(educationRef)}>Education</p>
        </div>
        <div className="floatingNavLogoDiv">
          <img src={Logo} alt="logo" />
        </div>
        <div className="floatingNavRightDiv">
          <a href="mailto:hello@farhanshakir.com" className="floatingNavIconDiv">
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
          {/* <a rel="noreferrer" target="_blank" href={Path}> */}
          <a
            // type="button"
            className="downloadResume"
            rel="noreferrer"
            target="_blank"
            href={Path}
            onClick={downloadPdf}
          >
            Download Resume
            <DownloadIcon />
          </a>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}
