import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Merge = ({ answer }) => {

  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(answer.products || []);

  const dataFetch = async () => {
    const result = await axios.get("https://dummyjson.com/products");
    setOriginalData(result.data.products);
    setData(result.data.products);
  };

  const handleMerge = () => {
    setData([...originalData, ...value]);
  };

  const handleEven = () => {
    const evenData = [...originalData, ...value].filter(item => item.id % 2 === 0);
    console.log(evenData);
    
    setData(evenData);
  };

  const handleOdd = () => {
  const oddData = [...originalData, ...value].filter(item => item.id % 2 !== 0);
  setData(oddData);
    };

  const handleUnMerge = () => {
    setData(originalData);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div>

      <div className='flex gap-3 justify-center mt-5'>
        <button onClick={handleMerge} className='bg-sky-300 px-4 py-2 rounded'>
          Merge
        </button>

        <button onClick={handleEven} className='bg-green-300 px-4 py-2 rounded'>
          Even
        </button>

        <button onClick={handleOdd} className='bg-yellow-300 px-4 py-2 rounded'>
            Odd
        </button>

        <button onClick={handleUnMerge} className='bg-red-300 px-4 py-2 rounded'>
          UnMerge
        </button>
      </div>

      <div className='flex flex-wrap gap-3 p-4'>
        {data.map((item, index) => (
          <div
            key={index}
            className='bg-gray-200 w-72 p-3 rounded shadow border'
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className='w-full h-40 object-contain rounded'
            />

            <div>
              <p><b>Id:</b> {item.id}</p>
              <p><b>Title:</b> {item.title}</p>
              <p><b>Description:</b> {item.description}</p>
              <p><b>Category:</b> {item.category}</p>
              <p><b>Price:</b> ₹{item.price}</p>
              <p><b>Discount:</b> {item.discountPercentage}%</p>
              <p><b>Rating:</b> {item.rating}</p>
              <p><b>Stock:</b> {item.stock}</p>
              <p><b>Brand:</b> {item.brand}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Merge;