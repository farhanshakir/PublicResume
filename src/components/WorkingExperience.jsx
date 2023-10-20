/* eslint-disable react/no-unescaped-entities */
// Init
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircleIcon from '@mui/icons-material/Circle';
import Falcon from '../assets/falconIcon.png';
import Upwork from '../assets/upworkIcon.png';
import Photer from '../assets/photerIcon.png';

// Component
export default function WorkingExperience() {
  return (
    <div className="workingExperienceContainer">
      <h2>Working Experience</h2>
      <div className="workingExperienceContentDiv">
        <div className="workingExperienceSection">
          <div className="workingExperienceSideBullets">
            <CircleIcon sx={{ color: '#ffffff', fontSize: '10px' }} />
            <div className="workingExperienceSideLine" />
          </div>
          <div className="workingExperienceSummaryDiv">
            <div className="workingExperienceDate">
              <p>Apr 2022 - Present</p>
              <div className="workingExperienceLocation">
                <LocationOnIcon fontSize="small" sx={{ color: '#ffffff' }} />
                <p>Lahore</p>
              </div>
            </div>
            <div className="workingExperienceCompanyDiv">
              <div className="workingExperienceCompanyImage">
                <img src={Falcon} alt="Falcon" />
              </div>
              <div className="workingExperienceCompanyPosition">
                <h3>UI/UX Team Lead</h3>
                <p>Falcon Consulting</p>
              </div>
            </div>
          </div>
          <div className="workingExperiencePointsDiv">
            <ul>
              <li>
                Led a team of designers and drove outstanding design solutions across 40+ projects.
                <li>
                  Built and maintained strong client relationships with a professional approach.
                </li>
                <li>
                  Showcased technical skills in Figma and Adobe Creative Suite to innovate and
                  deliver exceptional results.
                </li>
              </li>
            </ul>
          </div>
        </div>
        <div className="workingExperienceSection">
          <div className="workingExperienceSideBullets">
            <CircleIcon sx={{ color: '#ffffff', fontSize: '10px' }} />
            <div className="workingExperienceSideLine" />
          </div>
          <div className="workingExperienceSummaryDiv">
            <div className="workingExperienceDate">
              <p>Nov 2021 - Present</p>
              <div className="workingExperienceLocation">
                <LocationOnIcon fontSize="small" sx={{ color: '#ffffff' }} />
                <p>Lahore</p>
              </div>
            </div>
            <div className="workingExperienceCompanyDiv">
              <div className="workingExperienceCompanyImage">
                <img src={Falcon} alt="Falcon" />
              </div>
              <div className="workingExperienceCompanyPosition">
                <h3>Sr. UI/UX Designer</h3>
                <p>Falcon Consulting</p>
              </div>
            </div>
          </div>
          <div className="workingExperiencePointsDiv">
            <ul>
              <li>
                Crafted visually stunning interfaces that exceeded user expectations.
                <li>
                  Prioritized user research and usability testing to enhance design solutions.
                </li>
                <li>
                  Guided cross-functional teams and fostered a collaborative design environment
                </li>
              </li>
            </ul>
          </div>
        </div>
        <div className="workingExperienceSection">
          <div className="workingExperienceSideBullets">
            <CircleIcon sx={{ color: '#ffffff', fontSize: '10px' }} />
            <div className="workingExperienceSideLine" />
          </div>
          <div className="workingExperienceSummaryDiv">
            <div className="workingExperienceDate">
              <p>Nov 2021 - Apr 2022</p>
              <div className="workingExperienceLocation">
                <LocationOnIcon fontSize="small" sx={{ color: '#ffffff' }} />
                <p>Lahore</p>
              </div>
            </div>
            <div className="workingExperienceCompanyDiv">
              <div className="workingExperienceCompanyImage">
                <img src={Falcon} alt="Falcon" />
              </div>
              <div className="workingExperienceCompanyPosition">
                <h3>React Native Developer</h3>
                <p>Falcon Consulting</p>
              </div>
            </div>
          </div>
          <div className="workingExperiencePointsDiv">
            <ul>
              <li>
                Designed and developed polished React Native applications with captivating
                interfaces.
                <li>
                  Contributed to successful mobile app projects with a focus on UI excellence.
                </li>
              </li>
            </ul>
          </div>
        </div>
        <div className="workingExperienceSection">
          <div className="workingExperienceSideBullets">
            <CircleIcon sx={{ color: '#ffffff', fontSize: '10px' }} />
            <div className="workingExperienceSideLine" />
          </div>
          <div className="workingExperienceSummaryDiv">
            <div className="workingExperienceDate">
              <p>Sep 2019 - Oct 2021</p>
              <div className="workingExperienceLocation">
                <LocationOnIcon fontSize="small" sx={{ color: '#ffffff' }} />
                <p>Pakistan</p>
              </div>
            </div>
            <div className="workingExperienceCompanyDiv">
              <div className="workingExperienceCompanyImage">
                <img src={Upwork} alt="Upwork" />
              </div>
              <div className="workingExperienceCompanyPosition">
                <h3>Freelancer</h3>
                <p>Upwork</p>
              </div>
            </div>
          </div>
          <div className="workingExperiencePointsDiv">
            <ul>
              <li>
                Collaborated with diverse global clients to translate their unique visions into
                user-centered digital experiences.
                <li>
                  Executed end-to-end UI/UX projects, including wireframing, prototyping, and
                  delivering high-fidelity designs, meeting clients' specifications and deadlines.
                </li>
                <li>
                  Leveraged effective communication and problem-solving skills to address client
                  feedback and ensure project success.
                </li>
              </li>
            </ul>
          </div>
        </div>
        <div className="workingExperienceSection">
          <div className="workingExperienceSideBullets">
            <CircleIcon sx={{ color: '#ffffff', fontSize: '10px' }} />
            <div className="workingExperienceSideLine" />
          </div>
          <div className="workingExperienceSummaryDiv">
            <div className="workingExperienceDate">
              <p>Mar 2019 - Present</p>
              <div className="workingExperienceLocation">
                <LocationOnIcon fontSize="small" sx={{ color: '#ffffff' }} />
                <p>Pakistan</p>
              </div>
            </div>
            <div className="workingExperienceCompanyDiv">
              <div className="workingExperienceCompanyImage">
                <img src={Photer} alt="Upwork" />
              </div>
              <div className="workingExperienceCompanyPosition">
                <h3>Founder</h3>
                <p>The Photer</p>
              </div>
            </div>
          </div>
          <div className="workingExperiencePointsDiv">
            <ul>
              <li>
                Entrepreneurial founder of The Photer, a service-based company providing exceptional
                event photographers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
