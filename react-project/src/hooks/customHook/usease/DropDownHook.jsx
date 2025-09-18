import React, { useState } from 'react'
import useClikOutside from '../useClikOutside'

function DropDownHook() {
    const [open, setOpen] = useState(false)
    const ref = useClikOutside(() => setOpen(false))

    return (
        <div className='h-24 p-8 bg-gray-100'>
            <button onClick={() => setOpen(!open)}>open menu</button>
            {open && (
                <div ref={ref} className='h-30'>
                    <p>Option 1</p>
                    <p>Option 2</p>
                </div>
            )}
        </div>
    )
}

export default DropDownHook