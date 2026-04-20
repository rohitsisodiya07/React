import React, { useState, useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const Info = ({ label, value }) => (
  <p className="text-sm">
    <span className="font-bold">{label}:</span>{" "}
    <span className="text-xs text-gray-700">{value}</span>
  </p>
);

const CheckCart = ({ cart }) => {
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState({});
  const [carts, setCarts] = useState(cart);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleRemove = (product) => {
    setCarts((prevCart) => {
      return prevCart.filter((item) => item.id !== product.id);
    });
  };

  return (
    <div>
      <div className="my-5 flex justify-center">
        <button
          onClick={() => navigate("/FetchApi")}
          className="bg-green-500 px-8 py-2 rounded text-white hover:bg-green-600 transition"
        >
          Back
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 mx-5">
        {loading ? (
          <div className="flex justify-center items-center h-screen col-span-full">
            <ClimbingBoxLoader color="#36d7b7" size={30} />
          </div>
        ) : carts.length === 0 ? (
          <h1 className="text-4xl col-span-full text-center">
            No Items in Cart !!
          </h1>
        ) : (
          carts.map((item) => (
            <div
              key={item.id}
              className="bg-gray-300 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-48 flex items-center justify-center">
                <LazyLoadImage
                  src={item.thumbnail}
                  alt={item.title}
                  effect="blur"
                  className="w-full h-52 object-contain"
                />
              </div>

              <div className="p-4 text-sm space-y-1">
                <p className="text-gray-500 font-bold text-sm">Id: {item.id}</p>

                <h2 className="font-semibold text-lg">{item.title}</h2>

                <p className="text-gray-600 text-sm">
                  {showMore[item.id]
                    ? item.description
                    : item.description.split(" ").slice(0, 10).join(" ") +
                      "..."}
                </p>

                <p
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMore((prev) => ({
                      ...prev,
                      [item.id]: !prev[item.id],
                    }));
                  }}
                  className="text-blue-500 cursor-pointer text-xs"
                >
                  {showMore[item.id] ? "less" : "more"}
                </p>

                <Info label="Category" value={item.category} />
                <Info label="Brand" value={item.brand} />
                <Info label="Stock" value={item.stock} />
                <Info label="Warranty" value={item.warrantyInformation} />
                <Info label="Shipping" value={item.shippingInformation} />
                <Info label="Status" value={item.availabilityStatus} />
                <Info label="Return" value={item.returnPolicy} />
                <Info label="Quantity" value={item.quantity} />

                <div className="flex justify-between mt-2">
                  <p className="text-green-600 font-bold">₹{item.price}</p>
                  <p>⭐ {item.rating}</p>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => handleRemove(item)}
                    className="bg-red-600 px-10 py-3 rounded text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CheckCart;
