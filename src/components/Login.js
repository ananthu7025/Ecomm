import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="body">
        <div class="image"></div>
        <div class="sign-in">
          <h1>Sign In</h1>
          <form>
            {error && <Alert variant="danger">{error}</Alert>}
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="input"
              type="email"
              placeholder="Username"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="input"
              type="password"
              placeholder="Password"
            />
            <a className="a" href="#">
              Forgot password?
            </a>
            <input
              onClick={handleSubmit}
              className="input"
              type="submit"
              value="Sign In"
            />
            <Link to="/signup">
              {" "}
              <a className="a">New User? Signup</a>
            </Link>
            <input
              onClick={handleGoogleSignIn}
              className="input"
              type="submit"
              value="Sign In With Google"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
