import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchApi = () => {

    const [data, setData] = useState([])
    const [toggle, setToggle] = useState(false) ;

    const fetch = async () => {

        const result = await axios.get("https://dummyjson.com/products") ;
        // console.log(">>>>>>result", result.data);
        
        setData(result.data.products)
        
      }
      
      console.log(">>>>>>data", data);
      console.log(">>>>>>toggle", toggle);
    
    const handleChange = () => {

        setToggle(!toggle) ;
    }

    useEffect( () => {

        fetch() ;

    }, [])
 

  return (
    <div className='text-center h-screen'>
      
        
        <button onClick={handleChange}>Change</button>
      
       <div className='flex flex-wrap justify-center gap-5'>
                {data.map((item) => (
                    <div key={item.id} className='bg-gray-200 w-80 p-3 rounded shadow'>
                        
                        <img 
                            src={item.thumbnail} 
                            alt={item.title}
                            className='w-full h-40 object-cover rounded'
                        />

                        <p><b>Id:</b> {item.id}</p>
                        <p><b>Title:</b> {item.title}</p>
                        <p><b>Category:</b> {item.category}</p>
                        <p><b>Price:</b> ₹{item.price}</p>
                        <p><b>Rating:</b> {item.rating}</p>
                        <p><b>Stock:</b> {item.stock}</p>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default FetchApi



 //UseEffect with Empty Dependency
    // useEffect( () => {

    //     fetch() ;
    // }, [])

    //UseEffect With No Dependency
    // useEffect( () => {

    //     fetch() ;
    // })