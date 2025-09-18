import React, { useEffect, useState } from 'react'

function useDarkMode() {
    const [dark, setDark] = useState(()=> {
      return  localStorage.getItem("theme") === "dark"
    })

    useEffect(()=>{
        document.body.className = dark ? "dark": "light"
        localStorage.setItem("theme", dark ? "dark" : "light")

    },[dark])
  return [dark , setDark]
}

export default useDarkMode