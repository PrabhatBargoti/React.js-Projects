import { useState } from "react"

const usecounter = ()=>{
    const [count, setcount] = useState(0)

    const increase = ()=>{
        setcount(count + 1)
    }
    const descrease = ()=>{
        setcount(count - 1)
    }
    const reset = ()=>{
        setcount(0)
    }

    return {
        count,
        increase,
        descrease,
        reset
    }
}

export default usecounter
