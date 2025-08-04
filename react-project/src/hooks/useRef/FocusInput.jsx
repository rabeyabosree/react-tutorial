import React, { useEffect, useRef, useState } from 'react'

function FocusInput() {
    const [count, setCount] = useState(0)
    const inputRef = useRef()

    // DOM eleemnt access with useRef
    const handleFocus = () => {
        inputRef.current.focus()
    }

    // mutable value store with useRef
    const prevCount = useRef()

    useEffect(()=> {
        prevCount.current = count
    }, count)


  return (
    <div>
        <input type="text" placeholder='Type here...' ref={inputRef} />
        <button onClick={handleFocus}>Focus</button>

        <h1> cuurent: {count}</h1>
        <h1>prev : {prevCount.current}</h1>

        <button onClick={()=> setCount(count + 1)}>+</button>


    </div>
  )
}

export default FocusInput