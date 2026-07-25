import React from 'react'
import usecounter from './hooks/usecounter'

const App = () => {
  const {count, increase, descrease, reset} = usecounter()
  return (
    <div>
      <h2>{count}</h2>
      <h3 onClick={increase}>inc</h3>
      <h3 onClick={descrease}>dec</h3>
      <h3 onClick={reset}>res</h3>
    </div>
  )
}

export default App
