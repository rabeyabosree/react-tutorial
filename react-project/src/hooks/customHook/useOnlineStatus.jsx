import React, { useEffect, useState } from 'react'

function useOnlineStatus() {
    const [online, setOnline] = useState(navigator.onLine)

    useEffect(()=> {
        const updateOnline = ()=> setOnline(navigator.onLine) 
        window.addEventListener("online", updateOnline)
        window.addEventListener("offline", updateOnline)

        return ()=>{
            window.removeEventListener("online", updateOnline)
            window.removeEventListener("offline", updateOnline)
        }
    }, [])
  return online
}

export default useOnlineStatus