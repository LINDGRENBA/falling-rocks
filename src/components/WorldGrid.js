import React, { useState } from 'react';
import './WorldGrid.css';

const WorldGrid = () => {
  const [squares, setSquares] = useState([]);

  // const elements = [".", ":", "T"];
  // const [rock, stackedRocks, table] = elements;


  const handleClick = () => {
    setSquares([":", ".", "T", ":"]);
  }

  return (
    <React.Fragment>
      <div>
        <div className="grid">
          {squares && squares.map(square => {
            return <div>{square}</div>
          })}
        </div>
      </div>
      <button onClick={handleClick}>Start!</button>
    </React.Fragment>
  )
}

export default WorldGrid;