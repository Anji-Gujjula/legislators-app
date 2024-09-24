// src/LegislatorsTable.js
import React, { useState } from "react";
import legislators from "./data";
import './index.css'; // Ensure you have this import

const LegislatorsTable = () => {
  const [status, setStatus] = useState({});

  const handleChange = (id, value) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      [id]: value,
    }));
  };

  const resetStatus = () => {
    setStatus({});
  };

  const resetRowStatus = (id) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      [id]: undefined, // Reset the specific legislator's status
    }));
  };

  return (
    <div>
      <h1>REPUBLICANS</h1>
      <table>
        <thead>
          <tr>
            <th>Legislator</th>
            <th>Ayes</th>
            <th>Noes</th>
            <th>Absent</th>
            <th>NV</th>
            <th>Vacancy</th>
          </tr>
        </thead>
        <tbody>
          {legislators.map((legislator) => (
            <tr key={legislator.id}>
              <td>
                {status[legislator.id] === "Ayes" && (
                  <span className="tick">✅</span> // Use CSS class
                )}
                {status[legislator.id] === "Noes" && (
                  <span className="cross">❌</span> // Use CSS class
                )}
                {legislator.name}
                <button 
                  onClick={() => resetRowStatus(legislator.id)} 
                  style={{ marginLeft: "10px", cursor: "pointer", background: "none", border: "none", color: "blue" }}
                >
                  🔄
                </button>
              </td>
              {["Ayes", "Noes", "Absent", "NV", "Vacancy"].map((option) => (
                <td key={option}>
                  <input
                    type="radio"
                    name={`status-${legislator.id}`}
                    value={option}
                    checked={status[legislator.id] === option}
                    onChange={() => handleChange(legislator.id, option)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={resetStatus}>RESET ALL</button>
    </div>
  );
};

export default LegislatorsTable;
