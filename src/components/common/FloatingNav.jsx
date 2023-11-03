// Init
import React, { useEffect, useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import Logo from '../../assets/logo.svg';
import LinkedIn from '../../assets/linkedinIcon.svg';
import Behance from '../../assets/behanceIcon.svg';
import Email from '../../assets/emailIcon.svg';
// import Path from '../../assets/resume/demoPdf.pdf';
import Path from '../../assets/resume/FarhanResume.pdf';

// Component

export default function FloatingNav() {
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);

  const downloadPdf = () => {
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
    const pdfFile = Path;
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'FarhanShakirUIUXResume.pdf'; // The name for the downloaded file
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
  return (
    <div className={`floatingNavContainer ${isFloatingVisible ? 'floatingNavVisible' : ''}`}>
      <div className="floatingNavDiv">
        <div className="floatingNavLogoDiv">
          <img src={Logo} alt="logo" />
        </div>
        <div className="floatingNavRightDiv">
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
          <button type="button" onClick={downloadPdf}>
            Download Resume
            <DownloadIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
