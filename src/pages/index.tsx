import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faCookieBite,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

import About from '../components/About';
import { AnimatedDivider } from '../components/AnimatedDivider';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

library.add(faPaperPlane);
library.add(faCookieBite);
library.add(faArrowUpRightFromSquare);
library.add(faAndroid);

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <LazyShow>
              <>
                <MainHero />
              </>
            </LazyShow>
          </div>
        </div>
        <MainHeroImage />
      </div>
      <AnimatedDivider></AnimatedDivider>
      <LazyShow>
        <>
          <Skills />
        </>
      </LazyShow>
      <AnimatedDivider></AnimatedDivider>
      <LazyShow>
        <>
          <Projects />
        </>
      </LazyShow>
      <AnimatedDivider></AnimatedDivider>
      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
    </div>
  );
};

export default App;
