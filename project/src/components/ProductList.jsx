import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TableHeader } from "../constant/constant";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-center text-blue-500">Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="border border-gray-300">
          <tr>
            {TableHeader.map((header) => {
              return (
                <th className="bg-gray-300 border border-gray-300 px-4 py-2">
                  {header}
                </th>
              );
            })}
          </tr>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{product.id}</td>
              <td className="border border-gray-300 px-4 py-2">
                {product.title}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ${product.price}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.category}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() =>
                    navigate(`/product/${product.id}`, { state: product })
                  }
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};
export default ProductList;
