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
              <div key={ele._id}>
                <img style={{ width: "350px" }} src={ele.image} />
                <p className="title"> {ele.title}</p>
                <p className="time"> {ele.time}</p>
                <p className="ingredient"> Ingredients : {ele.ingredients}</p>
                <p className="description"> Description: {ele.description}</p>
                <button onClick={() => handelRemove(ele._id)}>delete</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default MyFavourite;
