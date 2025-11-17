import React from "react";
import useCart from "../hooks/useCart";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();

  //   const totalPrice = items.reduce(
  //     (total, item) => total + item.price * item.quantity,
  //     0
  //   );

  return (
    <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-300 rounded shadow-lg z-50 max-h-96 overflow-y-auto">
      {items.length === 0 ? (
        <div className="p-4 text-center text-gray-500">Giỏ hàng trống</div>
      ) : (
        <>
          <div className="p-4 space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div className="flex-1">
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="text-gray-600 text-xs">${item.price}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                  >
                    -
                  </button>
                  <span className="w-6 text-center text-sm">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, +1)}
                    className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-2 text-red-500 hover:text-red-700 font-bold"
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <div className="border-t p-4 space-y-2">
            <div className="flex justify-between font-bold">
              <span>Tổng cộng:</span>
              <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={clearCart}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 text-sm"
            >
              Xóa giỏ hàng
            </button>
            <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
              Thanh toán
            </button>
          </div>
        </>
      )}
    </div>
  );
}
