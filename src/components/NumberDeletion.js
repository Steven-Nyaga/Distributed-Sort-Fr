import React, { useState } from 'react';

const NumberDeletion = ({ deleteNumber }) => {
  const [numberToDelete, setNumberToDelete] = useState('');

  const handleChange = (e) => {
    setNumberToDelete(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteNumber(parseInt(numberToDelete));
    setNumberToDelete('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
        Delete Number:
        <input 
          type="number" 
          value={numberToDelete} 
          onChange={handleChange} 
          style={styles.input}
        />
      </label>
      <button type="submit" style={styles.button}>Delete</button>
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

export default NumberDeletion;
