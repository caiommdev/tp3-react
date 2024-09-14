import React from "react";
import "./Card.css"

function Movie(props){
    return(
        <div className="card">
            <h2 className="card-title">{props.title}</h2>
            <h3 className="card-sub-title">{props.subTitle}</h3>
            <p className="card-description">{props.content}</p>         
        </div>
    );
}

export default Movie;