import React, { useState } from 'react';

const Test01 = () => {

  const answer = localStorage.getItem("result");
  const temp = JSON.parse(answer);

  const [user, setUser] = useState(temp) ;
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [percentage, setPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = {
      id,
      title,
      description,
      category,
      price,
      discountPercentage: percentage,
      rating,
      stock
    };

   setUser({
    products: [...user.products, result]
  });
   
    setId('');
    setTitle('');
    setDescription('');
    setCategory('');
    setPrice('');
    setPercentage('');
    setRating('');
    setStock('');
  };
  

  return (
    <div>
      <div className='flex justify-center'>
        <form className='mt-5 flex flex-col gap-5' onSubmit={handleSubmit}>

          <input type='number' placeholder='Enter Id'
            value={id}
            onChange={(e) => setId(e.target.value)}
            className='border-2'
          />

          <input type='text' placeholder='Enter Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2'
          />

          <input type='text' placeholder='Enter description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='border-2'
          />

          <input type='text' placeholder='Enter category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='border-2'
          />

          <input type='number' placeholder='Enter price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='border-2'
          />

          <input type='number' placeholder='Enter discount percentage'
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            className='border-2'
          />

          <input type='number' placeholder='Enter rating'
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className='border-2'
          />

          <input type='number' placeholder='Enter stock'
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className='border-2'
          />

          <button className='bg-sky-400'>Submit</button>
        </form>
      </div>

      <div>
        {user.products.map((item) => (
          <div key={item.id} className='p-3 border m-2'>
            <p>Id: {item.id}</p>
            <p>Title: {item.title}</p>
            <p>Description: {item.description}</p>
            <p>Category: {item.category}</p>
            <p>Price: {item.price}</p>
            <p>Discount: {item.discountPercentage}</p>
            <p>Rating: {item.rating}</p>
            <p>Stock: {item.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test01;