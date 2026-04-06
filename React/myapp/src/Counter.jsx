import React, {useState} from 'react'

const Counter = () => {

    let initial = 10 ;
    const [count, setCount] = useState(initial)

    function increment(){

        if( count + 2 > 50 ){
            alert("Addition is More Than 50!!") ;
            setCount(initial) ;
            return ;
        }
        setCount(count+2) ;
    }

    function decrement(){

        if( count - 2 < 0){
            alert("Substraction is Less Than 0!!") ;
            setCount(initial) ;
            return ;
        }
        setCount(count-2) ;
    }

    function multiply(){

        if( count * 2 > 50){
            alert("Multiplication is Greater than 50!!") ;
            setCount(initial) ;
            return ;
        }
        setCount(count*2) ;
    }

    function divide(){

        if( count / 2 < 0){
            alert("Dividation is Less than 0") ;
            setCount(initial) ;
            return ;
        }
        setCount(count/2) ;
    }
  return (
    <div className='bg-gray-500 h-screen text-white text-center '>
       
        <h1 className='pt-5 text-3xl font-bold'>Count : {count}</h1>
        <div className='flex flex-col items-center'>
        <button type="button" onClick={increment} className=' m-2 w-fit text-6xl'>+</button>
        <button type="button" onClick={decrement} className=' m-2 w-fit text-6xl'>-</button>
        <button type="button" onClick={multiply} className=' m-2 w-fit text-6xl'>*</button>
        <button type="button" onClick={divide} className='m-2 w-fit text-6xl'>/</button>
        </div>

    </div>
  )
}

export default Counter