import React from 'react'

function MiniCalculator() {

    // this is a pure function component

    function sum(a, b) { return a + b }
    function sub(a, b) { return a - b }

    const jum = sub(9, 7)
    const lam = sum(5, 7)

    return (
        <div>
            <h1>Mini Calculator</h1>
            <p>sum of a and b is: {jum}</p>
            <p>sub of a and b is: {lam}</p>
        </div>
    )
}

export default MiniCalculator