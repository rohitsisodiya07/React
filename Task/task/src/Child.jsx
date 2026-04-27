import axios from "axios";
import React, { useEffect } from "react";

const Child = ({ setData }) => {

  const fetchData = async () => {
    try {
      const result = await axios.get("https://dummyjson.com/products");

      setData(result?.data?.products || []);

    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

 return (
     <div>
        
     </div>
   )
};

export default Child;