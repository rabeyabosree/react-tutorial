import React, { useEffect, useRef, useState } from 'react'

function AutoFocusInput() {

    const [size, setSize] = useState({ width: 0, hight: 0 })
    const autoFocusRef = useRef()
    const boxRef = useRef()

    useEffect(() => {
        autoFocusRef.current.focus()
        autoFocusRef.current.scrollIntoView({ behavior: 'smooth' })
        const hight = boxRef.current.offsetHeight;
        const width = boxRef.current.offsetWidth;
        console.log("width", width)
        console.log("hight", hight)
        setSize({ width, hight })

    }, [])


    return (
        <div>
            <input type="text" ref={autoFocusRef} />

            <div ref={boxRef} style={{ width: '300px', marginTop: '20px', height: '300px', background: 'gray-50', marginBottom: '10px', textAlign: 'center' }}>
                hi i am ddiv <br />
                my hight is {size.hight} <br />
                my width is {size.width}
            </div>
        </div>
    )
}

export default AutoFocusInput