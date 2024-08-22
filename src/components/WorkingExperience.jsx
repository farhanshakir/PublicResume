/* eslint-disable react/no-unescaped-entities */
// Init
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircleIcon from '@mui/icons-material/Circle';
import Falcon from '../assets/falconIcon.png';
import Upwork from '../assets/upworkIcon.png';
import Photer from '../assets/photerIcon.png';
import Blink from '../assets/Blink.jpeg';
import XQT from '../assets/XQT.jpeg';

// Component
export default function WorkingExperience() {
  const workingExperience = [
    {
      date: 'Apr 2022 - Present',
      location: 'Lahore',
      company: 'Falcon Consulting',
      position: 'UI/UX Team Lead',
      image: XQT,
      link: 'https://falconconsulting.fr/',
      points: [
        'Led a team of designers and drove outstanding design solutions across 40+ projects.',
        'Built and maintained strong client relationships with a professional approach.',
        'Showcased technical skills in Figma and Adobe Creative Suite to innovate and deliver exceptional results.',
      ],
    },
    {
      date: 'Apr 2022 - Present',
      location: 'Lahore',
      company: 'Falcon Consulting',
      position: 'UI/UX Team Lead',
      image: Blink,
      link: 'https://falconconsulting.fr/',
      points: [
        'Led a team of designers and drove outstanding design solutions across 40+ projects.',
        'Built and maintained strong client relationships with a professional approach.',
        'Showcased technical skills in Figma and Adobe Creative Suite to innovate and deliver exceptional results.',
      ],
    },
    {
      date: 'Apr 2022 - Present',
      location: 'Lahore',
      company: 'Falcon Consulting',
      position: 'UI/UX Team Lead',
      image: Falcon,
      link: 'https://falconconsulting.fr/',
      points: [
        'Led a team of designers and drove outstanding design solutions across 40+ projects.',
        'Built and maintained strong client relationships with a professional approach.',
        'Showcased technical skills in Figma and Adobe Creative Suite to innovate and deliver exceptional results.',
      ],
    },
    {
      date: 'Nov 2021 - Present',
      location: 'Lahore',
      company: 'Falcon Consulting',
      position: 'Sr. UI/UX Designer',
      image: Falcon,
      link: 'https://falconconsulting.fr/',
      points: [
        'Crafted visually stunning interfaces that exceeded user expectations.',
        'Prioritized user research and usability testing to enhance design solutions.',
        'Guided cross-functional teams and fostered a collaborative design environment.',
      ],
    },
    {
      date: 'Nov 2021 - Apr 2022',
      location: 'Lahore',
      company: 'Falcon Consulting',
      position: 'React Native Developer',
      image: Falcon,
      link: 'https://falconconsulting.fr/',
      points: [
        'Designed and developed polished React Native applications with captivating interfaces.',
        'Contributed to successful mobile app projects with a focus on UI excellence.',
      ],
    },
    {
      date: 'Sep 2019 - Oct 2021',
      location: 'Pakistan',
      company: 'Upwork',
      position: 'Freelancer',
      image: Upwork,
      link: 'https://www.upwork.com/',
      points: [
        'Collaborated with diverse global clients to translate their unique visions into user-centered digital experiences.',
        "Executed end-to-end UI/UX projects, including wireframing, prototyping, and delivering high-fidelity designs, meeting clients' specifications and deadlines.",
        'Leveraged effective communication and problem-solving skills to address client feedback and ensure project success.',
      ],
    },
    {
      date: 'Mar 2019 - Present',
      location: 'Pakistan',
      company: 'The Photer',
      position: 'Founder',
      image: Photer,
      link: 'https://www.linkedin.com/company/26191687/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BIRVVmtxVS5mecXYuEdgzFg%3D%3D',
      points: [
        'Entrepreneurial founder of The Photer, a service-based company providing exceptional event photographers.',
      ],
    },
  ];

  return (
    <div className="workingExperienceContainer">
      <h2>Working Experience</h2>
      <div className="workingExperienceContentDiv">
        {React.Children.toArray(
          workingExperience.map((experience) => (
            <div className="workingExperienceSection">
              <div className="workingExperienceSideBullets">
                <CircleIcon sx={{ color: '#ffffff', fontSize: '10px' }} />
                <div className="workingExperienceSideLine" />
              </div>
              <div className="workingExperienceSummaryContainer">
                <div className="workingExperienceSummaryDiv">
                  <div className="workingExperienceDate">
                    <p>{experience.date}</p>
                    <div className="workingExperienceLocation">
                      <LocationOnIcon fontSize="small" sx={{ color: '#ffffff' }} />
                      <p>{experience.location}</p>
                    </div>
                  </div>
                  <div className="workingExperienceCompanyDiv">
                    <div className="workingExperienceCompanyImage">
                      <img src={experience.image} alt={experience.company} />
                    </div>
                    <div className="workingExperienceCompanyPosition">
                      <h3>{experience.position}</h3>
                      <a href={experience.link} target="_blank" rel="noreferrer">
                        {experience.company}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="workingExperiencePointsDiv">
                  <ul>
                    {React.Children.toArray(experience.points.map((point) => <li>{point}</li>))}
                  </ul>
                </div>
              </div>
            </div>
          )),
        )}
      </div>
    </div>
  );
}
