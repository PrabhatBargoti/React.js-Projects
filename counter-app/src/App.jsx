import React from 'react'
import usecounter from './hooks/usecounter'

const App = () => {
  const {count, increase, descrease, reset} = usecounter()
  return (
    <div className='bg-[#111113] h-screen w-screen text-white'>
      <div className='flex justify-center items-center pt-70'>
        <h2 className='text-9xl'>{count}</h2>
      </div>
      <div className='flex justify-around text-2xl select-none hover:cursor-pointer pt-50'>
        <h3 onClick={increase}>Increase</h3>
        <h3 onClick={descrease}>Descrease</h3>
        <h3 onClick={reset}>Reset</h3>
      </div>
    </div>
  )
}

export default App
