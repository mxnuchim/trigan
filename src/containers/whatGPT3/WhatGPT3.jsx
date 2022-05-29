import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Trigan?" text="We are a registered company based in Scotland and we aim to provide people with better, fairer ways to live and the technology enabling this. We believe that blockchain technology has incredible potential and using the correct application, blockchain technology has the potential to radically change the way we live." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Lead the life you deserve." text="We have designed and will implement our first practical, real-world utopia: The Smartest City. “Your city will welcome you for who you are, what you are and who you will be.” In addition to our physical Smartest City, we will also create our virtual living experience: The Smartest Metaverse" />
      <Feature title="DAO" text="Our DAO (Decentralised Autonomous Organisation) is as revolutionary as it is unique. It’s purpose goes far beyond that of previous DAO implementations. It will have responsibility for all facets of our economy and government. Our DAO never sleeps, is always fair and cannot be corrupted" />
      <Feature title="Free Cash Economy" text="Universal Basic Income: We believe that our UBI is the first practical real-world solution of its kind. : UBI is a concept where everyone receives free income on a regular basis, : regardless of any other income or their personal status. In other words, we will provide free money to all of our Citizens, and with no strings attached" />
      <Feature title="Beyond Metaverse" text="Imagine a virtual world where you can live, work or socialise; connected with and enhancing the real world. This is our vision for our virtual living experience, which will bring the real world into the virtual, and the virtual world into the real… beyond Metaverse." />
      <Feature title="The Smartest City" text="Our City will be designed from the ground up for its Citizens. It will take care of you and help you to reach your full potential, while living life the way you dream of. You will have a say in all important decisions affecting you and others living in the Smartest City." />
    </div>
  </div>
);

export default WhatGPT3;
