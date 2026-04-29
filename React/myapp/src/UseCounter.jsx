import React, { useState } from 'react'

const UseCounter = (value = 0) => {

    const [count, setCount] = useState(value) ;

    function increment (){
        setCount(count+1) ;
    }
    function decrement (){
        setCount(count-1) ;
    }
    function multiply (){
        setCount(count*2) ;
    }
    function divide (){
        setCount(count/2) ;
    }
    function reset(){
        setCount(value)
    }

  return{count, increment, decrement, multiply, divide, reset}
}

export default UseCounter