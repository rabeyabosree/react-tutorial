import React, { useState } from 'react'
import UserProfile from './UserProfile'
import WithUserName from './WithUserName';



function UserAuthen() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const EnhanceComponent = WithUserName(UserProfile)

    const userName = "Rabeya bosri"
    return (
        <div>
            <h1>HOC Demo</h1>

            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : " Login"}
            </button>

            <hr />

            <EnhanceComponent user={userName} isLoggedIn={isLoggedIn} />
        </div>
    )
}

export default UserAuthen