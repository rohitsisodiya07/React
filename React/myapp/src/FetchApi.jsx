import React, { useEffect, useState } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

const FetchApi = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate() ;

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
    if(toggle){
      navigate('/Signup')
    }
    else{
      navigate('/Login')
    }
  };

  const filterData = data.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) => {
      if (sorting === "high") return b.price - a.price;
      if (sorting === "low") return a.price - b.price;
      if (sorting === "highRating") return b.rating - a.rating;
      if (sorting === "lowRating") return a.price - b.price;
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
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
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
          className="border px-4 py-2 rounded w-1/4 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <h1 className="text-2xl">Loading.......</h1>
        ) : (
          filterData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 overflow-hidden"
            >
              <div className="h-48 bg-gray-50 flex items-center justify-center">
                <LazyLoadImage
                  src={item.thumbnail}
                  alt={item.title}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "0.5s" },
                  }}
                  className="w-full h-52 object-contain rounded'"
                />
              </div>

              <div className="p-4 space-y-1 text-sm">
                <h2 className="font-semibold text-lg truncate">{item.title}</h2>
                <p className="text-gray-500 line-clamp-2">{item.description}</p>

                <p>
                  <span className="font-medium">Category:</span> {item.category}
                </p>
                <p>
                  <span className="font-medium">Brand:</span> {item.brand}
                </p>

                <div className="flex justify-between items-center mt-2">
                  <p className="text-green-600 font-bold">₹{item.price}</p>
                  <p className="text-yellow-500">⭐ {item.rating}</p>
                </div>

                <p className="text-xs ">
                  Discount Percentage: {item.discountPercentage}%
                </p>
                <p className="text-xs text-gray-400">Stock: {item.stock}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FetchApi;
