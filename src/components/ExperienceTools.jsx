/* eslint-disable react/no-unescaped-entities */
// Init
import React from 'react';
import ToolTags from './common/ToolsTags';
import Figma from '../assets/figma.svg';
import Xd from '../assets/xd.svg';
import Material from '../assets/material.svg';
import Story from '../assets/story.svg';
import Ai from '../assets/ai.svg';
import ReactJS from '../assets/react.svg';
import Ps from '../assets/ps.svg';

// Component
export default function ExperienceTools() {
  return (
    <div className="experienceToolsContainer">
      <h2>Hands on Experience tools</h2>
      <div className="experienceToolsTagsDiv">
        <ToolTags img={Figma} title="Figma" desp="UI Design, Prototyping" />
        <ToolTags img={Xd} title="Adobe XD" desp="UI Design, Prototyping" />
        <ToolTags img={Material} title="Material" desp="Design Kit" />
        <ToolTags img={Story} title="Story Set" desp="Vectors, Illustration" />
        <ToolTags img={Ai} title="Illustrator" desp=" UI Design, Prototyping " />
        <ToolTags img={ReactJS} title="React JS" desp="Front End" />
        <ToolTags img={Ps} title="Photoshop" desp="Graphic Designing" />
      </div>
    </div>
  );
}
