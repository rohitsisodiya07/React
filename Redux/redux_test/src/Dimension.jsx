import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Dimension = () => {
  const [data, setData] = useState([]);

  const answer = useSelector((state) => state.dummy.products);
  console.log(">>>>>>dataUser", data);
  useEffect(() => {
    setData(answer);
  }, [answer]);


  return(
   <div className='flex flex-wrap gap-5 mt-5 p-2'  >
        
        { data.map ( (item) => (

            <div key={item.id} className='border text-center p-2'>

              <p> {item.dimensions.width}</p>
               <p>{item.dimensions.height}</p>
               <p>{item.dimensions.depth}</p>
            </div>
        ))}
    </div>
  )
};

export default Dimension;
