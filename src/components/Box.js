import React from 'react';

const Box = ({ index, isGreen, onClick }) => {
  const boxStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: isGreen ? 'green' : 'red',
    display: 'inline-block',
    margin: '5px',
    cursor: 'pointer',
  };

  return <div style={boxStyle} onClick={onClick} />;
};

export default Box;
