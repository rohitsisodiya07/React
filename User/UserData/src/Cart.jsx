import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCart } from "./slice/cartSlice";
import { addWishlist } from "./slice/wishSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("");
  const [ordered, setOrdered] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  const productId = Number(id);

  const user = useSelector((state) => state.userData.currentUser);

  const cartItems = useSelector((state) => state.userCart.cart);

  const wishlistItems = useSelector((state) => state.userWishlist.wishlist);

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await axios.get(`https://dummyjson.com/carts/${id}`);

      setData(res.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;

    fetchData();
  }, [id]);

  useEffect(() => {
    if (!user) return;

    const isOrdered = cartItems.some(
      (item) => item.cartId === productId && item.userName === user.name,
    );

    const isWishlisted = wishlistItems.some(
      (item) => item.wishlistId === productId && item.userName === user.name,
    );

    setOrdered(isOrdered);

    setWishlist(isWishlisted);
  }, [cartItems, wishlistItems, productId, user]);

  const filterData = useMemo(() => {
    return data.products
      ?.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      )
      .sort((a, b) => {
        if (sorting === "high") {
          return b.price - a.price;
        }

        if (sorting === "low") {
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
  }, [data, search, sorting]);

  const handleOrder = (products = []) => {
    if (!user) {
      alert("Please login first ❌");

      navigate("/Login");

      return;
    }

    if (!products.length) {
      alert("No Products Found ❌");

      return;
    }

    const alreadyOrdered = cartItems.some(
      (item) => item.cartId === productId && item.userName === user.name,
    );

    if (alreadyOrdered) {
      alert("Already Ordered ✅");

      return;
    }

    const newProducts = products.map((item) => ({
      ...item,
      ordered: true,
      cartId: productId,
      uniqueId: Date.now() + Math.random(),
      userName: user.name,
    }));

    dispatch(addCart(newProducts));

    setOrdered(true);

    alert("Order Placed ✅");
  };

  const handleWishlist = (products = []) => {
    if (!user) {
      alert("Please login first ❌");

      navigate("/Login");

      return;
    }

    if (!products.length) {
      alert("No Products Found ❌");

      return;
    }

    const alreadyWishlisted = wishlistItems.some(
      (item) => item.wishlistId === productId && item.userName === user.name,
    );

    if (alreadyWishlisted) {
      alert("Already Wishlisted ❤️");

      return;
    }

    const newProducts = products.map((item) => ({
      ...item,
      wishlist: true,
      wishlistId: productId,
      uniqueId: Date.now() + Math.random(),
      userName: user.name,
    }));

    dispatch(addWishlist(newProducts));

    setWishlist(true);

    alert("Wishlist Added ✅");
  };
  console.log(">>>>>>>data", data);
  console.log("products", data.products);
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

                  <div className="text-right px-2 py-1 rounded">
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
                  <div className="text-sky-600 font-bold text-lg">
                    ✅ Wishlisted
                  </div>
                ) : (
                  <button
                    onClick={() => handleWishlist(data?.products || [])}
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
                    onClick={() => handleOrder(data?.products || [])}
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
