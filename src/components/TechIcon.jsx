import React from 'react';

const TechIcon = ({ name, svg }) => {
  return (
    <li className="tooltip-container hover:z-10">
      <div className="tech-icon">
        {svg}
        <div role="tooltip" className="tooltip">{name}</div>
      </div>
    </li>
  );
};

export default TechIcon;
