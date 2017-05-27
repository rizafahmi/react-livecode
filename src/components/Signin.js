import React from 'react'
import { auth, githubAuthProvider } from '../firebase.js'

const Signin = (props) => {
  return (
    <button
      onClick={() => auth.signInWithPopup(githubAuthProvider)}
    >Sign In</button>
  )
}

export default Signin
