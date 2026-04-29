import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Recepie = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("");
  const { id } = useParams();

  const fetchData = async () => {
    const result = await axios.get(`https://dummyjson.com/recipes/${id}`);
    setData(result.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const filteredIngredients = data.ingredients
    ?.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "asc") return a.localeCompare(b);
      if (sort === "desc") return b.localeCompare(a);
      return 0;
    });

  return (
    <>
      <div className="text-center">
        <button
          onClick={() => navigate("/")}
          className="bg-sky-400 px-5 cursor-pointer py-2 rounded hover:bg-sky-500 text-sm"
        >
          Back
        </button>
      </div>

      <div className="flex justify-evenly m-5">
        <input
          type="search"
          placeholder="Search ingredients..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-1/4"
        />

        <select
          onChange={(e) => setSort(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="">Sort</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center text-4xl">Loading....</div>
      ) : (
        <div className="min-h-screen flex flex-col justify-center items-center p-6">
          <div className="bg-white w-1/3 rounded-3xl shadow-2xl ">
            <div className="relative flex justify-center">
              <LazyLoadImage
                src={data.image}
                effect="blur"
                className="w-70 h-70 object-contain rounded-2xl"
                alt="recipe"
              />
              <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/70 p-4">
                <h2 className="text-white text-2xl font-bold">
                  {data.name}
                </h2>
              </div>
            </div>

            <div className="text-gray-700 text-right pr-5 text-sm">
              {data.cuisine}
            </div>

            <div className="p-5 space-y-4">
              <div className="flex justify-between text-sm ">
                <span>🍽 {data.servings} servings</span>
                <span>⏱ {data.prepTimeMinutes} min</span>
              </div>

              <div className="flex justify-between text-sm ">
                <p>Prep: {data.prepTimeMinutes} min</p>
                <p>Cook: {data.cookTimeMinutes} min</p>
              </div>

              <div className="flex justify-between text-sm ">
                <p>Calories: {data.caloriesPerServing} calories</p>
                <p>{data.rating} ⭐</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-800 mb-2">
                  Ingredients
                </h3>
                <div className="flex flex-wrap gap-2">
                  {filteredIngredients?.map((item, index) => (
                    <span
                      key={index}
                      className="bg-amber-200 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-800 mb-2">
                  Instructions
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 pr-2">
                  {data.instructions?.map((step, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="font-semibold text-amber-600">
                        {index + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-400 mt-5 rounded-xl hover:bg-green-600">
            <button
              onClick={() => navigate(`/posts/${data.id}`)}
              className="px-50 py-2 cursor-pointer"
            >
              View Post
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Recepie;