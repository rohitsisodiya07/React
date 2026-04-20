import React, { useEffect, useState } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import CheckCart from "./CheckCart";

const FetchApi = ({ setCart, setWish }) => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("");
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState({});
  const [viewDetail, setViewDetail] = useState(null);

  const navigate = useNavigate();

  const fetchData = async () => {
    const result = await axios.get("https://dummyjson.com/products");
    setData(result.data.products);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = () => {
    setToggle(!toggle);
  };

  const handleCart = (product) => {
    setCart((prevCart) => {
      const presentItem = prevCart.find((item) => item.id === product.id);

      if (presentItem) {
        alert("Quantity Increased 🛒");
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        alert("Item added to cart 🛒");
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  
  const handleWish = (product) => {
    
    setWish( (prevWish) => {
      const presentWish = prevWish.find((item) => item.id === product.id) ;
      if(presentWish){
        
        alert("Already Added") ;
      }
      else{
        alert("Item add to WishList") ;
        return [...prevWish, { ...product}];

        }
      })
  }

  const filterData = data
    .filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) => {
      if (sorting === "high") return b.price - a.price;
      if (sorting === "low") return a.price - b.price;
      if (sorting === "highRating") return b.rating - a.rating;
      if (sorting === "lowRating") return a.rating - b.rating;
      if (sorting === "highDiscount")
        return b.discountPercentage - a.discountPercentage;
      if (sorting === "lowDiscount")
        return a.discountPercentage - b.discountPercentage;
      return 0;
    });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex gap-10 mb-10">
        <button
          onClick={handleChange}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Toggle
        </button>

        <select
          onChange={(e) => setSorting(e.target.value)}
          className="border-2 p-2"
        >
          <option value="">Select Sorting</option>
          <option value="high">High Price</option>
          <option value="low">Low Price</option>
          <option value="highRating">High Rating</option>
          <option value="lowRating">Low Rating</option>
          <option value="highDiscount">High Discount</option>
          <option value="lowDiscount">Low Discount</option>
        </select>

        <input
          type="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-1/4"
        />

        <button
          className="bg-green-500 px-4 py-2 rounded text-white"
          onClick={() => navigate("/CheckCart")}
        >
          Check Cart
        </button>

        <button
          className="bg-red-500 px-4 py-2 rounded text-white"
          onClick={() => navigate("/Wishlist")}
        >
          Wishlist
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <ClimbingBoxLoader color="#36d7b7" size={30} />
          </div>
        ) : data.length === 0 ? (
          <h1 className="text-4xl">No Data Found!!!</h1>
        ) : (
          filterData.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl 
  ${viewDetail && viewDetail !== item.id ? "opacity-30 blur-sm scale-95" : ""}
  ${viewDetail === item.id ? "ring-5 ring-green-500 scale-105 z-10" : ""}`}
            >
              <div className="h-48 flex items-center justify-center">
                <LazyLoadImage
                  src={item.thumbnail}
                  alt={item.title}
                  effect="blur"
                  className="w-full h-52 object-contain"
                />
              </div>

              <div
                className={`p-4 text-sm ${viewDetail === item.id ? "space-y-2" : ""}`}
              >
                <p className="text-gray-500 font-bold text-sm">
                  Id : {item.id}
                </p>
                <h2 className="font-semibold text-lg">{item.title}</h2>

                <p className="text-gray-500">
                  {showMore[item.id]
                    ? item.description
                    : item.description.split(" ").slice(0, 10).join(" ") +
                      "..."}
                </p>

                <p
                  onClick={() =>
                    setShowMore((prev) => ({
                      ...prev,
                      [item.id]: !prev[item.id],
                    }))
                  }
                  className="text-blue-500 cursor-pointer text-xs"
                >
                  {showMore[item.id] ? "less" : "more"}
                </p>

                <p><b>Category</b>: {item.category}</p>
                <p><b>Brand</b>: {item.brand}</p>

                <div className="flex justify-between">
                  <p className="text-green-600 font-bold">₹{item.price}</p>
                  <p>⭐ {item.rating}</p>
                </div>

                <button
                  onClick={() =>
                    setViewDetail(viewDetail === item.id ? null : item.id)
                  }
                  className="bg-green-500 px-4 py-2 rounded text-white"
                >
                  {viewDetail === item.id ? "Hide Detail" : "View Detail"}
                </button>

                {viewDetail === item.id && (
                  <div className="mt-3 text-sm text-gray-700">
                    <p>
                      <b>Full Description:</b> {item.description}
                    </p>
                    <p>
                      <b>Brand:</b> {item.brand}
                    </p>
                    <p>
                      <b>Category:</b> {item.category}
                    </p>
                    <p>
                      <b>Stock:</b> {item.stock}
                    </p>
                    <p>
                      <b>Discount:</b> {item.discountPercentage}%
                    </p>
                  </div>
                )}

                <button
                  className="bg-green-500 px-4 py-2  ml-20 rounded text-white"
                  onClick={() => handleCart(item)}
                >
                  Add Cart
                </button>
                
                <button
                  className="bg-green-500 px-4 py-2 mt-5  ml-20 rounded text-white"
                  onClick={() => handleWish(item)}
                >
                  Add WishList
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FetchApi;
