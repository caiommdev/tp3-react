import React from "react";


function Image(props){
    return(
        <div className="image">
            <a href={props.src} target="_blank">
                <img src={props.src} alt={props.description} width="500px" height="500px"/>
            </a>
        </div>
    );
}

export default Image;