import React from "react";
import { db } from "../../db";
import "./ex7.css";
function Ex7() {
  return (
    <div className="container flex">
      {db.map((item) => (
        <div className="box" key={item.id}>
          <div className="info">
            <p className="setup">{item.setup}</p>
            <p className="punchline">{item.punchline}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ex7;
