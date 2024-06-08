import React from 'react';

import { ThreeJsCanvas } from './Head';
import useResponsiveSize from '../hooks/useResponsiveSize';

const MainHeroImage = () => {
  const { width } = useResponsiveSize();
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      {width > 500 ? <ThreeJsCanvas></ThreeJsCanvas> : null}
    </div>
  );
};

export default MainHeroImage;
