import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MyOrder = () => {
  const [cartData, setCartData] = useState({});
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("");
  const [loading, setLoading] = useState(true) ;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartData")) || {};
    setCartData(data);
    // setLoading(false) ;
  }, []);

  const filteredData = Object.fromEntries(
    Object.entries(cartData).map(([user, item]) => [
      user,
      item
        .filter((res) => res.title.toLowerCase().includes(search.toLowerCase()))
        .sort( (a, b) =>{

          if( sorting === 'HighQuantity') return b.quantity - a.quantity ;
          if( sorting === 'LowQuantity') return a.quantity - b.quantity ;
          if( sorting === 'HighPrice') return b.price - a.price ;
          if( sorting === 'LowPrice') return a.price - b.price ;
        })
        
    ]),
  );

  console.log(">>>>>>cart", cartData);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🧾 All Orders</h1>

      <div className="flex justify-evenly">
        <select
          onClick={(e) => setSorting(e.target.value)}
          className="border px-2 text-center"
        >
          <option value="">Select Sort</option>
          <option value="HighQuantity">High-Low Quantity</option>
          <option value="LowQuantity">Low-High Quantity</option>
          <option value="HighPrice">High-Low Price</option>
          <option value="LowPrice">Low-High Price</option>
        </select>

        <input
          type="search"
          placeholder="Search Product....."
          onChange={(e) => setSearch(e.target.value)}
          className="border px-5 py-2 rounded w-1/4"
        />
      </div>

      { loading ? 
      ( <div className="flex justify-center ">Loading......</div> ) : Object.keys(filteredData).length === 0 ? (
        <div className="text-center text-gray-500 text-lg">No Orders Found</div>
      ) : (
        Object.entries(filteredData).map(([user, items]) => (
          <div key={user} className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">
              👤 {user}
            </h2>

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
                      alt=""
                      className="w-full h-40 object-contain"
                    />
                  </div>

                  <h3 className="font-semibold text-gray-800 text-sm">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>

                  <p className="text-gray-500 text-sm">Price: ${item.price}</p>

                  <p className="text-green-600 font-bold mt-2">
                    ${item.discountedTotal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrder;
