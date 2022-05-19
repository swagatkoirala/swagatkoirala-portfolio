import React from 'react';
// import Particles from 'react-tsparticles';
// import { loadFull } from "tsparticles";
// import particlesConfig from '../config/particle-config';


// const particlesInit = async (main) => {
//   console.log(main);

//   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
//   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//   // starting from v2 you can add only the features you need reducing the bundle size
//   await loadFull(main);
// };

// const particlesLoaded = (container) => {
//   console.log(container);
// };

// export default function ParticleBackground() {
//   return <Particles id = "tsparticles"
//   init = {
//     particlesInit
//   }
//   loaded = {
//     particlesLoaded
//   }
//   params = {
//     particlesConfig
//   }
//   />;
// }

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};