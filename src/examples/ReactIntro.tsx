import React, { useEffect } from 'react';
import logo from '../logo.svg';
import gsap from 'gsap';
import './ReactIntro.css';

const ReactIntro: React.FC = () => {
  useEffect(() => {
    gsap
      .fromTo(
        ['.App-logo', 'p', 'a'],
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: {
            each: 0.3,
          },
        },
      )
      .delay(0.4);

    gsap.to('.App-logo', {
      duration: 4,
      rotate: 360,
      ease: 'none',
      repeat: -1,
    });

    gsap.fromTo(
      '.App-logo',
      {
        zoom: 1.4,
      },
      {
        duration: 0.8,
        zoom: 1,
        ease: 'none',
      },
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default ReactIntro;
