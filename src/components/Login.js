import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
    error: "",
  });
  const history = useHistory();

  const onChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", userCredentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/colors");
      })
      .catch((err) => {
        console.log(err.response);
        setUserCredentials({
          ...userCredentials,
          error: "Username or Password not valid.",
        });
      });
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form data-testid="loginForm" className="login-form" onSubmit={onSubmit}>
        <h2>Login Here</h2>
        <label>
          Username
          <input
            type="text"
            name="username"
            onChange={onChange}
            value={userCredentials.username}
            data-testid="username"
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={onChange}
            value={userCredentials.password}
            data-testid="password"
          />
        </label>
        <br></br>
        {userCredentials.error && <p>{userCredentials.error}</p>}
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
