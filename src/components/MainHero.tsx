import React, { useEffect, useState } from 'react';

import TextTransition, { presets } from 'react-text-transition';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  const partSubTitles = mainHero.subtitle.split(';');
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => {
        setCounter((prevCounter) => (prevCounter + 1) % partSubTitles.length);
      },
      (counter + 1) % partSubTitles.length === 0 ? 5000 : 2500,
    );
    return () => clearInterval(interval);
  }, [counter, partSubTitles.length]);
  return (
    <main className="hero-copy mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="hero-title font-sans text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className={'absolute opacity-0'}>
            Oskar Borkenhagen, Ostabo
          </span>
          <div className="hero-title-lines">
            <span className="hero-desktop-line">SOMETIMES</span>
            <span className="hero-desktop-line">THE PRODUCT</span>
            <span className="hero-mobile-line">SOMETIMES THE</span>
            <span className="hero-mobile-line">PRODUCT IS</span>
            <div className="hero-title-final">
              <span className="hero-title-is">IS</span>
              <TextTransition
                className={`z-10 isolate text-primary-600 sm:justify-center lg:justify-start fade-in`}
                inline={true}
                delay={1000}
                springConfig={presets.wobbly}
              >
                {partSubTitles[counter]}
              </TextTransition>
            </div>
          </div>
        </h1>
        <p className="hero-lead mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          I&apos;m a software engineer with a passion for <br />
          <b>WebDev / AppDev / DevOps</b> <br />
          and everything related to computer science. <br />
          Also I like cookies 🍪.
        </p>
      </div>
    </main>
  );
};

export default MainHero;
