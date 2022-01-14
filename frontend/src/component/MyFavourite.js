import React, { useState } from "react";
const MyFavourite = () => {
  let [favaritList, setFavoritList] = useState([]);

  favaritList = JSON.parse(localStorage.getItem("favourite")) || [];

  const handelRemove = (id) => {
    const favaritFilter = favaritList.filter((item) => item._id != id);

    if (favaritFilter) {
      localStorage.setItem("favourite", JSON.stringify(favaritFilter));
      setFavoritList(JSON.parse(localStorage.getItem("favourite")) || []);
    }
  };
  return (
    <>
      <div className="myfavourite">
        {favaritList.map((ele) => {
          return (
            <>
              <br />
              <br />
              <div key={ele._id} className="mypage">
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
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default MyFavourite;
