import React from 'react';
import OpenAccount from '../OpenAccount.js';
import Brokerage from './Brokerage.js';
import Hero from './Hero.js';

function PricingPage() {
    return (
        <div>
          <Hero />
          <OpenAccount />
          <Brokerage />
        </div>
      );
}

export default PricingPage;