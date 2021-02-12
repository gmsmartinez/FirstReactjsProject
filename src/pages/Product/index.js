import React from "react";
import { useParams } from "react-router-dom";

function Product() {
    const { id } = useParams();
    return <p>El id del producto es: {id}</p>;
}

export default Product;