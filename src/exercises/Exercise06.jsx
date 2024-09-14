// src/exercises/Exercise06.js
import React from "react";
import Profile from "../Profile";

const Exercise06 = () => {
  const user = {
    name: "Caio",
    email: "caio.marinho@al.infnet.edu.br",
    adress: "Rua Onde o vento faz curva, 123, apt 890"
  };
  return (
    <div>
      <h1>Exercise 06</h1>
      <Profile user={user}/>
    </div>
  );
};

export default Exercise06;
