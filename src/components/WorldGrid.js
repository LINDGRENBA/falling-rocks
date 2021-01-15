import React, { useState } from 'react';
import './WorldGrid.css';

const WorldGrid = () => {
  const [squares, setSquares] = useState([]);

  // const elements = [".", ":", "T"];
  // const [rock, stackedRocks, table] = elements;


  const handleClick = () => {
    setSquares([".", ".", "T", "."]);
    const index = squares.length - 1;
    console.log(squares[index]); // gives the 3rd index (last item)
    console.log(squares[squares.length / 2]); // gives the 2nd index (3rd item)
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