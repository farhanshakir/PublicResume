// Init
import React, { useRef } from 'react';

// Importing Components
import Header from '../components/Header';
import WorkingExperience from '../components/WorkingExperience';
import DigitalExperience from '../components/DigitalExperience';
import RecentWorks from '../components/RecentWorks';
import Education from '../components/Education';
import Certification from '../components/Certification';
import ExperienceTools from '../components/ExperienceTools';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';
import FloatingNav from '../components/common/FloatingNav';

// Home Component
export default function Home() {
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);

  const handleScrollTo = (ref) => {
    if (ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 100; // Adjust the 100px offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div>
      <FloatingNav
        onNavClick={(ref) => handleScrollTo(ref)}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        educationRef={educationRef}
      />
      <Header />
      <div ref={experienceRef}>
        <WorkingExperience />
      </div>
      <div ref={skillsRef}>
        <DigitalExperience />
      </div>
      <div ref={projectsRef}>
        <RecentWorks />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <Certification />
      <ExperienceTools />
      <ContactInfo />
      <Footer />
    </div>
  );
}
