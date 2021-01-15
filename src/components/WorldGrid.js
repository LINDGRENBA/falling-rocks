import React from 'react';
import './WorldGrid.css';

const WorldGrid = () => {
  const elements = [".", ":", "T"];
  const [period, colon, table] = elements;

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
    </React.Fragment>
  )
}

export default WorldGrid;