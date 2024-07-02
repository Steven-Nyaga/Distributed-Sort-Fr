import React from 'react';

const NumberList = ({ numbers }) => {
  return (
    <div className="number-list">
      <h2>Current Numbers:</h2>
      <table>
        <thead>
          <tr>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {numbers.map((number, index) => (
            <tr key={index}>
              <td>{number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NumberList;
