import React, { useState } from "react";
const MyFavourite = () => {
  let [favoriteList, setFavoritList] = useState([]);

favoriteList = JSON.parse(localStorage.getItem("favourite")) || [];

  const handelRemove = (id) => {
    const favaritFilter = favoriteList.filter((item) => item._id != id);
    if (favaritFilter) {
      localStorage.setItem("favourite", JSON.stringify(favaritFilter));
      setFavoritList(JSON.parse(localStorage.getItem("favourite")) || []);
    }
  };
  return (
    <>
      <br />
      <div className="myfavourite">
        {favoriteList.map((ele) => {
          return (
            <>
              <br />
              <br />

              <div key={ele._id} className="mypage">
                <div className="newr">
                  <br />
                  <br />
                  <img style={{ width: "30%" }} src={ele.image} />
                  <p
                    className="title "
                    style={{ fontSize: "30px", color: "white" }}
                  >
                    {" "}
                    {ele.title}
                  </p>
                  <p
                    className="time"
                    style={{ fontSize: "30px", color: "white" }}
                  >
                    {" "}
                    {ele.time}
                  </p>
                  <p
                    className="ingredient"
                    style={{ fontSize: "30px", color: "white" }}
                  >
                    {" "}
                    Ingredients : {ele.ingredients}
                  </p>
                  <p
                    className="discription"
                    style={{ fontSize: "30px", color: "white" }}
                  >
                    {" "}
                    Description: {ele.description}
                  </p>
                  <button
                    onClick={() => handelRemove(ele._id)}
                    className="myfavor"
                  >
                    delete
                  </button>
                  <br />
                  <br />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default MyFavourite;
