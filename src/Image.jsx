import React from "react";


function Image(props){
    return(
        <div>
            <a href="https://www.youtube.com/shorts/jT_GV3DZV0g" target="_blank">
                <h1>{props.description}</h1>
            </a>
            
            <a href={props.src} target="_blank">
                <img src={props.src} alt={props.description}/>
            </a>
        </div>
    );
}

export default Image;