import React, { useEffect, useState } from "react";
import Child from "./Child";

const Common = ({ api }) => {
  // console.log(api);

  const [product, setProduct] = useState([]);
  const [complete, setComplete] = useState([]);
  const [viewMore, setViewMore] = useState({});
  const [viewDetail, setViewDetail] = useState(null);
  const [sorting, setSorting] = useState("");
  const [search, setSearch] = useState("");

  const handleData = (data) => {
    setProduct(data);
  };
  // console.log(product);
  useEffect(() => {
    setComplete([...api, ...product]); // jab bhi api ya product change ho
  }, [api, product]);
  //   console.log(complete);

 const filterData = complete
    .filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
    )
    .sort( (a, b) => {

        if( sorting === "high") return b.price - a.price
        if( sorting === "low") return a.price - b.price
        if( sorting === "highRating") return b.rating - a.rating
        if( sorting === "lowRating") return a.rating - b.rating
        if( sorting === "highDiscount") return b.discountPercentage - a.discountPercentage
        if( sorting === "lowDiscount") return a.discountPercentage - b.discountPercentage
    })
    // console.log(filterData);
    

  return (
    <div>
      <div className="flex justify-evenly mt-2">
        <select
          className="border p-2"
          onClick={(e) => setSorting(e.target.value)}
        >
          <option value="">Select Sorting</option>
          <option value="high">High-Low Price</option>
          <option value="low">Low-High Price</option>
          <option value="highRating">High-Low Rating</option>
          <option value="lowRating">Low-High Rating</option>
          <option value="highDiscount">High-Low Discount</option>
          <option value="lowDiscount">Low-High Discount</option>
        </select>

        <input
          type="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-1/4"
        />
      </div>
      <div className="flex flex-wrap pt-5 gap-10 justify-center">
        {filterData?.map((item, index) => (
          <div
            key={index}
            className={`w-1/5 border-gray-400 border p-2 h-full`}
          >
            <div className="">
              <img
                src={item.thumbnail}
                alt={item.title}
                effect="blur"
                className="w-full h-52 object-contain"
              />
            </div>

            <div>
              <p className="text-sm text-gray-500">ID: {item.id}</p>
              <p className="font-bold text-lg">{item.title}</p>

              <p className="text-xs">
                {viewMore[item.id]
                  ? item.description
                  : item.description?.split(" ").slice(0, 10).join(" ") + "..."}
              </p>
              <p
                onClick={() => {
                  setViewMore((prev) => ({
                    ...prev,
                    [item.id]: !prev[item.id],
                  }));
                }}
                className="text-xs font-bold text-sky-500 cursor-pointer"
              >
                {viewMore[item.id] ? "less" : "more"}
              </p>

              <p className="text-sm">
                <b>Category : </b> {item.category}
              </p>
              <p className="text-sm">
                <b>Brand : </b> {item.brand}
              </p>
              <div className="flex justify-between">
                <p className="text-green-600 font-bold">₹{item.price}</p>
                <p>⭐ {item.rating}</p>
              </div>

              <button
                onClick={() =>
                  setViewDetail(viewDetail === item.id ? null : item.id)
                }
                className="bg-green-500 px-4 py-2 rounded text-white cursor-pointer m-2"
              >
                {viewDetail === item.id ? "Hide Detail" : "View Detail"}
              </button>

              {viewDetail === item.id && (
                <div className="text-sm">
                  <p>
                    <b>Description : </b>
                    <span className="text-xs">{item.description}</span>
                  </p>
                  <p>
                    <b>Discount : </b>
                    <span className="text-xs">{item.discountPercentage}%</span>
                  </p>
                  <p>
                    <b>Stock : </b>
                    <span className="text-xs">{item.stock}</span>
                  </p>
                  <p>
                    <b>Warranty : </b>
                    <span className="text-xs">{item.warrantyInformation}</span>
                  </p>
                  <p>
                    <b>Shipping : </b>
                    <span className="text-xs">{item.shippingInformation}</span>
                  </p>
                  <p>
                    <b>Status : </b>
                    <span className="text-xs">{item.availabilityStatus}</span>
                  </p>
                  <p>
                    <b>Return : </b>
                    <span className="text-xs">{item.returnPolicy}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <Child setData={handleData} />
    </div>
  );
};

export default Common;
