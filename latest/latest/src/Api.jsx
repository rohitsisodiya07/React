import React from "react";
import { useSelector } from "react-redux";

const Api = () => {

  const userApi = useSelector(
    (state) => state.signup.products
  );

  console.log(">>>>>>>>api", userApi);

  return (
    <div>
      {userApi.map((item) => (
        <h2 key={item.id}>{item.name}</h2>
      ))}
    </div>
  );
};

export default Api;