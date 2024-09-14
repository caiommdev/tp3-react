import React from "react";
import "./Card.css"

function Card(props){
    return(
        <div className="card">
            <h2 className="card-title">{props.name}</h2>
            <p className="card-description">
                {props.description}
            </p>
        </div>
    );
}

export default Card;