import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
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
  const [loading, setLoading] = useState(false);

  const fetchRandom = () => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        "https://random-data-api.com/api/users/random_user?size=10"
      );
      const data = await response.json();
      setListUser(data);
      setLoading(false);
    };
    fetchData();
  };
  useEffect(() => {
    fetchRandom();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    fetchRandom();
  };
  return (
    <div className="container">
      <div className="flex">
        <button onClick={handleClick} className="button random">
          Fetch Random
        </button>
      </div>

      <div className="grid">
        {listUser.map((user) => (
            loading 
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
