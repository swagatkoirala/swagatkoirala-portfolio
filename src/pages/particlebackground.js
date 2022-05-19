import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from '../config/particle-config';

export default function ParticleBackground() {
  return <Particles id = "tsparticles"
  init = {
    particlesInit
  }
  loaded = {
    particlesLoaded
  }
  options = {
    particlesConfig
  }
  />;
}