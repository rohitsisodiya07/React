import { useEffect, useState } from "react";
import axios from "axios";

const ApiCall = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(url);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  return { data };
};

export default ApiCall;