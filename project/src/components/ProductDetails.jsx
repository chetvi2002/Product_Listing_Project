import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoIosStar } from "react-icons/io";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!product) return <p>Product not found.</p>;
  const starArray = [1, 2, 3, 4, 5];

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
        <div className="flex max-w-2xl mx-auto bg-white border border-black shadow-lg rounded p-4 gap-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 border shadow-lg rounded p-4"
          />
          <div className="flex-col">
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <div className="flex items-center gap-2">
              <div className="flex">
                {starArray.map(() => {
                  return <IoIosStar key={Math.random()} />;
                })}
              </div>

              <p className="text-md text-gray-700 font-semibold">
                ({product.rating.rate})
              </p>
            </div>

            <p className="text-lg font-semibold">Description:</p>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-lg font-semibold">Price: ${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
