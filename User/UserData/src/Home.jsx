import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [viewDetail, setViewDetail] = useState(null);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("");
  const [loading, setLoading] = useState(true);
  const [table, setTable] = useState(false);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const result = await res.json();
    setData(result.users);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTable = () => {
    setTable(!table);
  };

  const filterData = data
    .filter(
      (item) =>
        item.firstName.toLowerCase().includes(search.toLowerCase()) ||
        item.lastName.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.username.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) => {
      if (sorting === "high") return b.age - a.age;
      if (sorting === "low") return a.age - b.age;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-evenly m-5">
        <select
          className="border p-2 cursor-pointer"
          onChange={(e) => setSorting(e.target.value)}
        >
          <option value="">Select Sorting</option>
          <option value="high">High-Low Age</option>
          <option value="low">Low-High Age</option>
        </select>

        <input
          type="search"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-1/4"
        />

        <button
          onClick={handleTable}
          className="bg-blue-300 px-5 py-2 rounded cursor-pointer"
        >
          {table ? "Card View" : "Table View"}
        </button>
      </div>

      {loading ? (
        <div className="text-5xl mt-50">Loading....</div>
      ) : table ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Age</th>
                <th className="p-3 text-left">Gender</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {filterData.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{item.id}</td>
                  <td className="p-3">
                    {item.firstName} {item.lastName}
                  </td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.age}</td>
                  <td className="p-3 capitalize">{item.gender}</td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => navigate(`/recipes/${item.id}`)}
                      className="bg-blue-400 px-3 py-1 rounded text-white cursor-pointer"
                    >
                      Recipes
                    </button>
                    <button
                      onClick={() => navigate(`/carts/${item.id}`)}
                      className="bg-red-400 px-3 py-1 rounded text-white cursor-pointer"
                    >
                      Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-wrap gap-7 justify-center">
          {filterData.map((item) => (
            <div
              key={item.id}
              className="bg-white w-1/4 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col self-start"
            >
              <div className="flex justify-center items-center h-44 bg-gray-50">
                <LazyLoadImage
                  alt="image"
                  effect="blur"
                  src={item.image}
                  className="h-32 w-32 object-contain rounded-full border"
                />
              </div>

              <div className="p-4 space-y-2">
                <p>
                  <span className="font-semibold">Id: </span>
                  {item.id}
                </p>
                <p>
                  <span className="font-semibold">Name: </span>
                  {item.firstName} {item.lastName}
                </p>
                <p>
                  <span className="font-semibold">Email: </span>
                  {item.email}
                </p>
                <p>
                  <span className="font-semibold">Age: </span>
                  {item.age}
                </p>
                <p>
                  <span className="font-semibold">Gender: </span>
                  {item.gender}
                </p>
              </div>

              <div className="px-4 pb-4">
                <button
                  onClick={() =>
                    setViewDetail(viewDetail === item.id ? null : item.id)
                  }
                  className="w-full py-2 bg-green-400 rounded text-white cursor-pointer"
                >
                  {viewDetail === item.id ? "Hide Details" : "View Details"}
                </button>

                {viewDetail === item.id && (
                  <div className="mt-3 text-sm space-y-2 border-t pt-3">
                    <p>
                      <span className="font-semibold">Phone: </span>
                      {item.phone}
                    </p>
                    <p>
                      <span className="font-semibold">Username: </span>
                      {item.username}
                    </p>
                    <p>
                      <span className="font-semibold">Blood Group: </span>
                      {item.bloodGroup}
                    </p>
                    <p>
                      <span className="font-semibold">Country: </span>
                      {item.address.country}
                    </p>
                    <p>
                      <span className="font-semibold">Address: </span>
                      {item.address?.address}, {item.address?.city},{" "}
                      {item.address?.state}
                    </p>
                    <p>
                      <span className="font-semibold">Company: </span>
                      {item.company?.name}
                    </p>
                    <p>
                      <span className="font-semibold">Department: </span>
                      {item.company?.department}
                    </p>
                    <p>
                      <span className="font-semibold">Title: </span>
                      {item.company?.title}
                    </p>
                    <p>
                      <span className="font-semibold">University: </span>
                      {item.university}
                    </p>

                    <button
                      onClick={() => navigate(`/recipes/${item.id}`)}
                      className="w-full py-2 bg-blue-400 rounded text-white cursor-pointer"
                    >
                      View Recipes
                    </button>

                    <button
                      onClick={() => navigate(`/carts/${item.id}`)}
                      className="w-full py-2 bg-red-400 rounded text-white cursor-pointer"
                    >
                      View Cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
