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
    <div className='flex-col m-8 text-5xl'>
      <p className='m-4'>Login with Google?</p>
      <button
        className='m-4 bg-[#354259] text-2xl text-white px-20 rounded-2xl py-3 border-2 hover:bg-[#dfdfdf] hover:text-black'
        onClick={signInWithGoogle}
      >
        Login
      </button>
    </div>
  )
}

export default Login
