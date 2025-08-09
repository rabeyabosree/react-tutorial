import React, { useEffect, useState } from 'react'

function ComplimentGenerator() {

    // the arrray of compliments data
    const compliments = [
        "You are amazing",
        "You have a great smile",
        "You are so talented",
        "You light up the room",
        "You are a fantastic freind",
        "Your creativity is inspiring"
    ]

    // manage the compliment data with usestate hook thats way called this controll component
    const [compliment, setCompliment] = useState("")

    // useeffect with emty dependency its render only with componentdidmount
    useEffect(() => {
        setCompliment("Click the button to get a compliment")
    }, [])

    // generate random compliment with math.random and handiling with onclick event
    const generateCompliment = () => {
        const randomIndex = Math.random() * compliments.length
        setCompliment(compliments[randomIndex])
    }
    return (
        <div>
            <h1>ComplimentGenerator</h1>
            <p>{compliment}</p>
            <button onClick={generateCompliment}>Give me a compliment</button>
        </div>
    )
}

export default ComplimentGenerator