import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Beyond metaverse</h1>
      <p>Imagine a virtual world where you can live, work or socialise; connected with and enhancing the real world. This is our vision for our virtual living experience, which will bring the real world into the virtual, and the virtual world into the real… beyond Metaverse.We also intend to address the primary Metaverse issue, and therefore have plans in place to enable your digital avatar to cross between different virtual experiences on the Trigan Blockchain</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
