import React, { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import "./Login.css";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
      setIsLoading(false);
      setError(null); // Clear any previous error
      navigate("/home");
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="body">
      <div className="login">
        <h1 className="">Login</h1>
        <form>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="johndoe@gmail.com"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              placeholder="********"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button
            className="submit-button"
            onClick={handleFormSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
