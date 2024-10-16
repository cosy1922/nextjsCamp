import { useState } from 'react';
import { ImageAnnotatorClient } from '@google-cloud/vision';

// const { ImageAnnotatorClient } = require('@google-cloud/vision');

type stateType = {
  name?: string;
  age?: string;
};

export const rt: React.FC = () => {
  //state 테스트
  const [state, setState] = useState<stateType>();

  const test = () => {
    setState({
      age: (Math.random() * 100).toFixed(0),
      name: '조동현'
    });
  };

  const roting = async () => {
    //
    // const client = new ImageAnnotatorClient({
    //   keyFilename: '/c_011.jpg'
    // });
    // const [result] = await client.textDetection('path/to/image.jpg');
    // const annotations = result.textAnnotations ?? [];
    // console.log('Text:');
    // annotations.forEach((annotation) => {
    //   console.log(annotation.description);
    // });
  };

  return (
    <div>
      <button onClick={test}>버튼</button>
      <div>나이 : {state?.age} </div>
      <div>이름 : {state?.name} </div>
      <button onClick={roting}>라우팅 페이지 이동</button>
    </div>
  );
};

export default rt;
