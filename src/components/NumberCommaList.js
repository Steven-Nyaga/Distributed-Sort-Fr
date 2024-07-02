import React, { useState } from 'react';
import { loadAddNumbers, addNumbers } from './Api/ApiServer';

const NumberCommaList = ({ numbersAdded }) => {
  const [numbers, setNumbers] = useState('');

  const handleChange = (e) => {
    setNumbers(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const numberArray = numbers.split(',').map(num => parseInt(num, 10));
    try {
      const response = await loadAddNumbers(numberArray);
      console.log('Response:', response.data);
      numbersAdded(response.data); // Update the state with the added numbers
      setNumbers(''); // Clear the input field
    } catch (error) {
      console.error('Error making API request', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
        Add Numbers (comma-separated):
        <input 
          type="text" 
          value={numbers} 
          onChange={handleChange} 
          style={styles.input}
        />
      </label>
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px'
  },
  label: {
    fontSize: '16px',
    marginBottom: '10px'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px',
    width: '200px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }
};

export default NumberCommaList;
