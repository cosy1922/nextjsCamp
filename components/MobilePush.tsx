import axios from 'axios';
import React from 'react';
import css from 'styled-jsx/css';

type BtnParams = {
  date: string;
};

export const MobilePush = (props: BtnParams) => {
  const styles = css`
    .btnCss {
      background-color: #f0f0f0;
    }

    h1 {
      color: #333;
    }
  `;

  const testok = () => {
    const enteredPassword = prompt('Enter your password:');
    console.log(enteredPassword);

    if (enteredPassword == '123') {
      axios
        .get('http://localhost:4000/daejeo/pushMobile?date=' + props.date)
        .then((e) => {
          console.log(e);
        });
    } else {
      alert('패스워드가 다릅니다.');
    }
  };

  return (
    <div
      className="btnCss"
      style={{
        textAlign: 'center',
        marginTop: '2px',
        boxShadow: '10px 10px 20px black;'
      }}
    >
      <button onClick={testok}>알람 PUSH</button>
    </div>
  );
};

export default MobilePush;
