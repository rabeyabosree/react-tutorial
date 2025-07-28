import React from 'react'

function Logger() {

    // impure function
    function getting() {
        const hour = new Date().getHours()
        return hour < 12 ? "good morning" : "good evening"
    }

    let total = 0
    function add(n) {
        total += n;
        return total

    }

    const result = add(5)
    const message = getting()

    
    return (
        <div>
            {message}
            <h4>{result}</h4>
        </div>
    )
}

export default Logger




// bahirer kaj kore {sideffect} kore
// side effect mane state change kore
// output fixed kore na change kore
//impure function
