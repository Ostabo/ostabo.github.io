import React from 'react';

import dynamic from 'next/dynamic';

import useResponsiveSize from '../hooks/useResponsiveSize';

const DynamicThreeJsCanvas = dynamic(
  () => import('./Head').then((mod) => mod.ThreeJsCanvas),
  { ssr: false },
);
const MainHeroImage = () => {
  const { width } = useResponsiveSize();
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gradient-to-t from-background-50 to-primary-50">
      {width > 500 ? <DynamicThreeJsCanvas /> : null}
    </div>
  );
};

export default MainHeroImage;
