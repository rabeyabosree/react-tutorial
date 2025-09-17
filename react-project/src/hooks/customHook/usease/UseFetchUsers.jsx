import React from 'react'
import useFetch from '../UseFetch'


function UseFetchUsers() {
    const { data: users, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users")
    if (loading) return <p>Loading</p>
    if (error) return <p>error..</p>
    return (
        <div>
            <h1>UseFetchUsers</h1>
            <div>
                {users?.map((user) => {
                    return <div key={user.id}>
                        <h1>{user.name}</h1>
                    </div>
                })}
            </div>
        </div>
    )
}

export default UseFetchUsers