import React, { useEffect, useState } from 'react';

import { FastAverageColor, FastAverageColorResult } from 'fast-average-color';
import { Tooltip } from 'react-tooltip';

import LazyShow from './LazyShow';
import config from '../config/index.json';
import useResponsiveSize from '../hooks/useResponsiveSize';

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
  tooltipPos,
  url,
}: {
  name: string;
  weight: number;
  tooltipPos: 'top' | 'left' | 'right' | 'bottom';
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
    <>
      <div
        className={`rounded-full w-fit h-fit overflow-clip skill-container`}
        data-tooltip-id={name}
        data-tooltip-content={name}
        data-tooltip-place={tooltipPos}
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
      <Tooltip id={name} />
    </>
  );
};

function skillIcons(
  items: { name: string; weight: number; url?: string }[],
  distributedItems: {
    name: string;
    weight: number;
    url?: string;
  }[][],
  ind: number,
) {
  return items.map((item, i) => (
    <DevIcon
      key={i}
      name={item.name}
      weight={item.weight + 20 + (items.length === 1 ? 50 : 0)}
      tooltipPos={
        // eslint-disable-next-line no-nested-ternary
        i === 0
          ? 'top'
          : // eslint-disable-next-line no-nested-ternary
            i === 2
            ? 'bottom'
            : ind < distributedItems.length / 2 - 1
              ? 'left'
              : 'right'
      }
      url={item.url}
    />
  ));
}

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
  const isSmall = useResponsiveSize().width < 470;
  return isSmall ? (
    <section
      className={`skills-cloud bg-background-50 p-8 w-full flex flex-col items-center justify-content-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
      id="skills"
    >
      {distributedItems.map((items, ind) => (
        <LazyShow key={ind}>
          <div className={`flex justify-evenly items-center gap-1 mx-auto`}>
            {skillIcons(items, distributedItems, ind)}
          </div>
        </LazyShow>
      ))}
    </section>
  ) : (
    <LazyShow threshold={0.2}>
      <section
        className={`skills-cloud bg-background-50 p-8 w-full flex items-center justify-content-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
        id="skills"
      >
        {distributedItems.map((items, ind) => (
          <div
            key={ind}
            className={`flex justify-evenly items-center flex-wrap gap-1 mx-auto`}
          >
            {skillIcons(items, distributedItems, ind)}
          </div>
        ))}
      </section>
    </LazyShow>
  );
};
