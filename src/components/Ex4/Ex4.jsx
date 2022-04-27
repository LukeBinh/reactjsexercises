import React, { useState } from "react";
import "./ex4.css";

// export interface DataTypes {}

const Ex4 = () => {
  const [isCheckedList, setIsCheckedList] = useState([]);

  const isCheck = (e) => {
    if (e.target.checked === true) {
      return setIsCheckedList([...isCheckedList, e.target.value]);
    }
    const itemIndex = isCheckedList.indexOf(e.target.value);

    return setIsCheckedList(
      isCheckedList.filter((item, index) => (index !== itemIndex ? item : null))
    );
  };

  console.log(isCheckedList);

  return (
    <div className="ex4 container">
      <input type="checkbox" value={"Apple"} onChange={isCheck} />
      <label>Apple</label>
      <br />
      <input type="checkbox" value={"Banana"} onChange={isCheck} />
      <label>Banana</label>
      <br />
      <input type="checkbox" value={"Tea"} onChange={isCheck} />
      <label>Tea</label>
      <br />
      <input type="checkbox" value={"Coffee"} onChange={isCheck} />
      <label>Coffee</label>
      <br />

      <p>
        Items checked are:{" "}
        {isCheckedList.map((item, index) => (
          <span key={index}>{item}</span>
        ))}{" "}
      </p>
    </div>
  );
};

export default Ex4;
