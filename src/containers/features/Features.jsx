import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Presale Rounds',
    text: 'There will be three presale rounds. Presale round 1 at the lowest price, for early adopters, Presale round 2 at a lower price, for early adopters, and Presale round 3',
  },
  {
    title: 'Pancake swap launch',
    text: 'Launch of our token on Pancakeswap, for later migration.',
  },
  {
    title: 'Uniswap Launch',
    text: 'Launch of our token on Uniswap, for later migration.',
  },
  {
    title: 'ERC-20 Token launch',
    text: 'Ethereum ERC-20 network token launch',
  },
  {
    title: 'BEP-20 token launch',
    text: 'Binance Smart Chain BEP-20 network token launch',
  },
  {
    title: 'Trigan Event',
    text: 'A live event broadcast from Scotland.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Roadmap for 2022 Q2</h1>
      <p>We bring real ambition and change through our interpretation and usage of blockchain technology. We believe that there are cycles of technology in the modern world - the advent of the personal computer, the internet, Web 2.0 and what is now called Web 3.0.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
