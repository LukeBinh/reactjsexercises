import React, { useEffect, useState } from "react";
import "./ex10.css";
function Ex10() {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    const results = async () => {
      const response = await fetch(
        "https://random-data-api.com/api/users/random_user?size=10"
      );
      const data = await response.json();
      setListUser(data);
      console.log(setListUser(data));
    };
    results();
  }, []);
  return <div className="container">
      {listUser.map}
  </div>;
}

export default Ex10;
