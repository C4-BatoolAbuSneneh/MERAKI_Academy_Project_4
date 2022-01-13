import React from "react";
import axios from "axios";
const MyFavourite = () => {
  //   const handelRemove = () => {
  //     localStorage.removeItem("favourite");
  //   };
  const favourites = JSON.parse(localStorage.getItem("favourite"));
  return (
    <>
      <div className="myfavourite">
        {favourites && favourites.map((ele) => {
          return (
            <>
              <img style={{ width: "350px" }} src={ele.image} />
              <p className="title"> {ele.title}</p>
              <p className="time"> {ele.time}</p>
              <p className="ingredient"> Ingredients : {ele.ingredients}</p>
              <p className="description"> Description: {ele.description}</p>
              <button>delete</button>
            </>
          );
        })}
      </div>
    </>
  );
};
export default MyFavourite;
