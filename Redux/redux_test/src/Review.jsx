import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Review = () => {
  const [data, setData] = useState([]);

  const answer = useSelector((state) => state.dummy.products);
  console.log(">>>>>>dataUser", data);
  useEffect(() => {
    setData(answer);
  }, [answer]);
  return (
    <div className="flex flex-wrap gap-5 mt-5 p-2">
      {data.map((item) => (
        <div key={item.id} className="border text-center p-2">
          {item.reviews.map((x) => (
            <div className="border text-center">
              <p>{x.rating}</p>
              <p>{x.comment}</p>
              <p>{x.date}</p>
              <p>{x.reviewerName}</p>
              <p>{x.reviewerEmail}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Review;
