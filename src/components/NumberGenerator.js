import React, { useState } from 'react';
import { loadRandomGenerated, randomGenerated } from './Api/ApiServer';

const NumberGenerator = ({ generateNumbers }) => {
  const [count, setCount] = useState('');

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loadRandomGenerated(count);
      console.log('Response:', response.data);
      generateNumbers(response.data); // Update the state with the generated numbers
      setCount('');
    } catch (error) {
      console.error('Error making API request', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
        Generate Numbers:
        <input 
          type="text" 
          value={count} 
          onChange={handleChange} 
          style={styles.input}
        />
      </label>
      <button type="submit" style={styles.button}>Generate</button>
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

export default NumberGenerator;
