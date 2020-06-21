import React, { useEffect } from 'react';
import gsap from 'gsap';
import './Loading.css';

const Loading: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      '.loader div',
      {
        y: -10,
      },
      {
        y: 10,
        duration: 1,
        ease: 'power2.inOut',
        stagger: {
          each: 1 / 4,
          repeat: -1,
          yoyo: true,
          yoyoEase: 'power2.inOut',
        },
      },
    );
  }, []);

  return (
    <div className="loader">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Loading;
