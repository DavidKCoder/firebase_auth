import React, { useState } from "react";
import { useAuth } from "../../../context/authContext";
import { Link, Navigate } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../../firebase/auth";
import { authErrors } from "../../errors";
import Alert from "../../alert";

const Login = () => {
  const { userLoggedIn } = useAuth();

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ isSigningIn, setIsSigningIn ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState("");

  const onSubmit = async(e) => {
    e.preventDefault()
    if (!isSigningIn) {
      await doSignInWithEmailAndPassword(email, password)
        .then(( (e) => setIsSigningIn(true) ))
        .catch((error) => {
          setIsSigningIn(false)
          let errorCode = error.code;
          setErrorMessage(authErrors[errorCode])
        })
    }
  }

  const onGoogleSignIn = (e) => {
    e.preventDefault()
    if (!isSigningIn) {
      setIsSigningIn(true)
      doSignInWithGoogle().catch(err => {
        setIsSigningIn(false)
      })
    }
  }


  return (
    <>
      {userLoggedIn && ( <Navigate to={"/home"} replace={true}/> )}
      <div className="background">
        <div className="shape"/>
        <div className="shape"/>
      </div>
      <form onSubmit={onSubmit}>
        <h3>Login</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-login">Log In</button>
        <div className="center">
          <p>
            Don't have an account?
            <Link to={'/register'}> Sign up </Link>
          </p>
          <div className='flex flex-row text-center w-full'>
            <span>or</span>
          </div>
        </div>
        <div className="social" onClick={onGoogleSignIn}>
          <button formAction="https://www.youtube.com/watch?v=Zr4JwPb99qU" className="googleSignIn">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/G-on-white.svg" alt="Google logo"/>
            <span className="googleSignIn__text">Sign in with Google</span>
          </button>
        </div>
        {errorMessage && <Alert msg={errorMessage} onClose={() => setErrorMessage("")}/>}
      </form>
    </>
  )
}

export default Login;