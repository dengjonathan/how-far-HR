import React from 'react';

const Skills = ({skills}) => {
  skills = skills.map(skill => (<li key={skill}>{skill}</li>));
  return (
    <div className="skills">
    <h3>Skills Learned So Far</h3>
      <ul>
        {skills}
      </ul>
    </div>
  );
};

export default Skills;