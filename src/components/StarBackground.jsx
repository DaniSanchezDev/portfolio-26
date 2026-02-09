import React, { useState } from "react";

const StarBackground = () => {
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000,
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    return newStars;
  };

  const generateMeteors = () => {
    const numberOfMeteors = Math.floor(
      (window.innerWidth * window.innerHeight) / 50000,
    );

    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: `meteor-${i}`,
        size: Math.random() * 2 + 0.5,
        x: Math.random() * 120 - 20,
        y: Math.random() * 100 - 20,
        animationDuration: Math.random() * 3 + 1,
        delay: Math.random() * 5,
      });
    }

    return newMeteors;
  };

  const [stars] = useState(() => generateStars());
  const [meteors] = useState(() => generateMeteors());
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        ></div>
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor absolute bg-white rounded-full"
          style={{
            width: `${meteor.size}px`,
            height: `${meteor.size * 4}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            opacity: meteor.opacity,
            animation: `meteor ${meteor.animationDuration}s linear ${meteor.delay}s infinite`,
            transform: "rotate(45deg)",
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarBackground;
