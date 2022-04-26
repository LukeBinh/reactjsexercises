import React, { useState } from "react";
import { db } from "../../db";
import "./ex7.css";
function Ex7() {
  const [listBox, setListBox] = useState(db);
  return (
    <div className="container flex">
      {listBox.map((item) => (
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
