import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckCart = ({ cart }) => {
  const [datas, setDatas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setDatas(cart);
  }, [cart]);

  const handleRemove = (product) => {
    setDatas((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const totalPrice = datas.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">🛒 Your Cart</h1>
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>

      {datas.length === 0 ? (
        <p className="text-center text-xl font-semibold mt-20">
          Cart is empty!!!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {datas.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-40 object-contain mb-3"
              />

              <h2 className="font-semibold text-lg line-clamp-2">
                {item.title}
              </h2>

              <p className="text-green-600 font-bold mt-1">
                ₹ {item.price}
              </p>

              <button
                className="mt-auto bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                onClick={() => handleRemove(item)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {datas.length > 0 && (
        <div className="mt-10 flex justify-between items-center bg-white p-5 rounded-xl shadow">
          <h2 className="text-xl font-semibold">
            Total: ₹ {totalPrice.toFixed(2)}
          </h2>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckCart;