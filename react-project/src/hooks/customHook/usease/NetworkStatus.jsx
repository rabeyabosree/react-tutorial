import React from 'react'
import useOnlineStatus from '../useOnlineStatus'

function NetworkStatus() {
    const { online } = useOnlineStatus()
    return (
        <div>
            <h1>NetworkStatus</h1>
            <p>{online ? "online" : "offline"}</p>
        </div>
    )
}

export default NetworkStatus