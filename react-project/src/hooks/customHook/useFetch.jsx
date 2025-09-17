import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        let isMountin = true
        setLoading(true)
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (isMountin) {
                    setData(data)
                    setLoading(false)
                }
            })
            .catch((error) => {
                setError(error);
                setLoading(false)
            })
        return () => isMountin = false
    }, [url])
    return  { data, loading, error }
    
}

export default useFetch