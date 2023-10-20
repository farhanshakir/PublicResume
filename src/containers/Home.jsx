// Init
import React from 'react';

// Importing Components
import Header from '../components/Header';
import WorkingExperience from '../components/WorkingExperience';
import DigitalExperience from '../components/DigitalExperience';
import ContactInfo from '../components/ContactInfo';
import ExperienceTools from '../components/ExperienceTools';
import RecentWorks from '../components/RecentWorks';

// Home Component
export default function Home() {
  return (
    <div>
      <Header />
      <WorkingExperience />
      <DigitalExperience />
      <RecentWorks />
      <ExperienceTools />
      <ContactInfo />
    </div>
  );
}
