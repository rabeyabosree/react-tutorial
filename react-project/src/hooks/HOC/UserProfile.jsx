import React from 'react'

function UserProfile({ userName }) {
    console.log(userName)
    return (
        <div>
            <h1>UserProfile</h1>
            <h2>Welcome {userName}</h2>
        </div>
    )
}

export default UserProfile