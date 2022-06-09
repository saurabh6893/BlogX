import React from 'react'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'

function Login({ setIsAuth }) {
  let navigate = useNavigate()
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      navigate('/')
    })
  }
  return (
    <div className='flex-col m-4 text-2xl'>
      <p>Login with Google?</p>
      <button className='b-[#F47C7C] ' onClick={signInWithGoogle}>
        Login
      </button>
    </div>
  )
}

export default Login
