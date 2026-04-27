import React, { useEffect } from 'react'
import axios from 'axios'

const Child = ({sendData}) => {

    const fetchData = async() => {

            const result = await axios.get("https://dummyjson.com/recipes") ;
            console.log(result.data.recipes);
            sendData(result.data.recipes);

            
    }

    useEffect( () => {

            fetchData() ;
    }, [])


  return (
    <div></div>
  )
}

export default Child