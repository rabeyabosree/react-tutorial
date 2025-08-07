import React, { useEffect, useRef } from 'react'
import WithInputLogger from '../HOC/WithInputLogger'



const Input = React.forwardRef((props, ref) => {
    const { handleChange, ...rest } = props;
    return <input type="text" ref={ref} {...rest} onChange={handleChange} />
})

const InputRefunction = WithInputLogger(Input)

function InputRef() {
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [inputRef])

    return <InputRefunction ref={inputRef} />
}

export default InputRef