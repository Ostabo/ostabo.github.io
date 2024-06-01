import React from 'react';

import Divider from './Divider';
import config from '../config/index.json';

const Skills = () => {
  const { skills } = config;

  return (
    <section className={`bg-background py-8`} id="skills">
      <div className={`container max-w-5xl mx-auto m-8`}>
        {skills.items.map((item) => (
          <div key={item.name} className={`flex flex-wrap`}>
            <div className={`w-5/6 sm:w-1/2 p-6`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {item.name}
              </h3>
              <p className={`text-gray-600`}>{item.weight}</p>
            </div>
            <Divider />
            <div className={`w-full sm:w-1/2 p-6`}>
              <img className="h-6/6" src={item.name} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
