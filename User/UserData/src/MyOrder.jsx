import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeCart, removeUserCart } from "./slice/cartSlice";

const MyOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [loading, setLoading] = useState(true);

  const cartData = useSelector((state) => state.userCart.cart) || [];

  useEffect(() => {
    setLoading(false);
  }, [cartData]);

  const filteredData = cartData
    .filter((item) => (selectedUser ? item.userName === selectedUser : true))
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sorting === "HighQuantity") {
        return b.quantity - a.quantity;
      }

      if (sorting === "LowQuantity") {
        return a.quantity - b.quantity;
      }

      if (sorting === "HighPrice") {
        return b.price - a.price;
      }

      if (sorting === "LowPrice") {
        return a.price - b.price;
      }

      return 0;
    });

  const users = [
    ...new Set(cartData.map((item) => item.userName).filter(Boolean)),
  ];

  const handleRemove = (id) => {
    dispatch(removeCart(id));
  };

  const handleRemoveUser = (userName) => {
    if (!window.confirm("Remove all items of this user?")) return;

    dispatch(removeUserCart(userName));

    setSelectedUser("");
  };

  return (
    <>
      <div className="flex justify-start m-5">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition cursor-pointer"
        >
          ⬅ <span className="font-medium">Back</span>
        </button>
      </div>

      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">🧾 All Orders</h1>

        <div className="flex justify-evenly mb-6">
          <select
            value={sorting}
            onChange={(e) => setSorting(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="">Product Sort</option>

            <option value="HighQuantity">High-Low Quantity</option>

            <option value="LowQuantity">Low-High Quantity</option>

            <option value="HighPrice">High-Low Price</option>

            <option value="LowPrice">Low-High Price</option>
          </select>

          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="">All Users</option>

            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>

          <input
            type="search"
            placeholder="Search Product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-5 py-2 rounded w-1/4"
          />
        </div>

        {loading ? (
          <div className="text-center text-xl">Loading...</div>
        ) : filteredData.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            No Orders Found
          </div>
        ) : (
          users
            .filter((user) => (selectedUser ? user === selectedUser : true))
            .map((user) => {
              const items = filteredData.filter(
                (item) => item.userName === user,
              );

              if (items.length === 0) return null;

              return (
                <div key={user} className="mb-10">
                  <div className="flex justify-between items-center mb-5">
                    <h2 className="text-xl font-semibold text-blue-600">
                      👤 {user}
                    </h2>

                    <button
                      onClick={() => handleRemoveUser(user)}
                      className="bg-red-500 hover:bg-red-700 text-white px-5 py-2 rounded"
                    >
                      Clear Cart
                    </button>
                  </div>

                  <div className="grid grid-cols-4 gap-6">
                    {items.map((item) => (
                      <div
                        key={item.uniqueId}
                        className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition"
                      >
                        <div className="flex justify-center">
                          <LazyLoadImage
                            src={item.thumbnail}
                            effect="blur"
                            alt=""
                            className="w-full h-40 object-contain"
                          />
                        </div>

                        <h3 className="font-semibold text-gray-800 text-sm mt-2">
                          {item.title}
                        </h3>

                        <p className="text-gray-500 text-sm">
                          Qty: {item.quantity}
                        </p>

                        <p className="text-gray-500 text-sm">
                          Price: ${item.price}
                        </p>

                        <p className="text-green-600 font-bold mt-2">
                          ${item.discountedTotal}
                        </p>

                        <div className="text-center mt-3">
                          <button
                            onClick={() => handleRemove(item.uniqueId)}
                            className="bg-red-500 hover:bg-red-700 text-white py-1.5 px-5 rounded cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
        )}
      </div>
    </>
  );
};

export default MyOrder;
