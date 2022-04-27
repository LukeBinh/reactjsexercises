import React, { useEffect, useState } from "react";
import "./ex10.css";
interface dataType {
  id: string;
  first_name: string;
}
function Ex10() {
  const [listUser, setListUser] = useState<Array<dataType>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://random-data-api.com/api/users/random_user?size=10"
      );
      const data = await response.json();
      setListUser(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {listUser.map((user) => (
        <li key={user.id}>{user.first_name}</li>
      ))}
    </div>
  );
}

export default Ex10;
