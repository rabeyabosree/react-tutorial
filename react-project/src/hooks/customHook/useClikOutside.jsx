import React, { useEffect, useRef } from 'react'

function useClikOutside(callback) {
    const ref = useRef()

    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback()
            }
        }

        document.addEventListener("mousedown", handleClick)
        return () => document.removeEventListener("mousedown", handleClick)
    }, [callback])

    return ref
}

export default useClikOutside