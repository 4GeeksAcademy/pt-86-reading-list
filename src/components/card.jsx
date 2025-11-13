import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export const Card = (props) => (
	<div className="card" style={{"minWidth": "30rem"}}>
        <img src="https://www.photomural.com/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/import/api-v1.1-file-public-files-pim-assets-97-ad-84-62-6284ad972eff292d45ce1a2e-images-4d-73-f0-65-65f0734d9457690277254287-026-dvd2-star-wars-poster-classic-1-web.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <Link to={"person/" + props.uid} className="btn btn-primary">Go somewhere</Link>
        </div>
    </div>
);