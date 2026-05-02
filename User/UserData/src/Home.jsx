import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

const Home = ({ user }) => {
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
  const handleLogOut = () => {
    localStorage.removeItem("currentUser");
    navigate("/Login");
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
      <div className="sticky top-0 z-50 mx-5 mt-5 mb-6">
        <div className="backdrop-blur-lg bg-white/80 border border-gray-200 shadow-lg rounded-2xl px-5 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <select
              onChange={(e) => setSorting(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition cursor-pointer"
            >
              <option value="">Sort by</option>
              <option value="high">High-Low Age</option>
              <option value="low">Low-High Age</option>
            </select>

            <div className="relative">
              <input
                type="search"
                placeholder="Search user..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 w-60 transition"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleTable}
              className="flex items-center gap-2 backdrop-blur-md bg-indigo-500/80 text-white px-6 py-2.5 rounded-xl shadow-lg hover:bg-indigo-600 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              {table ? "📊" : "📋"}
              <span className="font-medium">
                {table ? "Card View" : "Table View"}
              </span>
            </button>

            <button
              onClick={handleLogOut}
              className="flex items-center gap-2 backdrop-blur-md bg-red-500/80 text-white px-6 py-2.5 rounded-xl shadow-lg hover:bg-red-600 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              🚪 <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
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
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                  src={user.find((u) => u.id === item.id)?.image}
                  className="w-full rounded-full border"
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
