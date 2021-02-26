import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const initUserCredentials = {
    username: "",
    password: "",
  };
  const [userCredentials, setUserCredentials] = useState(initUserCredentials);

 
    const handleChange = (e) => {
      setUserCredentials({
        ...userCredentials,
        [e.target.name]: e.target.value,
      });
    };
  

  const login = (e) => {
    e.preventDefault();
    if (!e.target.username || !e.target.password) {
      alert("Username or Password not valid");
    } else {
      axios
        .post("http://localhost:5000/api/login", userCredentials)
        .then((res) => {
          localStorage.setItem("token", res.data.payload);
          window.location.href = "/protected";
        })
        .catch((error) => {
          console.log("login error", error);
        });
    }
  };

  useEffect(() => {
    axios
      .delete(`http://localhost:5000/api/colors/1`, {
        headers: {
          authorization:
            "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98",
        },
      })
      .then((res) => {
        axios.get("http://localhost:5000/api/colors", {
          headers: {
            authorization: "",
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="container">
      <h1> Welcome to the Bubble App!</h1>
      <form className="login-form" onSubmit={login}>
        <label>
          username
          <input
            type="text"
            placeholder="enter a username"
            name="username"
            value={userCredentials.username}
            onChange={handleChange}
          />
        </label>
        <label>
          password
          <input
            type="password"
            placeholder="enter a password"
            name="password"
            value={userCredentials.password}
            onChange={handleChange}
          />
        </label>

        <button className="submitBtn"> Log In </button>
      </form>
    </div>
  );
};

export default Login;
