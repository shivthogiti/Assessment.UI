import apiClient from "./http-common";
import React, { useRef, useState } from "react";


const TriangleFromCoordinates = () => {
    const post_height = useRef(null);
    const post_width = useRef(null);
    const post_eachColumnSize = useRef(null);
    const post_leftX = useRef(null);
    const post_leftY = useRef(null);
    const post_rightX = useRef(null);
    const post_rightY = useRef(null);
    const post_angleX = useRef(null);
    const post_angleY = useRef(null);
    const [postResult, setPostResult] = useState(null);
    const fortmatResponse = (res) => {
      return JSON.stringify(res, null, 2);
    };
    async function postData() {
      const postData = {
        LeftX : parseInt(post_leftX.current.value),
         LeftY : parseInt(post_leftY.current.value),
       AngleX : parseInt(post_angleX.current.value),
       AngleY : parseInt(post_angleY.current.value),
       RightX : parseInt(post_rightX.current.value),
       RightY : parseInt(post_rightY.current.value),
       Height : parseInt(post_height.current.value),
       Width : parseInt(post_width.current.value),
       EachColumnSize : parseInt(post_eachColumnSize.current.value),
      };
      try {
        const res = await apiClient.post("/api/RowAndColumnCalculationByCoordinates", postData, {
          withCredentials: false,  
        headers: {
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS', 
          },
        });
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        setPostResult(fortmatResponse(result));
      } catch (err) {
        setPostResult(fortmatResponse(err.response?.data || err));
      }
    }
    const clearPostOutput = () => {
      setPostResult(null);
    };
    return (
        <div label="GetTriangle Using Coordinates">
        <div className="card">
      <div className="card-header">GetTriangle Using Coordinates</div>
      <div className="card-body">
        <div className="form-group">
          <input type="text" className="form-control" ref={post_leftX} placeholder="Enter LeftX" /> - <input type="text" className="form-control" ref={post_leftY} placeholder="Enter LeftY" />
        </div>
        <div className="form-group">
        <input type="text" className="form-control" ref={post_angleX} placeholder="Enter AngleX" /> - <input type="text" className="form-control" ref={post_angleY} placeholder="Enter AngleY" />
       </div>
        <div className="form-group">
        <input type="text" className="form-control" ref={post_rightX} placeholder="Enter RightX" /> - <input type="text" className="form-control" ref={post_rightY} placeholder="Enter RightY" />
       </div>
        <div className="form-group">
          <input type="text" className="form-control" ref={post_height} placeholder="Enter Height" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" ref={post_width} placeholder="Enter Width" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" ref={post_eachColumnSize} placeholder="Enter CellSize" />
        </div>
        <button className="btn btn-sm btn-primary" onClick={postData}>Calculate Coordinates</button>
        <button className="btn btn-sm btn-warning ml-2" onClick={clearPostOutput}>Clear</button>
        { postResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{postResult}</pre></div> }
        </div>  
        </div>  
        </div>  
    );
}

export default TriangleFromCoordinates