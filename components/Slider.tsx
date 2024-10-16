import React from 'react';
import { Carousel } from 'react-bootstrap';

export const Silder: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Carousel interval={2000} style={{ height: '100%' }}>
        <Carousel.Item>
          <img
            src="/camp/c_011.jpg"
            style={{ width: '100vw', height: '30vh', objectFit: 'fill' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/camp/c_022.jpg"
            style={{ width: '100vw', height: '30vh', objectFit: 'fill' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/camp/c_033.jpg"
            style={{ width: '100vw', height: '30vh', objectFit: 'fill' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/camp/c_044.jpg"
            style={{ width: '100vw', height: '30vh', objectFit: 'fill' }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Silder;
