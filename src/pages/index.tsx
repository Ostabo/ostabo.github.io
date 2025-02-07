import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faBars,
  faCookieBite,
  faLink,
  faPaperPlane,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import nightwind from 'nightwind/helper';

import About from '../components/About';
import { AnimatedDivider } from '../components/AnimatedDivider';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';

library.add(
  faPaperPlane,
  faCookieBite,
  faArrowUpRightFromSquare,
  faAndroid,
  faBars,
  faXmark,
  faLink,
);

const App = () => {
  return (
    <>
      <Head>
        <title>Ostabo Developer Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      </Head>
      <noscript>You need to enable JavaScript to see this page.</noscript>
      <div className={`bg-background-50 grid gap-y-16 overflow-hidden`}>
        <LazyShow>
          <div className={`relative bg-background-50`}>
            <div className="max-w-7xl mx-auto">
              <div
                className={`relative bg-background-50 z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
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
        </LazyShow>
        <AnimatedDivider></AnimatedDivider>
        <Skills />
        <AnimatedDivider></AnimatedDivider>
        <Projects />
        <AnimatedDivider></AnimatedDivider>
        <LazyShow>
          <>
            <About />
          </>
        </LazyShow>
      </div>
    </>
  );
};

export default App;
