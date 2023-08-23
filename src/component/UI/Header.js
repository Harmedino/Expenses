import React from "react";
import { Link, Form, useRouteLoaderData } from "react-router-dom"; // Import Link from react-router-dom
import "./Header.css";

const Header = () => {
  const token = useRouteLoaderData("root");
  console.log(token);
  return (
    <header className="header">
      <Link to="/" className="logo">
        Expense
      </Link>
      <nav className="nav">
        <ul>
          {!token && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {!token && (
            <li>
              <Link to="/register">Signup</Link>
            </li>
          )}
          {token && (
            <li>
              <Form method="post" action="/logout">
                <button className="logout-btn">Logout</button>{" "}
              </Form>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
