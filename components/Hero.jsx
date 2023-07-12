import React from 'react';

import Logo from './Logo';
import Logoicon from './Logoicon'

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <Logoicon testId="hero-logo" />
    <h1 className="mb-4" data-testid="hero-title">
      이상해씨 
      {/* Next.js Sample Project */}
    </h1>

    {/* <p className="lead" data-testid="hero-lead">
      This is a sample application that demonstrates an authentication flow for a Regular Web App, using{' '}
      <a href="https://nextjs.org">Next.js</a>
    </p> */}
  </div>
);

export default Hero;
