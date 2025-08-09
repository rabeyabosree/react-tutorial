import React, { useEffect, useRef, useState } from 'react';


// this is uncontrolled component case satate maintain by useref to access realdom outsite of react component
function ToggleTheme() {
    const [theme, setTheme] = useState("light");

    // Reference to the <body> tag
    const bodyRef = useRef(document.body);

    // Load saved theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            bodyRef.current.classList.remove("light", "dark");
            bodyRef.current.classList.add(savedTheme);
        }
    }, []);

    // Apply theme whenever it changes
    useEffect(() => {
        localStorage.setItem("theme", theme);
        bodyRef.current.classList.remove("light", "dark");
        bodyRef.current.classList.add(theme);
    }, [theme]);

    // Toggle light/dark
    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <div style={{ height: "100px" }}>
            <button onClick={toggleTheme}>
                Toggle theme
            </button>
        </div>
    );
}

export default ToggleTheme;






// import React, { useEffect, useRef, useState } from 'react'


// function ToggleTheme() {
//     const [theme, setTheme] = useState("light")

//     // access document body with useref for body theme color change
//     const bodyRef = useRef(document.body)

//     useEffect(() => {
//         const savedTheme = localStorage.getItem("theme")
//         console.log(savedTheme)
//         if (savedTheme) {
//             setTheme(savedTheme)
//             bodyRef.current.className = savedTheme
//         }
//     }, [])

//     useEffect(() => {
//         localStorage.setItem("theme", theme)
//         bodyRef.current.className = theme
//     }, [theme])

//     const toggleTheme = () => {
//         setTheme((prev) => (prev === "light" ? "dark" : "light"))
//     }
//     return (
//         <div style={{height: "100px "}}>
//             <button onClick={toggleTheme} className='dark'>
//                 Toggle theme
//             </button>
//         </div>
//     )
// }

// export default ToggleTheme