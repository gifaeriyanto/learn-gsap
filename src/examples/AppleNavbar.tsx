import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './AppleNavbar.css';

const AppleNavbar: React.FC = () => {
  const wrapperEl = useRef<HTMLDivElement>(null);
  const tlLink = gsap.timeline();
  const tlSearch = gsap.timeline({ paused: true });

  useEffect(() => {
    tlLink.fromTo(
      '.apple-navbar-link',
      {
        scale: 0.4,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        delay: 0.4,
        stagger: {
          each: 0.05,
        },
      },
    );

    tlSearch.fromTo(
      '.apple-navbar-search',
      {
        display: 'none',
        opacity: 0,
        y: -80,
      },
      {
        display: 'flex',
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.4,
      },
    );
  }, [tlLink, tlSearch]);

  const handleClick = () => {
    tlLink.reverse();
    tlSearch.play();
  };

  const handleClose = () => {
    tlSearch.reverse();
    tlLink.play();
  };

  return (
    <div className="apple-navbar">
      <div className="container" ref={wrapperEl}>
        <div className="apple-navbar-link">
          <img
            src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg"
            alt="Apple Logo"
          />
        </div>
        <div className="apple-navbar-link">Mac</div>
        <div className="apple-navbar-link">iPad</div>
        <div className="apple-navbar-link">iPhone</div>
        <div className="apple-navbar-link">Watch</div>
        <div className="apple-navbar-link">TV</div>
        <div className="apple-navbar-link">Music</div>
        <div className="apple-navbar-link">Support</div>
        <div className="apple-navbar-link">
          <div className="apple-navbar-search-icon" onClick={handleClick} />
        </div>
      </div>
      <div className="apple-navbar-search">
        <div>
          <div className="apple-navbar-search-icon" />
          <span>Search apple.com</span>
        </div>
        <div className="close-icon" onClick={handleClose} />
      </div>
    </div>
  );
};

export default AppleNavbar;
