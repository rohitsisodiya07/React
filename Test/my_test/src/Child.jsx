import React, { useEffect } from 'react'
import axios from 'axios'

const Child = ({sendData}) => {

    const fetchData = async() => {

        const result =  await axios.get('https://dummyjson.com/products') ;
        // console.log(result.data.products);
        sendData(result.data.products);
        
    }

    useEffect( () => {
        fetchData()
    }, [])
  return (
    <div>
        {/* Child */}
    </div>
  )
}

export default Child