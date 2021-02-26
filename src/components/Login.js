import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const initUserCredentials = {
    username: "",
    password: "",
  };
  const [userCredentials, setUserCredentials] = useState(initUserCredentials);
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(() => {
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route at the path "/bubbles"
  });

  return (
    <div className="container">
      <h1> Welcome to the Bubble App!</h1>
      <form className="login-form">
        <label>
          username
          <input
            type="text"
            placeholder="enter a username"
            name="username"
            value={userCredentials.username}
            // onChange={handleChange}
          />
        </label>
        <label>
          password
          <input
            type="password"
            placeholder="enter a password"
            name="password"
            value={userCredentials.password}
            // onChange={handleChange}
          />
        </label>

        <button className="submitBtn"> Log In </button>
      </form>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
