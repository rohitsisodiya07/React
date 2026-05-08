import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addApi } from './slice/dataSlice';

const Home = () => {

    const [data, setData] = useState([]) ;
    const dispatch = useDispatch() ;
    const fetchData = async() => {

        const result = await axios.get("https://dummyjson.com/products")
        // console.log(">>>>>>result", result.data.products);
        setData(result.data.products)   
    }
    dispatch(addApi(data))
    console.log(">>>>>>data", data);
    
    useEffect( () => {

            fetchData()
    }, [])
  return (
   <>
   <div className='flex flex-wrap gap-5 mt-5 p-2'>

        {data.map( (item) => (
            <div key={item.id} className='border text-center p-2'>

                <p>{item.id}</p>
                <p>{item.title}</p>
            </div>
        ))}

   </div>
   </>
  )
}

export default Home