import React from 'react'
import useDarkMode from '../useDarkMode'

function ThemeToggle() {
    const [dark, serDark] = useDarkMode()
    return (
        <div>
            <h1>ThemeToggle</h1>
            <button onClick={() => serDark(!dark)}>Swecthed to {dark ? "dark" : "light"}</button>
        </div>
    )
}

export default ThemeToggle