import React, { useState, useEffect, useRef } from 'react'
import '../styles/App.css';
const App = () => {

  //code here 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const inputEmailRef = useRef(null)
  const inputPasswordRef = useRef(null)
  const [userDetails, setUserDetails] = useState({})
  const handleSubmit = () => {
    if (email == '') {
      inputEmailRef.current.focus()
    }
    else if (password == '') {
      inputPasswordRef.current.focus()
    }
    else {
      setUserDetails({
        email,
        password
      })
      setEmail('')
      setPassword('')
    }

  }
  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={email} ref={inputEmailRef} onChange={(e) => setEmail(e.target.value)} /><br />
      Password
      <input id="inputPassword" type="text" value={password} ref={inputPasswordRef} onChange={(e) => setPassword(e.target.value)} /><br />
      <button id="submitButton" onClick={handleSubmit}>Submit</button><br />
      <p id="emailText">Your Email : {userDetails.email}</p>
      <p id="passwordText">Your Password : {userDetails.password}</p>

    </div>
  )
}


export default App;
