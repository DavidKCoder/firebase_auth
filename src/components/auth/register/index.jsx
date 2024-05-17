import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'
import { useAuth } from "../../../context/authContext";
import Alert from "../../alert";

const Register = () => {
  const { userLoggedIn } = useAuth()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')
  const [ isRegistering, setIsRegistering ] = useState(false)
  const [ errorMessage, setErrorMessage ] = useState('')

  const onSubmit = async(e) => {
    e.preventDefault()
    if (!isRegistering) {
      setIsRegistering(true)
      try {
        await doCreateUserWithEmailAndPassword(email, password);
      } catch (err) {
        setErrorMessage("Something went wrong")
        setIsRegistering(false);
      }

    }
  }

  return (
    <>
      {userLoggedIn && ( <Navigate to={'/home'} replace={true}/> )}

      <main className="w-full h-screen flex self-center place-content-center place-items-center">
        <div className="background">
          <div className="shape"/>
          <div className="shape"/>
        </div>
        <form onSubmit={onSubmit}>
          <h3>Create a New Account</h3>

          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter email" id="email" required value={email}
                 onChange={(e) => setEmail(e.target.value)}/>

          <label htmlFor="password">Password</label>
          <input
            disabled={isRegistering}
            type="password"
            autoComplete='new-password'
            placeholder="Enter password"
            required
            value={password} onChange={(e) => {
            setPassword(e.target.value)
          }}/>

          <label htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            disabled={isRegistering}
            type="password"
            autoComplete='off'
            placeholder="Confirm password"
            required
            value={confirmPassword} onChange={(e) => {
            setConfirmPassword(e.target.value)
          }}/>
          {errorMessage && <Alert msg="error" onClose={() => setErrorMessage("")}/>}
          <button
            type="submit"
            disabled={isRegistering}
            className="btn-login"
          >
            {isRegistering ? 'Signing Up...' : 'Sign Up'}
          </button>
          <div className="pt-20">
            Already have an account? {'   '}
            <Link to={'/login'} className="text-center text-sm hover:underline font-bold">Continue</Link>
          </div>
        </form>
      </main>
    </>
  )
}

export default Register
