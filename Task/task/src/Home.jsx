import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = ({ setCart }) => {
  const [datas, setDatas] = useState([]);
  const [showMore, setShowMore] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");
      setDatas(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCart = (product) => {
    setCart((prevCart) => {
      const presentItem = prevCart.find((item) => item.id === product.id);

      if (presentItem) {
        alert("Quantity Increased");
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        alert("Item added to cart");
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const categories = ["all", ...new Set(datas.map((item) => item.category))];

  const filteredData =
    selectedCategory === "all"
      ? datas
      : datas.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">🛒 My Store</h1>
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          onClick={() => navigate("/CheckCart")}
        >
          Check Cart
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((item, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full shadow ${
              selectedCategory === item
                ? "bg-green-500 text-white"
                : "bg-white hover:bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
          >
            <img src={item.image} alt="" className="h-40 object-contain mb-3" />

            <h2 className="font-semibold text-lg line-clamp-2">{item.title}</h2>

            <p className="text-green-600 font-bold mt-1">₹ {item.price}</p>

            <p className="text-sm text-gray-600 mt-2">
              {showMore[item.id]
                ? item.description
                : item.description.split(" ").slice(0, 10).join(" ") + "..."}
            </p>

            <span
              onClick={() =>
                setShowMore((prev) => ({
                  ...prev,
                  [item.id]: !prev[item.id],
                }))
              }
              className="text-blue-500 cursor-pointer text-sm mt-1"
            >
              {showMore[item.id] ? "View Less" : "View More"}
            </span>

            <button
              className="mt-auto bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={() => handleCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
