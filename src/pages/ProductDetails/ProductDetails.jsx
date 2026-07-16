// import React from 'react';

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AddToCartBtn from "../../components/ui/AddToCartBtn";

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProducts] = useState(null);

    useEffect(() => {
        fetch("/product.json")
        .then((res) => res.json())
        .then((data) => {
            const foundProduct = data.find((item) => item._id === id);
            setProducts(foundProduct);
        });
    },[id]);

    if(!product){
        return <h2>Loading....</h2>
    }
    return (
       <div className="max-w-6xl mx-auto p-10">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.images[0]}
          alt={product.name}
          className="rounded-xl"
        />

        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>

          <p className="text-gray-500 mt-2">{product.category}</p>

          <p className="text-3xl font-bold text-indigo-600 mt-4">
            ${product.discountedPrice}
          </p>

          <p className="line-through text-gray-400">
            ${product.price}
          </p>

          <p className="mt-6">{product.description}</p>

          <AddToCartBtn product={product}/>

        </div>
      </div>
    </div>
    );
};

export default ProductDetails;