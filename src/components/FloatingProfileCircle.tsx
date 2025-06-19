
import React, { useState, useEffect } from 'react';

const FloatingProfileCircle = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [velocity, setVelocity] = useState({ x: 2, y: 1.5 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const circleSize = 120;

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);

    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  useEffect(() => {
    if (windowSize.width === 0 || windowSize.height === 0) return;

    const animatePosition = () => {
      setPosition((prevPosition) => {
        let newX = prevPosition.x + velocity.x;
        let newY = prevPosition.y + velocity.y;
        let newVelocityX = velocity.x;
        let newVelocityY = velocity.y;

        // Bounce off the walls
        if (newX <= 0 || newX >= windowSize.width - circleSize) {
          newVelocityX = -newVelocityX;
          newX = newX <= 0 ? 0 : windowSize.width - circleSize;
        }

        if (newY <= 0 || newY >= windowSize.height - circleSize) {
          newVelocityY = -newVelocityY;
          newY = newY <= 0 ? 0 : windowSize.height - circleSize;
        }

        setVelocity({ x: newVelocityX, y: newVelocityY });

        return { x: newX, y: newY };
      });
    };

    const interval = setInterval(animatePosition, 16); // ~60fps

    return () => clearInterval(interval);
  }, [velocity.x, velocity.y, windowSize, circleSize]);

  return (
    <div
      className="floating-circle animate-float"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <img
        src="/lovable-uploads/60509b66-e75f-42c3-8e57-4d352f3937c9.png"
        alt="Profile"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
};

export default FloatingProfileCircle;
