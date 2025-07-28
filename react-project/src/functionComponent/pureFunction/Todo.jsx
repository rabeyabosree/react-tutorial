import React from 'react'

function Todo() {


    // pure function
    function addRain(day, hour) {
        return {
            day: day,
            hour: hour
        }
    }

    const rain1 = addRain("Monday", 10)
    const rain2 = addRain("Tuseday", 12)

    // pure function
    function capitalize(text) {
        return text.toUpperCase()
    }

    const text1 = capitalize("hello")
    return (
        <div><h1>Todo</h1>
            <h1>{rain1.day}</h1>
            <h2>{rain2.hour}</h2>
            <p>{text1}</p>
        </div>
    )
}

export default Todo

// pure function
// input same thake output same thake
// bahirer kaj kore na {sideffect} kore na
// output fixed thake