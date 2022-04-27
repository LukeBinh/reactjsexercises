import React, { useEffect, useState } from "react";
import "./ex10.css";
function Ex10() {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://random-data-api.com/api/users/random_user?size=10"
      );
      const data = await response.json();
    //   setListUser(data);
      console.log(setListUser(data));
    };
    fetchData();
  }, []);
  console.log(listUser)
  return (
    <div className="container">
      
    </div>
  );
}

export default Ex10;
