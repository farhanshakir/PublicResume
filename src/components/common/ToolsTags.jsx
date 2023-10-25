// Init
import React from 'react';

// Component
export default function ToolTags(props) {
  const { img, title, desp } = props;
  return (
    <div className="ToolTagsContainer">
      <img src={img} alt="tools" />
      <h4>{title}</h4>
      <p>{desp}</p>
    </div>
  );
}
