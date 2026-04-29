import React from 'react'
import ApiCall from './ApiCall'

const ApiGet = () => {
  

    const {data} = ApiCall("https://dummyjson.com/products")

    console.log(data?.data?.products);
    
  return (
    <div>ApiGet</div>
  )
}

export default ApiGet