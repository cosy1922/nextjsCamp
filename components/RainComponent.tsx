import React from 'react';
import '../app/globals.css';

export const RainComponent: React.FC = () => {
  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const makeSnowFlakes = () => {
    const arr = Array.from({ length: 50 });
    return arr.map(() => {
      const leftposition = getRandomNumber(1, 1483);
      let snow = getRandomNumber(1, 10);
      const delay = -1 * getRandomNumber(1, 10);
      snow = snow + -1 * delay;

      console.log('snow : ' + snow + ' , delay : ' + delay);
      return (
        // style={{
        //   left: leftposition + 'px',
        //   position: 'relative',
        //   transform: 'rotate(45deg) !important',
        //   animation: 'snowfall ' + snow + 's linear infinite',
        //   animationDelay: delay + 's'
        // }}
        <div className="snowflake"></div>
      );
    });
  };
  return (
    <div
      style={{
        margin: '0',
        padding: '0',
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: 'rgba(17, 34, 51, 0)',
        // background: 'linear-gradient(#123, #111)',
        zIndex: '3'
      }}
    >
      {makeSnowFlakes()}
    </div>
  );
};

export default RainComponent;
