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
    <div>
      
        
        <button onClick={handleChange}>Change</button>
      
       <div className='flex flex-wrap gap-3 p-4'>
            {data.map((item) => (
                <div 
                    key={item.id} 
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
                        <p><b>Return Policy:</b> {item.returnPolicy}</p>
                        <p><b>Minimum Order:</b> {item.minimumOrderQuantity}</p>
                    </div>
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