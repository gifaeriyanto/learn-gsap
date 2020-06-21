import React, { useEffect } from 'react';
import gsap from 'gsap';
import './Thumbnail.css';

const Thumbnail: React.FC = () => {
  const tlContainer = gsap.timeline({ paused: true });
  const tlImage = gsap.timeline({ paused: true });

  useEffect(() => {
    tlContainer.to('.thumbnail', {
      scale: 0.9,
      duration: 0.6,
      ease: 'power2',
    });

    tlImage.to('.thumbnail img', {
      scale: 1.5,
      duration: 0.6,
      ease: 'power2',
    });
  }, [tlContainer, tlImage]);

  const handleMouseOver = () => {
    tlContainer.play();
    tlImage.play();
  };

  const handleMouseLeave = () => {
    tlContainer.reverse();
    tlImage.reverse();
  };

  return (
    <div className="thumbnail-container">
      <div
        className="thumbnail"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="https://images.unsplash.com/photo-1592515068547-25ab43d5ae2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=20"
          alt="example"
        />
      </div>
    </div>
  );
};

export default Thumbnail;
