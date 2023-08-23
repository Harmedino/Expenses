import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { Firestore } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { auth, firestore } from "../Firebase";

function RegisterPage() {
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;
      // console.log(result.user.uid);
      if (user) {
        const crendential = await setDoc(doc(firestore, "User", user.uid), {
          username,
          email,
          expense: [],
        });

        history("/login");
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="body">
      <div className="login">
        <h1>Register</h1>
        <form>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              placeholder="Enter your username"
              name="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button
            className="submit-button"
            type="submit"
            onClick={handleFormSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
