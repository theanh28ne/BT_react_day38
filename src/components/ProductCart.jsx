import React from "react";
import useCart from "../hooks/useCart";

export default function ProductCard({ products }) {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-gray-300 rounded p-4 bg-white"
        >
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-600 text-sm mt-2">{product.description}</p>
          <p className="text-2xl font-bold text-blue-600 mt-3">
            ${product.price}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600"
          >
            Thêm vào giỏ
          </button>
        </div>
      ))}
    </div>
  );
}
