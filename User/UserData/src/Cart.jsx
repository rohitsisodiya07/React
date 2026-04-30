import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Cart = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("");
  const [store, setStore] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    const result = await axios.get(`https://dummyjson.com/carts/${id}`);
    setData(result.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const filterData = data.products
    ?.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase() || ""),
    )
    .sort((a, b) => {
      if (sorting === "high") return b.price - a.price;
      if (sorting === "low") return a.price - b.price;
      if (sorting === "highDiscount")
        return b.discountedTotal - a.discountedTotal;
      if (sorting === "lowDiscount")
        return a.discountedTotal - b.discountedTotal;
      return 0;
    });

  const handleOrder = (products) => {
    const user = localStorage.getItem("NewUser");

    let cartData = JSON.parse(localStorage.getItem("cartData")) || {};

    let userCart = cartData[user] || [];

    const alreadyExists = products.some((p) =>
      userCart.some((i) => i.id === p.id),
    );

    if (alreadyExists) {
      alert("Item already added in cart");
      return;
    }
    alert("Order Placed")
    cartData[user] = [...userCart, ...products];

    localStorage.setItem("cartData", JSON.stringify(cartData));

    setStore(cartData[user]);
  };
  console.log(">>>>>store", store); // data dekhne ke liye uske alava use nhi h

  return (
    <>
      <div className="text-center m-5">
        <button
          onClick={() => navigate("/")}
          className="bg-sky-400 px-8 py-2 rounded hover:bg-sky-500 text-sm"
        >
          Back
        </button>
      </div>

      <div className="flex justify-around m-5">
        <select
          className="border p-2"
          onChange={(e) => setSorting(e.target.value)}
        >
          <option value="">Select Sorting</option>
          <option value="high">High-Low Price</option>
          <option value="low">Low-High Price</option>
          <option value="highDiscount">High-Low Discount</option>
          <option value="lowDiscount">Low-High Discount</option>
        </select>

        <input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-1/4"
        />
      </div>

      {loading ? (
        <div className="text-center mt-50 text-4xl">Loading.....</div>
      ) : (
        <div className="min-h-screen bg-gray-100 p-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-5">
            <h2 className="text-2xl font-bold mb-4">🛒 Cart #{data.id}</h2>

            <div className="space-y-4">
              {filterData?.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border rounded-xl p-3 hover:shadow-md transition"
                >
                  <LazyLoadImage
                    src={item.thumbnail}
                    effect="blur"
                    className="w-20 h-20 object-contain"
                    alt=""
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-500">
                      Price: ${item.price}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm line-through text-gray-400">
                      ${item.total}
                    </p>
                    <p className="text-lg font-semibold text-green-600">
                      ${item.discountedTotal}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t mt-6 pt-4 space-y-2 text-right">
              <p>Total Products: {data.totalProducts}</p>
              <p>Total Quantity: {data.totalQuantity}</p>
              <p className="text-gray-500 line-through">Total: ${data.total}</p>
              <p className="text-xl font-bold text-green-600">
                Final: ${data.discountedTotal}
              </p>
              <button
                onClick={() => handleOrder(data.products)}
                className="bg-green-400 px-5 py-2 rounded cursor-pointer"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
