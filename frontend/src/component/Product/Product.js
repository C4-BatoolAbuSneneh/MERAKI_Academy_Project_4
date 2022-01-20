import React, { useState, useEffect } from "react";
import "./Product.css";
import axios from "axios";
import { BsFillAlarmFill, BsHeart } from "react-icons/bs";

import { useParams } from "react-router-dom";

const Product = ({ token }) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductById(id);
  }, []);
  
  const getProductById = (id) => {
    axios
      .get(`http://localhost:5000/recipes/all/product/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setProduct(response.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <br />
      <br />
      <div className="product">
        <img className="imag" src={product.image} />
        <br />
        <p className="title2"> {product.title}</p>
        <p  className="time2">
        <BsFillAlarmFill
                    />
          {" "}
          {product.time}
        </p>
        <p  className="ingredient2">
          {" "}
          Ingredients : {product.ingredients}
        </p>
        <p
          className="description2"
        >
          {" "}
          Description: {product.description}
        </p>
      </div>
    </>
  );
};

export default Product;
