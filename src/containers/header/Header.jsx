import React from 'react';
import friends from '../../assets/friends.svg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Your real-world Utopia with Trigan.<br />Beyond Metaverse</h1>
      <p>
        We are living in a technological golden age, yet live busier, more difficult lives than our recent ancestors. Loneliness, depression and other related mental health conditions are compromising our general health and wellbeing. People compete on a day to day basis to survive.
        <br />
        Inequality is increasing and the gap between the rich and the poor is ever widening.
        The surviving Web 2.0 centric companies have made a business from converting users into products.<br />
        We have the solution; a decentralized way of life with blockchain technology
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Join us</button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={friends} />
    </div>
  </div>
);

export default Header;
