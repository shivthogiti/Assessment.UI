import apiClient from "./http-common";
import React, { useState } from "react";

const GridRow = (props) => {
    const [postResult, setPostResult] = useState(null);
    const fortmatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    };

    async function postData(e) {

        const postData = {
            Height: parseInt(props.height),
            Width: parseInt(props.width),
            EachColumnSize: parseInt(props.eachColumnSize),
            TriangleSelected: e.currentTarget.parentNode.parentNode.parentNode.id + e.currentTarget.id
        };
        try {
            const res = await apiClient.post("/api/TriangleCoordinatesCalculation", postData, {
                withCredentials: false,
                headers: {
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
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

    var i = (props.height / props.eachColumnSize);
    var rowelements = [];
    var oddcolumnelements = [];
    var evencolumnelements = [];
    var rowid = 0;

    for (let rowindex = 0; rowindex < i; rowindex++) {

        rowelements.push(
            <div className="row" id={String.fromCharCode(97 + rowindex).toUpperCase()}>
                {oddcolumnelements}

            </div>
        );
    }

    for (let colindex = 1; colindex <= i * 2; colindex++) {
      
        if (colindex % 2 !== 0) {

            oddcolumnelements.push(
                <div className='Square'>
                    <svg viewBox='0 0 50 50'>
                        <a>
                            <polygon points='0,0 50,50 50,0' id={(colindex + 1)} onClick={postData}> </polygon>
                        </a>
                        <polygon points='0,50 0,0 50,50' id={colindex} onClick={postData} />

                    </svg>
                </div>

            )
        }

    }

    return (

        <div className="container">

            <h6>Please Select a Right Traingle from Below Grid. Coordinates Result Will be displayed Below</h6>
            {rowelements}
            {postResult && <div className="alert alert-secondary mt-2" role="alertdialog"><pre>{postResult}</pre></div>}
        </div>

    );


}

export default GridRow