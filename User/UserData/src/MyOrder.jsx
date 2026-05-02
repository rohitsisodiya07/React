import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

const MyOrder = () => {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState({});
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartData")) || {};
    setCartData(data);
    setLoading(false);
  }, []);

  const users = Object.keys(cartData);

  const filteredData = Object.fromEntries(
    Object.entries(cartData)
      .filter(([user]) => (selectedUser ? user === selectedUser : true))
      .map(([user, items]) => [
        user,
        items
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase()),
          )
          .sort((a, b) => {
            if (sorting === "HighQuantity") return b.quantity - a.quantity;
            if (sorting === "LowQuantity") return a.quantity - b.quantity;
            if (sorting === "HighPrice") return b.price - a.price;
            if (sorting === "LowPrice") return a.price - b.price;
            return 0;
          }),
      ])
      .filter(([_, items]) => items.length > 0),
  );

  const handleRemove = (user, id) => {
    let updatedCart = { ...cartData };
    const updatedItems = updatedCart[user].filter((item) => item.id !== id);
    if (updatedItems.length === 0) {
      delete updatedCart[user];
    } else {
      updatedCart[user] = updatedItems;
    }
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
    setCartData(updatedCart);
  };

  const handleRemoveUser = (user) => {
    if (!window.confirm("Remove all items of this user?")) return;
    let updatedCart = { ...cartData };
    delete updatedCart[user];
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
    setCartData(updatedCart);
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
            onChange={(e) => setSearch(e.target.value)}
            className="border px-5 py-2 rounded w-1/4"
          />
        </div>

        {loading ? (
          <div className="text-center text-xl">Loading...</div>
        ) : Object.keys(filteredData).length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            No Orders Found
          </div>
        ) : (
          Object.entries(filteredData).map(([user, items]) => (
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
                    key={item.id}
                    className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition"
                  >
                    <div className="flex justify-center">
                      <LazyLoadImage
                        src={item.thumbnail}
                        effect="blur"
                        wrapperProps={{
                          style: { transitionDelay: "0.1s" },
                        }}
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
                        onClick={() => handleRemove(user, item.id)}
                        className="bg-red-500 hover:bg-red-700 text-white py-1.5 px-5 rounded cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default MyOrder;
