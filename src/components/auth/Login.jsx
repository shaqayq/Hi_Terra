import React, { useState, useEffect } from "react";
import "../../style/auth/login.css";
import { useLoginMutation } from "../../features/apiSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { isError, error, isSuccess }] = useLoginMutation();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUser({ username, password });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
     navigate('/') 
    }
  }, [isSuccess, navigate]);
  return (
    <>
      <div className="login-container">
        <h1 id="login-header">Welcome,Create Your Account</h1>

        <p id="login-message">It is our great pleasure to have you on board!</p>
        <div className="login-form-container">
        {isError && <p id="login-error">Error: {JSON.stringify(error.data.message)}</p>}
          <form onSubmit={handleSubmit} method="post">
            <div className="input-container">
              <input
                type="text"
                id="username"
                placeholder="Enter your Email"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                id="password"
                placeholder="Enter you password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            {isSuccess && <redirect to="/home" />}

            <div className="button-container">
              <button className="login-btn" type="submit">
                Login
              </button>

              <p>
                Don't have an account?{" "}
                <a id="link" href="#">
                  Signup
                </a>
              </p>
              <button className="login-btn">Signin with whatsup</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
