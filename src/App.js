// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// App.js
import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS file for styling
import NumberDeletion from './components/NumberDeletion';
import NumberGenerator from './components/NumberGenerator';
import NumberList from './components/NumberList';
import NumberCommaList from './components/NumberCommaList';
import { performHealthChecks } from './components/Api/healthCheck';

const App = () => {
  const [numbers, setNumbers] = useState([]);

  // Function to handle the added numbers (sorted in reverse order)
  const numbersComma = (newNumbers) => {
    setNumbers(newNumbers);
  };

  // Function to generate numbers
  const generateNumbers = (newNumbers) => {
    setNumbers(newNumbers);
  };

  // Function to delete a number and maintain the sorted order
  const deleteNumber = (numberToDelete) => {
    const updatedNumbers = numbers.filter(number => number !== numberToDelete);
    updatedNumbers.sort((a, b) => b - a); // Sort in reverse order
    setNumbers(updatedNumbers);
  };

  // Use useEffect to perform health checks when the component mounts
  useEffect(() => {
    performHealthChecks();
    const interval = setInterval(performHealthChecks, 30000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-header">Distributed Sort</h1>
      <div className="number-management">
        <NumberCommaList numbersAdded={numbersComma} />
        <NumberGenerator generateNumbers={generateNumbers} />
        <NumberDeletion deleteNumber={deleteNumber} />
      </div>
      <NumberList numbers={numbers} />
    </div>
  );
};

export default App;





