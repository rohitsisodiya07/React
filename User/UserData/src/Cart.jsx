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
  const [ordered, setOrdered] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const { id } = useParams();

  const fetchData = async () => {
    const result = await axios.get(`https://dummyjson.com/carts/${id}`);
    setData(result.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();

    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) return;

    const userName = user.name;

    const cartData = JSON.parse(localStorage.getItem("cartData")) || {};
    const userCart = cartData[userName] || [];

    const isOrdered = userCart.some((item) => item.cartId == id);
    setOrdered(isOrdered);

    const wishlistData = JSON.parse(localStorage.getItem("wishlistData")) || {};
    const userWishlist = wishlistData[userName] || [];

    const isWishlisted = userWishlist.some(
      (item) => item.wishlistId == id
    );

    setWishlist(isWishlisted);
  }, [id]);

  const filterData = data.products
    ?.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
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
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
      alert("Please login first ❌");
      navigate("/Login");
      return;
    }

    const userKey = user.name;

    let cartData = JSON.parse(localStorage.getItem("cartData")) || {};
    let userCart = cartData[userKey] || [];

    const newProducts = products.map((p) => ({
      ...p,
      ordered: true,
      cartId: id,
      uniqueId: Date.now() + Math.random(),
    }));

    cartData[userKey] = [...userCart, ...newProducts];

    localStorage.setItem("cartData", JSON.stringify(cartData));

    setOrdered(true);

    alert("Order Placed ✅");
  };

  const handleWishlist = (products) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
      alert("Please Login First ❌");
      navigate("/Login");
      return;
    }

    const userName = user.name;

    let wishlistData = JSON.parse(localStorage.getItem("wishlistData")) || {};
    let userWishlist = wishlistData[userName] || [];

    const newProducts = products.map((item) => ({
      ...item,
      wishlist: true,
      wishlistId: id,
      uniqueId: Date.now() + Math.random(),
    }));

    const uniqueProducts = newProducts.filter(
      (newItem) =>
        !userWishlist.some(
          (oldItem) => oldItem.wishlistId === newItem.wishlistId
        )
    );

    wishlistData[userName] = [...userWishlist, ...uniqueProducts];

    localStorage.setItem("wishlistData", JSON.stringify(wishlistData));

    setWishlist(true);

    alert("Wishlist Added ✅");
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
              {filterData?.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-4 border rounded-xl p-3"
                >
                  <LazyLoadImage
                    src={item.thumbnail}
                    effect="blur"
                    className="w-20 h-20 object-contain"
                    alt=""
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p>Qty: {item.quantity}</p>
                    <p>Price: ${item.price}</p>
                  </div>

                  <div className="text-right">
                    <p className="line-through">${item.total}</p>
                    <p className="text-green-600 font-semibold">
                      ${item.discountedTotal}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t mt-6 pt-4">
              <div className="text-right space-y-1">
                <p>Total Products: {data.totalProducts}</p>
                <p>Total Quantity: {data.totalQuantity}</p>
                <p className="line-through text-gray-500">
                  Total: ${data.total}
                </p>
                <p className="text-xl font-bold text-green-600">
                  Final: ${data.discountedTotal}
                </p>
              </div>

              <div className="mt-5 flex justify-between items-center bg-amber-100 px-5 py-3 rounded-xl">
                {wishlist ? (
                  <div className="text-green-600 font-bold text-lg">
                    ✅ Wishlisted
                  </div>
                ) : (
                  <button
                    onClick={() => handleWishlist(data.products)}
                    className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 active:scale-95 transition flex items-center gap-2 cursor-pointer"
                  >
                    💙 Wishlist
                  </button>
                )}

                {ordered ? (
                  <div className="text-green-600 font-bold text-lg">
                    ✅ Ordered
                  </div>
                ) : (
                  <button
                    onClick={() => handleOrder(data.products)}
                    className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 active:scale-95 transition flex items-center gap-2 cursor-pointer"
                  >
                    🛒 Place Order
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;