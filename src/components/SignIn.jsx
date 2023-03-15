import React, { useState } from "react";
import Input from "./Input";

const SignIn = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    const copy = { ...account };
    copy[input.name] = input.value;
    setAccount({ ...copy });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(account);
    console.log("Login");
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        label="Email ID"
        value={account.email}
        onChange={handleChange}
        placeholder="Enter your registered Email ID"
      />

      <Input
        name="password"
        type="password"
        label="Password"
        value={account.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />

      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SignIn;
