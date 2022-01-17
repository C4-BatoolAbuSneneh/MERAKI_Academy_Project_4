import React, { useState, useEffect } from "react";
import "./Product.css";
import axios from "axios";
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
        <img style={{ width: "40%" }} src={product.image} />
        <br />
        <p style={{ fontSize: "2.5em", color: "black" }}> {product.title}</p>
        <p style={{ fontSize: "2.5em" }} className="time">
          {" "}
          {product.time}
        </p>
        <p style={{ fontSize: "2.5em" }} className="ingredient">
          {" "}
          Ingredients : {product.ingredients}
        </p>
        <p
          style={{ fontSize: "2.5em", color: "black" }}
          className="description"
        >
          {" "}
          Description: {product.description}
        </p>
      </div>
    </>
  );
};

export default Product;
