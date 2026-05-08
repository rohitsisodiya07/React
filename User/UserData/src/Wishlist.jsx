import React, { useMemo, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlist, removeUserWishlist } from "./slice/wishSlice";
import { addCart } from "./slice/cartSlice";

const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const wishlistItems = useSelector((state) => state.userWishlist.wishlist);

  const cartItems = useSelector((state) => state.userCart.cart);

  const currentUser = useSelector((state) => state.userData.currentUser);

  const users = [...new Set(wishlistItems.map((item) => item.userName))];

  const filteredData = useMemo(() => {
    return wishlistItems
      .filter((item) => (selectedUser ? item.userName === selectedUser : true))
      .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        if (sorting === "highPrice") {
          return b.price - a.price;
        }

        if (sorting === "lowPrice") {
          return a.price - b.price;
        }

        if (sorting === "highDiscount") {
          return b.discountedTotal - a.discountedTotal;
        }

        if (sorting === "lowDiscount") {
          return a.discountedTotal - b.discountedTotal;
        }

        return 0;
      });
  }, [wishlistItems, selectedUser, search, sorting]);

  const handleRemove = (id) => {
    dispatch(removeWishlist(id));
  };

  const handleRemoveUser = (user) => {
    if (!window.confirm("Remove all items of this user?")) return;

    dispatch(removeUserWishlist(user));

    setSelectedUser("");
  };

  const handleAddToCart = (item) => {
    if (!currentUser) {
      alert("Please login first ❌");

      navigate("/Login");

      return;
    }

    const alreadyInCart = cartItems.some(
      (cartItem) =>
        cartItem.id === item.id && cartItem.userName === currentUser.name,
    );

    if (alreadyInCart) {
      alert("Already In Cart 🛒");

      return;
    }

    const newItem = {
      ...item,
      ordered: true,
      cartId: Date.now() + Math.random(),
      uniqueId: Date.now() + Math.random(),
      userName: currentUser.name,
    };

    dispatch(addCart([newItem]));

    alert("Added To Cart ✅");
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
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded w-1/4"
          />
        </div>

        {filteredData.length === 0 ? (
          <p className="text-center text-gray-500">No wishlist data ❌</p>
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
                    <h3 className="text-xl font-bold text-blue-600">
                      👤 {user}
                    </h3>

                    <button
                      onClick={() => handleRemoveUser(user)}
                      className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
                    >
                      🗑 Clear
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                      <div
                        key={item.uniqueId}
                        className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
                      >
                        <LazyLoadImage
                          src={item.thumbnail}
                          effect="blur"
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

                        <div className="text-center mt-3 flex flex-col gap-2">
                          <button
                            onClick={() => handleAddToCart(item)}
                            className="bg-green-500 hover:bg-green-700 text-white py-1.5 px-5 rounded cursor-pointer"
                          >
                            🛒 Add To Cart
                          </button>

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

export default Wishlist;
