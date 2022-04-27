import React, { useState } from "react";
import "./ex6.css";
function EX6() {
  const [firstName, setFirstName] = useState("");
  const [lasstName, setLastName] = useState("");
  const handleAlert = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    alert(`My name is ${firstName} ${last}`)
  };
  return (
    <div className="container flex">
      <form className="form">
        <input
          className="inputEx6"
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="inputEx6"
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <button className="button" onClick={handleAlert}>
          Greet Me
        </button>
      </form>
    </div>
  );
}

export default EX6;
