import Header from '@/components/Header';
import MobilePush from '@/components/MobilePush';
import axios from 'axios';
import React, { CSSProperties, useEffect, useState } from 'react';
import '../app/globals.css';
import css from 'styled-jsx/css';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { GetServerSideProps } from 'next';

interface IndexProps {
  data: string;
}
export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  const result = await axios
    .get('http://localhost:4000/daejeo/dateView')
    .then((e) => {
      return {
        props: { data: e.data }
      };
    });

  return result;
};

export const Test1: React.FC<IndexProps> = (props) => {
  const getData: any = props.data;
  const tableCss: CSSProperties = {
    width: '100%',
    height: '100%',
    textAlign: 'center'
  };

  const seatCss: CSSProperties = {
    background: 'lightgreen'
  };

  const styles = css`
    table {
      background-color: #f0f0f0;
    }

    h1 {
      color: #333;
    }
  `;
  return (
    <>
      <Header></Header>
      <div>
        <table style={tableCss}>
          <thead>
            <tr>
              <th>금</th>
              <th>토</th>
              <th>일</th>
            </tr>
          </thead>
          <tbody>
            {getData?.header.map((data: any, idx: number) => {
              // +1
              var number: number = idx + 1;

              // 3개씩 표현하기 위해서
              if (number % 3 == 0) {
                return (
                  <>
                    <tr key={idx}>
                      <th>{getData?.header[idx - 2]}</th>
                      <th>{getData?.header[idx - 1]}</th>
                      <th>{getData?.header[idx]}</th>
                    </tr>
                    <tr>
                      <td>
                        총자리 :
                        {getData?.[getData?.header[idx - 2]].data.total_seat}
                        <br />
                        예약된 자리 :
                        {getData?.[getData?.header[idx - 2]].data.full_seat}
                        <div
                          style={{
                            background:
                              getData?.[getData?.header[idx - 2]].data
                                .null_seat == 0
                                ? 'lightcoral'
                                : 'lightgreen'
                          }}
                        >
                          가능한 자리 :
                          {getData?.[getData?.header[idx - 2]].data.null_seat}
                        </div>
                        대기 자리 :
                        {getData?.[getData?.header[idx - 2]].data.wait_seat}
                        <br />
                        <MobilePush
                          date={getData?.header[idx - 2]}
                        ></MobilePush>
                      </td>
                      <td>
                        총자리 :
                        {getData?.[getData?.header[idx - 1]].data.total_seat}
                        <br />
                        예약된 자리 :
                        {getData?.[getData?.header[idx - 1]].data.full_seat}
                        <div
                          style={{
                            background:
                              getData?.[getData?.header[idx - 1]].data
                                .null_seat == 0
                                ? 'lightcoral'
                                : 'lightgreen'
                          }}
                        >
                          가능한 자리 :
                          {getData?.[getData?.header[idx - 1]].data.null_seat}
                        </div>
                        대기 자리 :
                        {getData?.[getData?.header[idx - 1]].data.wait_seat}
                        <br />
                        <MobilePush
                          date={getData?.header[idx - 1]}
                        ></MobilePush>
                      </td>
                      <td>
                        총자리 :
                        {getData?.[getData?.header[idx]].data.total_seat}
                        <br />
                        예약된 자리 :
                        {getData?.[getData?.header[idx]].data.full_seat}
                        <div
                          style={{
                            background:
                              getData?.[getData?.header[idx]].data.null_seat ==
                              0
                                ? 'lightcoral'
                                : 'lightgreen'
                          }}
                        >
                          가능한 자리 :
                          {getData?.[getData?.header[idx]].data.null_seat}
                        </div>
                        대기 자리 :
                        {getData?.[getData?.header[idx]].data.wait_seat}
                        <br />
                        <MobilePush date={getData?.header[idx]}></MobilePush>
                      </td>
                    </tr>
                  </>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Test1;
