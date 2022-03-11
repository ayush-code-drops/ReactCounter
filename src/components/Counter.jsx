import React, { useState } from 'react'
import Button from './Button'

function Counter() {
    const [count, setCount] = useState(0)
    
    const handleChange = (value) => { 
        value===-1&&count==0?setCount(count):setCount(count + value)
    }

    

  return (
      <div>
          <h3>Counter</h3>
          <h4>{count}</h4>
          <Button title="Add" onClick={()=>handleChange(1)} />
          <Button title="Reduce" onClick={() => handleChange(-1)} />
          <Button title="Double" onClick={()=>setCount(count*2)}/>
          
  </div>
  )
}

export default Counter