import React, { useState, useEffect } from 'react';
import './WorldGrid.css';

const WorldGrid = () => {
  const [squares, setSquares] = useState([]);

  // const elements = [".", ":", "T"];
  // const [rock, stackedRocks, table] = elements;

  useEffect(() => {
    setSquares([".", ".", "T", "."]);
    return () => {
      
    }
  }, [])

  const handleClick = () => {
    const elements = [".", ":", "T"];
    const [rock, stackedRocks, table] = elements;

    const newSquares = [...squares];
    const index = newSquares.length - 1;
    const prevIndex = index - 1;
    if(newSquares[index] === rock && newSquares[index - 2] === rock) {
      newSquares[index] = stackedRocks;
      newSquares[index - 2] = "";
      // these values are hard coded, but should be set programmatically
      // to dynamically update grid, use setTimeout
    }

    if(newSquares[prevIndex] === rock && newSquares[prevIndex] === rock) {
      newSquares[prevIndex] = stackedRocks;
      newSquares[prevIndex - 2] = "";
    }


    setSquares(newSquares);
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