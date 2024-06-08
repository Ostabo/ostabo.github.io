import React from 'react';

import { ThreeJsCanvas } from './Head';

const MainHeroImage = () => {
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <ThreeJsCanvas></ThreeJsCanvas>
    </div>
  );
};

export default MainHeroImage;
