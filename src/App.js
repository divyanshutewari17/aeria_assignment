import React, { useState, useEffect } from 'react';
import InputField from './components/InputField';
import BoxGrid from './components/BoxGrid';
import './App.css';

const App = () => {
  const [numBoxes, setNumBoxes] = useState('');
  const [error, setError] = useState('');
  const [clickedOrder, setClickedOrder] = useState([]);
  const [resetting, setResetting] = useState(false);

  const handleInputChange = (value) => {
    setNumBoxes(value);
    if (value === '') {
      setError('');
      return;
    }
    const intValue = parseInt(value);
    if (isNaN(intValue) || intValue < 5 || intValue > 25) {
      setError('Please enter an integer between 5 and 25');
    } else {
      setError('');
    }
  };

  const handleBoxClick = (index) => {
    if (resetting) return;
    if (!clickedOrder.includes(index)) {
      setClickedOrder([...clickedOrder, index]);
    }
  };

  // Reset boxes one per second when all are green
  useEffect(() => {
    if (clickedOrder.length === parseInt(numBoxes)) {
      setResetting(true);
      const interval = setInterval(() => {
        setClickedOrder((prev) => {
          const newOrder = [...prev];
          newOrder.pop();
          if (newOrder.length === 0) {
            clearInterval(interval);
            setResetting(false);
          }
          return newOrder;
        });
      }, 1000);
    }
  }, [clickedOrder, numBoxes]);

  return (
    <div className="App">
      <h1>Interactive Box Generator</h1>
      <InputField value={numBoxes} onChange={handleInputChange} error={error} />
      {!error && numBoxes && (
        <BoxGrid
          numBoxes={parseInt(numBoxes)}
          clickedOrder={clickedOrder}
          onBoxClick={handleBoxClick}
        />
      )}
    </div>
  );
};

export default App;
