import React, { useEffect } from 'react'
import axios from 'axios'

const Child = ({ sendData }) => {


    
  const fetchApi = async () => {
      const result = await axios.get("https://dummyjson.com/products");
    //   sendData(result.data.products); 
    sendData(result.data.products)
  }

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <div>
      <h2>Child Component</h2>
    </div>
  )
}

export default Child

 