import React, { useState } from "react";
import "./ex8.css";
const listFruits = [
  "Banana",
  "Apple",
  "Orange",
  "Mango",
  "Pineapple",
  "Watermelon",
  "tay to",
  "đồ nướng",
  "chiên xào",
  "cá con",
  "cá mập",
];
function Ex8() {
  const [valueInput, setValueInput] = useState("");
  const [filterFruits, setFilterFruits] = useState(listFruits);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = listFruits.filter((val) => {
        return val.toLowerCase().includes(valueInput.toLowerCase());
      });
      setFilterFruits(results);
    } else {
      setFilterFruits(listFruits);
    }
    setValueInput(keyword);
  };

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
          {filterFruits && filterFruits.length > 0 ? (
            filterFruits.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <p>Không tìm thấy tên bạn tìm</p>
          )}
        </ul>
      </form>
    </div>
  );
}

export default Ex8;
