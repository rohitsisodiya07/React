import React, { useState } from 'react';

const Practice = ({ user }) => {

  const [users, setUsers] = useState(user);
  const [count, setCount] = useState(users.length + 1);

  const addUser = () => {
    const newUser = {
      id: count,
      name: "Rohan"
    };
    setUsers([...users, newUser]);
    setCount(count + 1);
  };


  const deleteUser = (id) => {
    const updated = users.filter((item) => item.id !== id);
    setUsers(updated);
  };

  const updateUser = (id) => {
  const updatedUsers = users.map((item) => {
    if (item.id === id) {
      return { ...item, name: "Rohit Sisodiya" };
    }
    return item;
  });

  setUsers(updatedUsers);
  alert("User Updated!!!!")
};

  return (
    <div>


      <button
        onClick={addUser}
        className='bg-green-500 text-white m-5 p-2'
      >
        Add User
      </button>



      {users.map((res) => (
        <div
          key={res.id}
          className='bg-amber-300 flex justify-center gap-3 m-2 p-2 items-center'
        >
          <p>{res.id}</p>
          <p>{res.name}</p>

          <button
            onClick={() => deleteUser(res.id)}
            className='bg-red-500 text-white m-5 p-2'
          >
            Delete
          </button>

          <button
            onClick={ () => updateUser(res.id)}
            className='bg-green-500 text-white m-5 p-2'
          >
            Update User
          </button>

        </div>
      ))}

    </div>
  );
};

export default Practice;