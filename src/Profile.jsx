import React from "react";
import "./Profile.css";
function Profile({user}){
    return(
        <div className="profile">
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <h2>{user.adress}</h2>
        </div>
    );
}

export default Profile;