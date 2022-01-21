import React, { useState } from "react";
import "./MyFavorite.css";
import { AiFillDelete } from "react-icons/ai";
import { BsFillAlarmFill, BsHeart } from "react-icons/bs";

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
        {favoriteList.map((ele, i) => {
          return (
            <>
              <br /> <br />
              <div key={ele._id} className="mypage">
                <div className="newr">
                  <br />
                  <img className="image2" src={ele.image} />
                  <p className="title "> {ele.title}</p>
                  <p className="time">
                    {" "}
                    <BsFillAlarmFill /> {ele.time}
                  </p>
                  <br />
                  <p className="ingredient">Ingredients : {ele.ingredients}</p>
                  <p className="discription"> Description: {ele.description}</p>
                  <button
                    onClick={() => handelRemove(ele._id)}
                    className="myfavor"
                  >
                    <AiFillDelete className="icondelete" />{" "}
                  </button>
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
