import React from 'react';
import Box from './Box';
import './BoxGrid.css';

const BoxGrid = ({ numBoxes, clickedOrder, onBoxClick }) => {
  let topCount = 0;
  let sideCount = 0;
  let bottomCount = 0;

  if (numBoxes <= 6) {
    topCount = 2;
    sideCount = numBoxes - 4;
    bottomCount = 2;
  } else if (numBoxes <= 9) {
    topCount = 3;
    sideCount = numBoxes - 6;
    bottomCount = 3;
  } else if (numBoxes <= 12) {
    topCount = 4;
    sideCount = numBoxes - 8;
    bottomCount = 4;
  } else if(numBoxes <= 15) {
    topCount = 5;
    sideCount = numBoxes - 10;
    bottomCount = 5;
  } else{
    topCount = 7;
    sideCount = numBoxes - 14;
    bottomCount = 7;
  }

  let boxIndex = 0;

  const renderRow = (count) => {
    return Array.from({ length: count }, (_, i) => {
      const index = boxIndex++;
      return (
        <Box
          key={index}
          index={index}
          isGreen={clickedOrder.includes(index)}
          onClick={() => onBoxClick(index)}
        />
      );
    });
  };

  const renderSide = (count) => {
    return Array.from({ length: count }, (_, i) => {
      const index = boxIndex++;
      return (
        <div key={index} style={{ marginBottom: '5px' }}>
          <Box
            index={index}
            isGreen={clickedOrder.includes(index)}
            onClick={() => onBoxClick(index)}
          />
        </div>
      );
    });
  };

  return (
    <div className="c-container">
      <div className="c-top-row">{renderRow(topCount)}</div>
      <div className="c-middle">
        <div className="c-side-column">{renderSide(sideCount)}</div>
      </div>
      <div className="c-bottom-row">{renderRow(bottomCount)}</div>
    </div>
  );
};

export default BoxGrid;
