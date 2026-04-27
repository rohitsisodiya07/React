import React, { useEffect, useEffectEvent, useState } from 'react'
import axios from 'axios';

const Event = () => {

        const [toggle, setToggle] = useState(true)
        console.log(">>>>>>Toggle", toggle);
        
    const fetchData = useEffectEvent( () => {

            const result = axios.get("https://dummyjson.com/products").then( (res) => res.data)
            console.log("Hello Event");
        
    })
    console.log("Hello Boss!!!"); ;

    useEffect( () => {

            fetchData() ;
    }, [])
    
    const handleClick = () => {

        setToggle(!toggle)
    }

  return (
    <div>
        
        <button
        className="bg-green-500 px-4 py-2 rounded text-white cursor-pointer"
        onClick={handleCick}> Toggle</button>
    </div>
  )
}

export default Event