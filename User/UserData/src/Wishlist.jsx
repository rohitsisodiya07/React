import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();
  const [wishlistData, setWishlistData] = useState({});
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlistData")) || {};
    setWishlistData(data);
    setLoading(false);
  }, []);
  // console.log(">>>>>>>>>wish", wishlistData);

  const users = Object.keys(wishlistData);

  const filterData = Object.fromEntries(
    Object.entries(wishlistData)
      .filter(([user]) => (selectedUser ? user === selectedUser : true))
      .map(([user, items]) => [
        user,
        items
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase()),
          )
          .sort((a, b) => {
            if (sorting === "highPrice") return b.price - a.price;
            if (sorting === "lowPrice") return a.price - b.price;
            if (sorting === "highDiscount")
              return b.discountedTotal - a.discountedTotal;
            if (sorting === "lowDiscount")
              return a.discountedTotal - b.discountedTotal;
          }),
      ]),
  );

  // console.log(">>>>>filterdata", filterData);

  const handleRemove = (user, id) => {
    let updatedWishlist = { ...wishlistData };
    const updatedItems = updatedWishlist[user].filter((item) => item.id !== id);
    if (updatedItems.length === 0) {
      delete updatedWishlist[user];
    } else {
      updatedWishlist[user] = updatedItems;
    }
    localStorage.setItem("wishlistData", JSON.stringify(updatedWishlist));
    setWishlistData(updatedWishlist);
  };

  const handleRemoveUser = (user) => {
    if (!window.confirm("Remove all items of this user?")) return;
    let updatedWishlist = { ...wishlistData };
    delete updatedWishlist[user];
    localStorage.setItem("wishlistData", JSON.stringify(updatedWishlist));
    setWishlistData(updatedWishlist);
    setSelectedUser("");
  };

  const handleAddAllToCart = (user) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      alert("Please login first ❌");
      navigate("/Login");
      return;
    }

    const userName = currentUser.name;

    let cartData = JSON.parse(localStorage.getItem("cartData")) || {};
    let userCart = cartData[userName] || [];

    const wishlistItems = wishlistData[user] || [];

    const newItems = wishlistItems.filter(
      (item) => !userCart.some((cartItem) => cartItem.id === item.id),
    );

    if (newItems.length === 0) {
      alert("All items already in cart ⚠️");
      return;
    }

    const updatedItems = newItems.map((item) => ({
      ...item,
      cartId: Date.now() + Math.random(),
    }));

    cartData[userName] = [...userCart, ...updatedItems];

    localStorage.setItem("cartData", JSON.stringify(cartData));

    alert("All items added to cart ✅");
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
        <h2 className="text-2xl font-bold text-center mb-6">
          💙 All Wishlists
        </h2>

        <div className="flex justify-around m-5">
          <select
            className="border p-2"
            onChange={(e) => setSorting(e.target.value)}
          >
            <option value="">Select Sorting</option>
            <option value="highPrice">High-Low Price</option>
            <option value="lowPrice">Low-High Price</option>
            <option value="highDiscount">High-Low Discount</option>
            <option value="lowDiscount">Low-High Discount</option>
          </select>

          <select
            onChange={(e) => setSelectedUser(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="">All Users</option>
            {Object.keys(wishlistData).map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
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
          <div className="text-center text-xl">Loading...</div>
        ) : Object.keys(filterData).length === 0 ? (
          <p className="text-center text-gray-500">No wishlist data ❌</p>
        ) : (
          Object.entries(filterData).map(([user, items]) => (
            <div key={user} className="mb-10">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-bold text-blue-600">👤 {user}</h3>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleAddAllToCart(user)}
                    className="flex items-center gap-2 bg-green-500/90 backdrop-blur-md text-white px-5 py-2 rounded-xl shadow-md hover:bg-green-600 hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    🛒 <span className="font-medium">Add to Cart</span>
                  </button>

                  <button
                    onClick={() => handleRemoveUser(user)}
                    className="flex items-center gap-2 bg-red-500/90 backdrop-blur-md text-white px-5 py-2 rounded-xl shadow-md hover:bg-red-600 hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    🗑 <span className="font-medium">Clear</span>
                  </button>
                </div>
              </div>

              {items.length === 0 ? (
                <p className="text-gray-500">No items</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
                    >
                      <LazyLoadImage
                        src={item.thumbnail}
                        effect="blur"
                        wrapperProps={{
                          style: { transitionDelay: "0.1s" },
                        }}
                        alt=""
                        className="w-32 h-32 object-contain mb-3"
                      />

                      <h3 className="font-semibold text-center">
                        {item.title}
                      </h3>

                      <p className="text-gray-600">Price: ${item.price}</p>

                      <p className="text-green-600 font-bold">
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
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Wishlist;
