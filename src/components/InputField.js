import React from 'react';

const InputField = ({ value, onChange, error }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter number between 5 and 25"
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '250px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      {error && (
        <div style={{ color: 'red', marginTop: '5px' }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default InputField;
