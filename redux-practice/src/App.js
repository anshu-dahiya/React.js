import React, { useState } from 'react'

const App = () => {

  const [count,setCount] = useState(0)

  const incr = () => {
    setCount(count+1);
  }

  const decr = () => {
    setCount(count-1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incr}>+</button>
      <br/>
      <button onClick={decr}>-</button>
    </div>
  )
}

export default App