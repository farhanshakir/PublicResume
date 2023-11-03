/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unescaped-entities */
// Init
import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import ContactImage from '../assets/contactSection.svg';
import Call from '../assets/callblue.svg';
import LinkedIn from '../assets/linkedinBlue.svg';
import Behance from '../assets/behanceblue.svg';
import Email from '../assets/emailblue.svg';
// import Path from '../assets/resume/demoPdf.pdf';
import Path from '../assets/resume/FarhanResume.pdf';

// Component
export default function ContactInfo() {
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
  return (
    <div className="contactInfoContainer">
      <div className="contactInfoImageDiv">
        <img src={ContactImage} alt="ContactImage" />
      </div>
      <div className="contactInfoContentDiv">
        <h3>Let Your Vision Come to Life! Contact Me Today.</h3>
        <div className="contactInfoLinksNewContainer">
          <a href="tel:+92 315 0403254" className="contactInfoLinkIconNew">
            <img src={Call} alt="Call" />
          </a>

          <a href="mailto:farhan11.fk22@gmail.com" className="contactInfoLinkIconNew">
            <img src={Email} alt="Email" />
          </a>

          <a
            href="https://www.behance.net/farhansofficial"
            target="_blank"
            rel="noreferrer"
            className="contactInfoLinkIconNew"
          >
            <img src={Behance} alt="Behance" />
          </a>

          <a
            href="https://www.linkedin.com/in/farhansofficial/"
            target="_blank"
            rel="noreferrer"
            className="contactInfoLinkIconNew"
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
