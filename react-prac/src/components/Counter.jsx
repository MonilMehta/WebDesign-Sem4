import React from 'react'
import {useState} from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)
    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        if(count>0)
            setCount(count-1)
        else{
            setCount(0)
            alert("Count cannot be negative")
        }
    }

  return (
    <div>
        <h1 style={{color:'white'}}>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}  style={{marginLeft:'20px'}}>Decrement</button> 
    </div>
  )
}

export default Counter
