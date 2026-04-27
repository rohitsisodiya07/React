import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const ProductDetail = () => {

    const navigate = useNavigate() ;

  const [data, setData] = useState({});
 
  const { id } = useParams();
  const location = useLocation() ;
  console.log(">>>>>>location", location);
  console.log(">>>>>>location.state>>>>", location.state);
  

  const fetchData = async () => {
    const result = await axios.get(`https://dummyjson.com/recipes/${id}`);
    setData(result.data);
    
  };

    console.log(">>>>>data", data);
    
  useEffect(() => {
    fetchData();
  }, [id]);

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div>
        <div className=" text-center">
        <button onClick={handleBack} className="bg-green-500 px-2 py-2 cursor-pointer">Back</button>
        </div>
        <div className="">
          
          <div className="border-2">
            <img src={data.image} className="w-1/2 h-1/2"/>

          </div>
          {data.name}
          
          <p>{data.ingredients.map( (res) => res)}</p>
          
        </div>
     
    </div>
  );
};

export default ProductDetail;
