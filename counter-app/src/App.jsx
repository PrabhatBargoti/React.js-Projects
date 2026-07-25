import { useState } from "react"
import React from 'react'

const App = () => {
  const [count, setcount] = useState(0)
  
  const increase = ()=>{
    setcount(count => count + 1)
  }
  const decrease = ()=>{
    if (count > 0) {
      setcount(count => count - 1)
    }
  }
  const reset = ()=>{
    setcount(0)
  }
  return (
    <div>
      <h2>{count}</h2>
      <h3 onClick={increase}>inc</h3>
      <h3 onClick={decrease}>dec</h3>
      <h3 onClick={reset}>res</h3>
    </div>
  )
}

export default App
