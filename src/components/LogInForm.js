import React from "react";
import { Link } from "react-router-dom";

export default function LogInForm() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" method="POST">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <Link to={"/users/signup"} style={{ textDecoration: "none" }}>
              <span className="link-primary">Sign Up</span>
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input type="text" className="form-control mt-1" name="username" />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input type="password" className="form-control mt-1" name="password" />
          </div>
          {/* <Link to="/"> */}
          <div className="d-grid gap-2 mt-3">
            <button className="btn pink" type="submit">
              Submit
            </button>
          </div>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
}
