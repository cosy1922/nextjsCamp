import { Alert, Button, Card, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

export const ocrImgtoText: React.FC = () => {
  //기본 이미지
  const defaultImg = '/camp/Image-not-found.png';
  const [imageSrc, setImageSrc] = useState(defaultImg);
  //파일 올린 base64
  const [base64, setBase64] = useState('');
  //번역한 문자
  const [ocrText, setOcrText] = useState('');

  //파일 업로드 시 이미지 미리보기 및 base64 추출
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = event.target.files?.[0];
    if (!file) {
      setImageSrc(defaultImg);
      setBase64('');
      setOcrText('');
      return;
    }

    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImageSrc(reader.result);
        setBase64(reader.result.split(',')[1]);
      }
    };
    reader.readAsDataURL(file);
  };

  //ocr 문자 읽기
  const ocrReader = async () => {
    if (base64 == '') {
      <Alert key={'danger'} variant={'danger'}>
        파일 선택해주세요
      </Alert>;
      alert('파일 선택해주세요');
      return;
    }
    // let imageUrl = 'https://image.lawtimes.co.kr/images/171566_1.jpg';
    // let imageUrl = '/camp/downtext.png';

    // // 이미지 경로 일때 가져오기
    // if (imageSrc.result && typeof imageSrc.result === 'string') {
    //   imageUrl = imageSrc.result.split(',')[1];
    // }

    //backend로 보내기
    const response = await fetch('/camp/api/vision', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ imageUrl: base64 })
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Detected text:', data.text);
      setOcrText(data.text);
    } else {
      <Alert key={'danger'} variant={'danger'}>
        안녕
      </Alert>;
      alert('실패했따');
      // console.error('Error:', data.error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
          <Card style={{ width: '23rem', height: '90vh' }}>
            <Card.Img
              variant="top"
              style={{ height: '30%' }}
              src={imageSrc}
            ></Card.Img>
            {/* <Card.Img variant="top" src="/camp/Image-not-found.png"></Card.Img> */}
            <Card.Body style={{ height: '70%' }}>
              <Card.Title
                style={{ borderBottom: '1px black solid', height: '15%' }}
              >
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Default file input example</Form.Label>
                  <Form.Control type="file" onChange={handleImageChange} />
                </Form.Group>
              </Card.Title>
              <Card.Text style={{ overflow: 'auto', height: '85%' }}>
                {ocrText}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col xs lg="2">
          <Button variant="primary" onClick={ocrReader}>
            문자 추출
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ocrImgtoText;
