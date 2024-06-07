import React, { useEffect, useState } from 'react';

import { FastAverageColor, FastAverageColorResult } from 'fast-average-color';

import config from '../config/index.json';

function addOpacity(hexColor: string) {
  // make colors opacity a bit brighter if lower than 0.2
  const opacity = 0.07;
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const a = parseInt(hex.substring(6, 8), 16) / 255;
  const newA = a < opacity ? opacity : a;
  return `rgba(${r}, ${g}, ${b}, ${newA})`;
}

const DevIcon = ({
  name,
  weight,
  url,
}: {
  name: string;
  weight: number;
  url?: string;
}) => {
  const imageSrc =
    url ??
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;
  const [facRes, setFacRes] = useState<FastAverageColorResult | undefined>(
    undefined,
  );
  useEffect(() => {
    const fac = new FastAverageColor();
    fac.getColorAsync(imageSrc).then((avgColor) => {
      setFacRes(avgColor);
    });
  }, [imageSrc]);
  return (
    <div className={`rounded-full w-fit h-fit overflow-clip`}>
      <img
        id={name}
        src={imageSrc}
        width={`${weight}px`}
        height="auto"
        style={{
          backgroundColor: addOpacity(facRes?.hexa ?? '#ffffff'),
          aspectRatio: '1 / 1',
          padding: '15%',
        }}
        alt={name}
      />
    </div>
  );
};

export const Skills = () => {
  const { skills } = config;
  const normalDistributedItems: typeof skills.items = [];
  skills.items.sort((a, b) => a.weight - b.weight);
  for (let i = 1; i < skills.items.length; i += 2) {
    normalDistributedItems.push(...skills.items.slice(i, i + 1));
  }
  const secondHalf: typeof skills.items = [];
  for (let i = 0; i < skills.items.length; i += 2) {
    secondHalf.push(...skills.items.slice(i, i + 1));
  }
  normalDistributedItems.push(...secondHalf.reverse());
  const lines = normalDistributedItems.length / 3;
  // split distributed items into 3 arrays
  const distributedItems: (typeof normalDistributedItems)[] = [];
  for (let i = 0; i < lines; i += 1) {
    distributedItems.push(normalDistributedItems.slice(i * 3, i * 3 + 3));
  }
  return (
    <section
      className={`bg-background p-8 w-full flex items-center justify-content-center mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28`}
      id="skills"
    >
      {distributedItems.map((items, ind) => (
        <div
          className={`flex justify-evenly items-center flex-wrap gap-1 mx-auto`}
          key={ind}
        >
          {items.map((item) => (
            <DevIcon
              key={item.name}
              name={item.name}
              url={item.url}
              weight={item.weight + 20}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Skills;
