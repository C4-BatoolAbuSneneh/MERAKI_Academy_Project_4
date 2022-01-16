import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Product = ({ tokenn }) => {

  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = (id) => {
    axios
      .get(`http://localhost:5000/recipes/all/product/${id}`, {
        headers: { Authorization: `Bearer ${tokenn}` },
      })
      .then((result) => {
          console.log(result);
        setProduct(result.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  };

//   const Product = () => {
//     const { id } = useParams();       
//     return <div>id: {id}</div>;
//   };
  const myProduct =
    product &&
    product.map((ele, i) => {
      return (
        <>
          <div key={i} className="product">
            <img style={{ width: "50%" }} src={ele.image} />
            <p className="title"> {ele.title}</p>
            <p className="time"> {ele.time}</p>
            <p className="ingredient"> Ingredients : {ele.ingredients}</p>
            <p className="description"> Description: {ele.description}</p>
          </div>
        </>
      );
    });
  return <>{myProduct}</>;
};

export default Product;
