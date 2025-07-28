import React from 'react'

function Total({item}) {
    const totaitem = item.length
  return (
    <div>
        <h1>{totaitem}</h1>
    </div>
  )
}

export default Total