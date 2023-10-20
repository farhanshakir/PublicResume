// Init
import React from 'react';
import DigitalCard from './common/DigitalCard';
import Product from '../assets/productDesigner.png';
import Apps from '../assets/newApps.png';
import Prototype from '../assets/prototypes.png';

// Component
export default function DigitalExperience() {
  return (
    <div className="digitalExperienceContainer">
      <h2>Crafting Digital Experiences</h2>
      <div className="digitalExperienceCardContainer">
        <div className="digitalExperienceCardSubContainer">
          <DigitalCard
            image={Product}
            title="Product Designer"
            point1="Design Thinking & Ideation"
            point2="Web and Mobile Apps"
            point3="Visual Hierarchy & Information Architecture"
            bulletColor="#631F98"
          />
        </div>
        <div className="digitalExperienceCardSubContainer">
          <DigitalCard
            image={Apps}
            title="New/Revamping Apps"
            point1="User Research & Empathy Mapping"
            point2="Mobile App Design (iOS, Android)"
            point3="Responsive Web Design"
            bulletColor="#17CCCA"
          />
        </div>
        <div className="digitalExperienceCardSubContainer">
          <DigitalCard
            image={Prototype}
            title="Wireframes & Prototypes"
            point1="Interactive Prototyping (Figma, Adobe XD)"
            point2="Collaborative Approach"
            point3="Usability Testing & A/B Testing"
            bulletColor="#6768FF"
          />
        </div>
      </div>
    </div>
  );
}
