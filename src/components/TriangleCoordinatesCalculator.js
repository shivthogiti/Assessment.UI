import apiClient from "./http-common";
import React, { useRef, useState } from "react";
import GridRow from "./GridRow";

const TraingleCoordinatesCalculator = () => {
  const [height, setheight] = React.useState(0);
  const [width, setwidth] = React.useState(0);
  const [eachColumnSize, seteachcolumnsize] = React.useState(0);
  const [showChild, setShowChild] = useState(false);
 

  return (
    <div>
      <div className="card">
        <div className="card-header">TriangleCoordinates - Calculator</div>
        <div className="card-body">
          <div className="form-group">
            <input type="text" className="form-control" onChange={setheight} placeholder="Enter Grid Height" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" onChange={setwidth} placeholder="Enter Grid Width" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" onChange={seteachcolumnsize} placeholder="Specify Column Size" />
          </div>
        </div>
      </div>
      <button className="btn btn-sm btn-primary" onClick={() => setShowChild(true)}>Enter</button>
      {showChild && <GridRow height={height.target.value} width={width.target.value} eachColumnSize={eachColumnSize.target.value} trianglesel = ""></GridRow>}
    </div>
  );
}

export default TraingleCoordinatesCalculator