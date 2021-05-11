import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './particlesConfig';
import './particleBg.css'

const ParticleBg = () => {
    return(
        <Particles params={particlesConfig} />
    )
}

export default ParticleBg;