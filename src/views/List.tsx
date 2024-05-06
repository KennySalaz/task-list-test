import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/Loading/LoadingSpinner";
import BackArrow from "../components/Icons/IconBack";

const List = () => {
  const [list, setlist] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getList = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        "https://6172cfe5110a740017222e2b.mockapi.io/elements"
      );
      const result = await data.json();
      if (result) {
        setTimeout(() => {
          setlist(result);
          setLoading(false);
        }, 1000);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="container">
      <div className="container-list">
        <div className="title">
          <Link to={"/"}>
            <BackArrow />
          </Link>
          <p>List</p>
        </div>
        {loading ? (
          <>
            <LoadingSpinner />
          </>
        ) : (
          <>
            {list.length === 0 ? (
              <> </>
            ) : (
              <>
                {list.map((item, index) => {
                  return (
                    <div className="card fade-in-left" key={index}>
                      <img src={item.avatar} alt="" />
                      <div className="card-title">
                        <p>{item.name} </p>
                        <p>{item.createdAt} </p>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default List;
