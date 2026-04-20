import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

const ProductDetail = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchData = async () => {
    const result = await axios.get(`https://dummyjson.com/products/${id}`);
    setData(result.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      { loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClimbingBoxLoader color="#36d7b7" size={30} />
        </div>
      ) : (
        <div>
          <h1>{data.title}</h1>
          <img src={data.thumbnail} alt={data.title} width="200" />
          <p>{data.description}</p>
          <h3>Price: ${data.price}</h3>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
