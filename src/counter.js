import React, { useState } from 'react'


const Counter = (props)=>{
const [count,setCount] = useState(0);

const increment = ()=>{
    setCount(count+1);
}


return(
    <div className='CounterComponent'>
        <h1 className='showcount'>Count : {count}  {props.name}</h1>

          <button onClick={increment}>increment </button>

    </div>
)


}


export default Counter;