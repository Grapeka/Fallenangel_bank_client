import React, { useState } from "react";

function LoginFrom({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  const [Member, setMember] = useState({
    Prefix: "",
    FName: "",
    LName: "",
    Phone: "",
    Gender: "",
    DOB: "",
    CitizenID: "",
    Email: "",
    Password: "",
    Address: "",
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>
          <span>Login</span>
        </h2>
        {error != "" ? <div className="error">{error}</div> : ""}

        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="Login" />
      </div>
    </form>
  );
}

export default LoginFrom;
