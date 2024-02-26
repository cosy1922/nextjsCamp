import React from 'react';
import { Carousel } from 'react-bootstrap';

export const Silder: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Carousel interval={2000} style={{ height: '100%' }}>
        <Carousel.Item>
          <img
            src="/camp/c_01.jpg"
            style={{ width: '100vw', height: '30vh', objectFit: 'fill' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/camp/c_02.jpg"
            style={{ width: '100vw', height: '30vh', objectFit: 'fill' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/camp/c_03.jpg"
            style={{ width: '100vw', height: '30vh', objectFit: 'fill' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/camp/c_04.jpg"
            style={{ width: '100vw', height: '30vh', objectFit: 'fill' }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Silder;
