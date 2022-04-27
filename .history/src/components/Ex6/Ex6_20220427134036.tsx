import React, { useState } from "react";
import "./ex6.css";
function EX6() {
  const [firstName, setFirstName] = useState("");
  return (
    <div className="container flex">
      <form className="form">
        <input className="inputEx6" type="text" placeholder="First Name" />
        <input className="inputEx6" type="text" placeholder="Last Name" />
        <button className="button" type="submit" onS>
          Greet Me
        </button>
      </form>
    </div>
  );
}

export default EX6;
