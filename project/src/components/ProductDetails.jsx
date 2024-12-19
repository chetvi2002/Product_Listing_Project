import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { starArray } from "../constant/constant";

const ProductDetails = () => {
  const { state: product } = useLocation();
  const navigate = useNavigate();

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => navigate("/")}
        className="w-40 bg-gray-500 text-white px-3 py-1 rounded m-4"
      >
        Back to Products
      </button>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-center text-blue-500">
          Product Details
        </h1>
        <div className="flex max-w-2xl mx-auto bg-white border shadow-lg rounded p-4 gap-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 border shadow-lg rounded p-4"
          />
          <div className="flex-col">
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <div className="flex items-center gap-2">
              <div className="flex">
                {starArray.map(() => (
                  <IoIosStar className="text-yellow-500" />
                ))}
              </div>
              <p className="text-md text-gray-700 font-semibold">
                ({product.rating.rate})
              </p>
            </div>
            <div className="flex flex-col font-semibold">
              <p className="text-lg">Description:</p>
              <p className="w-full text-sm text-gray-700 line-clamp-3">
                {product.description}
              </p>
            </div>

            <div className="flex text-lg font-semibold">
              <p>Price:</p>
              <p className="text-blue-500">${product.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
