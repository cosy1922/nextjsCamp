import React from 'react';
export const test1 = () => {
  const test = () => {
    alert('rr1');
  };
  return (
    <div>
      nextjs page page111
      <button onClick={test}>버튼 클릭</button>
      <div onClick={test}>클릭해라</div>
      <button onClick={test}>버튼 클릭</button>
    </div>
  );
};
export default test1;
