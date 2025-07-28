import React from 'react'
import GrandChild from './../grandchild/GrandChild';

function Child({user}) {
  return (
    <div>
        <GrandChild user={user} />
    </div>
  )
}

export default Child