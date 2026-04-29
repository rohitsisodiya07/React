import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchData = async () => {
    const result = await axios.get(`https://dummyjson.com/posts/${id}`);
    setData(result.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const filterData =
    data.title?.toLowerCase().includes(search.toLowerCase()) ||
    data.body?.toLowerCase().includes(search.toLowerCase()) ||
    !search;

  const sortedTags = data.tags
    ?.filter((tag) =>
      tag.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "asc") return a.localeCompare(b);
      if (sort === "desc") return b.localeCompare(a);
      return 0;
    });

  return (
    <>
      <div className="text-center m-5">
        <button
          onClick={() => navigate(-1)}
          className="bg-sky-400 px-8 cursor-pointer py-2 rounded hover:bg-sky-500 text-sm"
        >
          Back
        </button>
      </div>

      <div className="flex justify-center gap-5 mb-5">
        <input
          type="search"
          placeholder="Search post..."
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-1/4"
        />

        <select
          onChange={(e) => setSort(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="">Sort Tags</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center mt-50 text-4xl">
          Loading......
        </div>
      ) : (
        filterData && (
          <div className="flex justify-center p-6 bg-gray-100">
            <div className="bg-white w-96 rounded-2xl shadow-lg p-5 space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Post #{data.id}</p>
              </div>

              <h2 className="text-xl font-semibold text-gray-800">
                {data.title}
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                {data.body}
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
                <span>❤️ {data.reactions?.likes}</span>
                <span>💔 {data.reactions?.dislikes}</span>
                <span>👀 {data.views}</span>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Post;