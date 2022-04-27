import React, { useEffect, useState } from "react";
import "./ex10.css";
function Ex10() {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    const results = async () => {
      const response = await fetch(
        "https://random-data-api.com/api/users/random_user?size=10"
      );
      const data = 
    };
  }, []);
  return <div className="container"></div>;
}

export default Ex10;
