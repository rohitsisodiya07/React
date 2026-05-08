import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const About = () => {

    const [data, setData] = useState([]) ;

    const answer = useSelector( (state) => state.dummy.products) ;
    console.log(">>>>>>dataUser", data);
    useEffect( () => {

        setData(answer)
    }, [answer])
    
    

  return (
    <div className='flex flex-wrap gap-5 mt-5 p-2'  >
        
        { data.map ( (item) => (

            <div key={item.id} className='border text-center p-2'>

                <p>{item.description}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <p>{item.discountPercentage}</p>
                <p>{item.rating}</p>
                <p>{item.stock}</p>

            </div>
        ))}
    </div>
  )
}

export default About