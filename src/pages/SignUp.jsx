import React from 'react'
import './SignUp.css'
import Button from '../components/Button';
const SigninPage = () => {
  return (
    <div className="sign-page">
      <form className="sign-form">
        <h1>Sign Up Page</h1>
        <label>Name:</label>
        <input type="text" placeholder="Enter Username" required />
        <br />
        <label>Email:</label>
        <input type="email" placeholder="Enter email" required />
        <br />
        <label>Password:</label>
        <input type="password" placeholder="Enter Password" required />
        <br />
        <Button text="Submit"/>
      </form>
    </div>
  )
}

export default SigninPage