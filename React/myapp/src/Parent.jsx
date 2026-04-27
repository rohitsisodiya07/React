import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

  const [product, setProduct] = useState([])

  const handleData = (data) => {
    setProduct(data)
  }

  return (
    <div>
      <h2>Parent Component</h2>

      <Child sendData={handleData} />

      {product.map((item) => (
          <p key={item.id} className=' text-center text-xs bg-amber-200'>{item.title}</p>
        ))}
    </div>
  )
}

export default Parent