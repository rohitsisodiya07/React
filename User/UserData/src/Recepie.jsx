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
  const [viewPost, setViewPost] = useState(null);
  const [answer, setAnswer] = useState({});
  const [tagSort, setTagSort] = useState("");
  const { id } = useParams();

  const fetchData = async () => {
    const result = await axios.get(`https://dummyjson.com/recipes/${id}`);
    setData(result.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  useEffect(() => {
    if (viewPost) {
      const getData = async () => {
        const result = await axios.get(`https://dummyjson.com/posts/${viewPost}`);
        setAnswer(result.data);
      };
      getData();
    }
  }, [viewPost]);

  const filteredIngredients = data.ingredients
    ?.filter((item) => item.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "asc") return a.localeCompare(b);
      if (sort === "desc") return b.localeCompare(a);
      return 0;
    });

  const sortedTags = answer.tags?.slice().sort((a, b) => {
    if (tagSort === "asc") return a.localeCompare(b);
    if (tagSort === "desc") return b.localeCompare(a);
    return 0;
  });

  const handlePost = (id) => {
    setViewPost(viewPost === id ? null : id);
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
          className="border px-4 py-2 rounded cursor-pointer"
        >
          <option value="">Sort</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center text-4xl">Loading....</div>
      ) : (
        <div className="min-h-screen flex flex-col items-center p-6">
          <div className="bg-white w-1/3 rounded-3xl shadow-2xl">
            <div className="relative flex justify-center">
              <LazyLoadImage
                src={data.image}
                effect="blur"
                className="w-70 h-70 object-contain rounded-2xl"
                alt="recipe"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/70 p-4">
                <h2 className="text-white text-2xl font-bold">{data.name}</h2>
              </div>
            </div>

            <div className="text-gray-700 text-right pr-5 text-sm">
              {data.cuisine}
            </div>

            <div className="p-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span>🍽 {data.servings} servings</span>
                <span>⏱ {data.prepTimeMinutes} min</span>
              </div>

              <div className="flex justify-between text-sm">
                <p>Prep: {data.prepTimeMinutes} min</p>
                <p>Cook: {data.cookTimeMinutes} min</p>
              </div>

              <div className="flex justify-between text-sm">
                <p>Calories: {data.caloriesPerServing}</p>
                <p>{data.rating} ⭐</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {filteredIngredients?.map((item, index) => (
                    <span
                      key={index}
                      className="bg-amber-200 text-xs px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Instructions</h3>
                <ul className="space-y-2 text-sm">
                  {data.instructions?.map((step, index) => (
                    <li key={index}>
                      {index + 1}. {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <button
            onClick={() => handlePost(data.id)}
            className="bg-green-400 mt-5 px-10 py-2 rounded hover:bg-green-600 cursor-pointer"
          >
            {viewPost === data.id ? "Hide Post" : "View Post"}
          </button>

          {viewPost && (
            <div className="flex justify-center p-6 bg-gray-100 w-full">
              <div className="bg-white w-96 rounded-2xl shadow-lg p-5 space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    Post #{answer.id}
                  </p>
                </div>

                <h2 className="text-xl font-semibold text-gray-800">
                  {answer.title}
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {answer.body}
                </p>

                <div className="flex flex-wrap gap-2">
                  {sortedTags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-amber-200 text-xs px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between text-sm text-gray-600 border-t pt-3">
                  <span>❤️ {answer.reactions?.likes}</span>
                  <span>💔 {answer.reactions?.dislikes}</span>
                  <span>👀 {answer.views}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Recepie;