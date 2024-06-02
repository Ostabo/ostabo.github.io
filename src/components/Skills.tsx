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
  length,
  index,
  url,
}: {
  name: string;
  weight: number;
  length: number;
  index: number;
  url?: string;
}) => {
  const calculatePosition = (
    ind: number,
    totalItems: number,
    maxRadius: number,
  ) => {
    const rings = Math.ceil(Math.sqrt(totalItems)) * 2;
    const angleStep = ((Math.PI * 2) / totalItems) * 2 + weight / 100;
    const ring = Math.floor(ind / rings);
    const angle = ind * angleStep;
    const radius = maxRadius * (ring / rings) + weight / 100;

    const x = radius * Math.cos(angle) - weight / 2;
    const y = radius * Math.sin(angle) - weight / 2;
    return { x, y };
  };

  const { x, y } = calculatePosition(index, length, length * 10);

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
    <div
      className={`rounded-full w-fit h-fit overflow-clip absolute scale-150`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
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
  skills.items.sort((a, b) => b.weight - a.weight);
  for (let i = 1; i < skills.items.length; i += 2) {
    normalDistributedItems.push(...skills.items.slice(i, i + 1));
  }
  const secondHalf: typeof skills.items = [];
  for (let i = 0; i < skills.items.length; i += 2) {
    secondHalf.push(...skills.items.slice(i, i + 1));
  }
  normalDistributedItems.push(...secondHalf.reverse());
  return (
    <section
      className={`bg-background p-8 w-full flex items-center justify-items-center`}
      id="skills"
    >
      <div
        className={`w-full h-fit flex relative translate-x-1/2 translate-y-1/2 min-w-dvw min-h-dvh`}
      >
        {skills.items.map((item, i) => (
          <DevIcon
            key={item.name}
            name={item.name}
            url={item.url}
            weight={item.weight}
            length={normalDistributedItems.length}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
