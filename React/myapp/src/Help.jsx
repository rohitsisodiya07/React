import axios from 'axios'
import React from 'react'
import { use } from 'react'

const productDetail = axios.get('https://fakestoreapi.com/products').then( (res) => res.data)
const Help = () => {

    const data =   use(productDetail) ;
    console.log(">>>>>>>data", data);
    
  return (
    <div>
        {data.map( (item) => (
            <div key={item.id}>
                <p>{item.title}</p>
            </div>
        ))}

    </div>
  )
}

export default Help