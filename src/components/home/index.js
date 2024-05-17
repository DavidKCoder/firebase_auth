import React from "react";
import { useAuth } from "../../context/authContext";
import { doSignOut } from "../../firebase/auth";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { currentUser } = useAuth()

  const signOut = async(e) => {
    e.preventDefault()
    await doSignOut().then((res) => console.log(res))
  }

  return (
    <div className="wrapper">
      {currentUser ? `Hello ${
          currentUser
            .displayName ? currentUser.displayName : currentUser.email
        }, you are now logged in.`
        : <Navigate to="/" replace={true}/>}
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default Home;