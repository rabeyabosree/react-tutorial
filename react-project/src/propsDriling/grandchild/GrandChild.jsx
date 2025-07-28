import React from 'react'

function GrandChild({ user }) {
    return (
        <div>
            {user ? <h1>welcome {user}</h1> : <h1>avatar</h1>}
        </div>
    )
}

export default GrandChild