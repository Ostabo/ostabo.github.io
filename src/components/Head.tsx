import React, { Suspense, useState } from 'react';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Grid } from 'react-loader-spinner';
import { Tooltip } from 'react-tooltip';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function Head() {
  const draco = new DRACOLoader();
  draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

  const model = useLoader(GLTFLoader, '/assets/blender/head.glb', (loader) => {
    loader.setDRACOLoader(draco);
  });
  const [goingRight, setGoingRight] = useState(true);
  useFrame((_) => {
    model.scene.rotation.y += goingRight ? 0.001 : -0.001;
    if (model.scene.rotation.y > 0.8) setGoingRight(false);
    if (model.scene.rotation.y < -0.8) setGoingRight(true);
  });
  return <primitive object={model.scene}></primitive>;
}

export const ThreeJsCanvas = () => (
  <Suspense
    fallback={
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#474fec"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperClass={'w-full h-full flex justify-center items-center'}
      />
    }
  >
    <Canvas
      data-tooltip-id="head"
      data-tooltip-content="I tried my best 😭"
      camera={{
        fov: 75,
        near: 0.1,
        far: 1000,
        position: [0, 0, 0.75],
        zoom: 1.75,
      }}
    >
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[1, 4, 5]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-5, -5, -5]} decay={0} intensity={Math.PI} />

      <Head />
    </Canvas>
    <Tooltip id="head" place={'bottom'} />
  </Suspense>
);
