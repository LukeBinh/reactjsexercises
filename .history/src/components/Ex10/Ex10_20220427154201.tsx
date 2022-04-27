import React, { useEffect, useState } from "react";
import "./ex10.css";

interface dataType {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  employment: {
    title: string;
  };
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

  const handleClick = (e:)
  return (
    <div className="container">
      <button onClick={handleClick}>Fetch Random</button>
      <div className="grid">
        {listUser.map((user) => (
          <div key={user.id} className="flexcol">
            <img src={user.avatar} alt={user.avatar} />
            <div>
              <a href="./" className="name">
                {user.first_name}
                {user.last_name}
              </a>
            </div>
            <div>
              <a href="./">{user.employment.title}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ex10;
