import React, { useState, useMemo, useCallback } from "react";
import Child from "./Child";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");

  const handleData = useCallback((recipes) => {
    setData(recipes);
  }, []);

  const uniqueTags = [...new Set(data.flatMap((item) => item.tags))];

  const filterData = useMemo(() => {
    return [...data]
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      .filter((item) =>
        selectedMeal ? item.mealType.includes(selectedMeal) : true,
      )
      .filter((item) => (selectedTag ? item.tags.includes(selectedTag) : true))
      .sort((a, b) => {
        if (sorting === "ascending") return a.name.localeCompare(b.name);
        if (sorting === "descending") return b.name.localeCompare(a.name);
        if (sorting === "rating") return b.rating - a.rating;
        if (sorting === "review") return b.reviewCount - a.reviewCount;
        return 0;
      });
  }, [data, search, sorting, selectedTag, selectedMeal]);

  return (
    <div>
      <div className="text-center m-10">
        <input
          type="search"
          placeholder="Search here..."
          value={search}
          className="border-2 p-2 w-1/2"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="text-center">
        <select
          className="border-2 p-2"
          value={sorting}
          onChange={(e) => setSorting(e.target.value)}
        >
          <option value="">Select Sorting</option>
          <option value="ascending">A-Z</option>
          <option value="descending">Z-A</option>
          <option value="rating">Rating (High-Low)</option>
          <option value="review">Review (High-Low)</option>
        </select>
      </div>

      <div className="text-center mt-3">
        <select
          className="border-2 p-2"
          value={selectedMeal}
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          <option value="">All Meals</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
      </div>

      <div className="flex gap-3 flex-wrap justify-center m-5">
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            className={`px-3 py-1 border rounded ${
              selectedTag === tag ? "bg-green-400 text-white" : ""
            }`}
            onClick={() => setSelectedTag((prev) => (prev === tag ? "" : tag))}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="text-center">
        <button
          className="bg-red-400 px-3 py-2 rounded"
          onClick={() => {
            setSearch("");
            setSorting("");
            setSelectedTag("");
            setSelectedMeal("");
          }}
        >
          Clear Filters
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-5">
        {loading ? (
          <div>Loading......</div>
        ) : filterData.length === 0 ? (
          <div>No Data Found...</div>
        ) : (
          filterData.map((item) => (
            <div key={item.id} className="w-1/5 border-2 p-2 rounded">
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-contain h-32"
                />
              </div>

              <div>
                <p>
                  <b>Name:</b> {item.name}
                </p>
                <p>
                  <b>Rating:</b> {item.rating}
                </p>
                <p>
                  <b>Reviews:</b> {item.reviewCount}
                </p>

                <div className="text-center">
                  <button
                    className="bg-green-500 px-2 py-2 m-2 text-white rounded"
                    onClick={() =>
                      navigate(`/recipes/${item.id}`, {
                        state: { item },
                      })
                    }
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <Child sendData={handleData} />
    </div>
  );
};

export default Home;
