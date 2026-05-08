import React, { use, useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Tags = () => {
  const [data, setData] = useState([]);

  const answer = useSelector((state) => state.dummy.products);
  //  console.log(">>>>>>TagsData", answer)
  useEffect(() => {
    setData(answer);
  }, [answer]);

  return(
    <div className='flex flex-wrap gap-5 mt-5 p-2'  >
        
        { data.map ( (item) => (

            <div key={item.id} className='border text-center p-2'>

                {item.tags.map( (x) =>(

                    <p>{x}</p>
                ))}
            </div>
        ))}
    </div>
  )
};

export default Tags;
