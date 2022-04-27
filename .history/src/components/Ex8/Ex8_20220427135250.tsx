import React, { useState } from "react";
import "./ex8.css";
const listFruits = [
  "Banana",
  "Apple",
  "Orange",
  "Mango",
  "Pineapple",
  "Watermelon",
];
function Ex8() {
  const [valueInput, setValueInput] = useState("");
  return (
    <div className="container flex">
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Search"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
        />

        {/* <ListFruits listFruits={listFruits} valueInput={valueInput} /> */}
        <ul className="listFruits">
          {listFruits
            .filter((i) => {i.match(new RegExp(valueInput, "i"))})
            .map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
      </form>
    </div>
  );
}

export default Ex8;
