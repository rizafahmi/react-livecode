import React from 'react'
import { auth } from '../firebase.js'

const CurrentUser = ({user}) => {
  return (
    <div>
      <h2>Welcome, {user.displayName} - {user.email}</h2>
      <img style={{width: 64}} src={user.photoURL} />
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  )
}

export default CurrentUser
