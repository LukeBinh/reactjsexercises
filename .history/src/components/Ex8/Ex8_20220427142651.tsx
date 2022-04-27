import React, { useState, useEffect } from "react";
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
  const [filterFruits, setFilterFruits] = useState([]);


  const handleFilter = (e:any)=>{
    const keyword = e.target.value;
    if(keyword !== " ") {
     const results = filterFruits.filter()
    }

  }
  
  return (
    <div className="container flex">
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Search"
          value={valueInput}
          onChange={handleFilter}
        />

        {/* <ListFruits listFruits={listFruits} valueInput={valueInput} /> */}
        <ul className="listFruits">
          {filterFruits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Ex8;
