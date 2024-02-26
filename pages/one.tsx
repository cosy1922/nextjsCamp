import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../app/globals.css';
import Silder from '@/components/Slider';
import TypewriterComponent from 'typewriter-effect';
import { Typewriter } from 'react-simple-typewriter';
import RainComponent from '@/components/RainComponent';

export const one = () => {
  var str = `
      가나다라마바사아자차카타파하하파타카차자아사바마라다나가Some quick example text to build on the card title and make up the
                bulk of the card's content. Some quick example text to build on the
                card title and make up the bulk of the card's content.
     `;
  return (
    <div className="h-100">
      <RainComponent></RainComponent>
      <div
        style={{
          height: '30vh'
        }}
      >
        <Silder></Silder>
      </div>
      <div
        style={{
          height: '70vh'
        }}
      >
        <img
          style={{
            width: '100vw',
            height: '70vh',
            objectFit: 'fill',
            position: 'absolute',
            opacity: '0.3',
            zIndex: '2'
          }}
          src="/camp/c_000.jpg"
        />
        <Card className="cardList" style={{ height: '100%', width: '100%' }}>
          {/* <Card.Img variant="top" src="/camp/oz15.png" /> */}
          <Card.Body style={{ fontWeight: 'bold' }}>
            <Card.Title style={{ textAlign: 'center' }}>Card Title</Card.Title>
            <Typewriter words={[str]} typeSpeed={100} />
            {/* <TypewriterComponent
            options={{
              strings: [str],
              autoStart: true
            }}
          ></TypewriterComponent> */}
          </Card.Body>
          <Button className="oneBtn" variant="primary" style={{ zIndex: '99' }}>
            Go somewhere
          </Button>
          {/* 3,141,730 4350 3,299,420 4600 3,456,200 4850 3,679,103
            5200 4,183,470 6000 4,785,823 7000 */}
        </Card>
      </div>
    </div>
  );
};

export default one;
