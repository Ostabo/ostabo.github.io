import { useEffect, useMemo, useState } from 'react';

import { IOptions, RecursivePartial } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import useResponsiveSize from '../hooks/useResponsiveSize';

export const AnimatedDivider = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const { width } = useResponsiveSize();
  const nodeCount = typeof window !== 'undefined' ? window.innerWidth / 50 : 20;
  const options = useMemo(
    () =>
      ({
        style: {
          width: '100%',
          height: '100px',
          position: 'relative',
        },
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 50,
        particles: {
          color: {
            value: '#474fec',
          },
          links: {
            color: '#2c70a1',
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: 'bottom-right',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 3,
            straight: false,
          },
          number: {
            value: nodeCount,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
          reduceDuplicates: true,
        },
        detectRetina: true,
        manualParticles: [
          {
            position: { x: 0, y: 50, mode: 'percent' },
            options: {
              move: {
                speed: 0,
              },
              links: {
                color: '#2c70a1',
                distance: width / 4,
                enable: true,
                opacity: 0.25,
                width: 1,
              },
            },
          },
          {
            position: { x: 100, y: 50, mode: 'percent' },
            options: {
              move: {
                speed: 0,
              },
              links: {
                color: '#2c70a1',
                distance: width / 4,
                enable: true,
                opacity: 0.25,
                width: 1,
              },
            },
          },
        ],
        zLayers: 1,
      }) as RecursivePartial<IOptions>,
    [nodeCount, width],
  );

  if (init) {
    return (
      <Particles
        id={`${crypto.randomUUID()}`}
        className={`tsparticles`}
        options={options}
      />
    );
  }

  return <></>;
};
