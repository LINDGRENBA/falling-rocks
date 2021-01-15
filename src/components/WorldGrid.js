import React from 'react';
import './WorldGrid.css';

const WorldGrid = () => {
  const elements = [".", ":", "T"];
  const [rock, stackedRocks, table] = elements;

  const handleClick = () => {
    console.log(rock, stackedRocks, table);
  }

  return (
    <React.Fragment>
      <div>
        <div className="grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <button onClick={handleClick}>Start!</button>
    </React.Fragment>
  )
}

export default WorldGrid;