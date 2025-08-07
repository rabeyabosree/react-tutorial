import React, { forwardRef } from 'react'

function WithInputLogger(WrappedComponent) {
    const InputRefunction = forwardRef((props, ref) => {
        const handleChange = (e) => {
            console.log("user typing", e.target.value)
        }

        return <WrappedComponent {...props} ref={ref} handleChange={handleChange} />
    
    })

    return InputRefunction

        
}

export default WithInputLogger