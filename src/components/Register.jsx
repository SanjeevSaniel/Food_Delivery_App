import React, { useState } from "react";
import Input from "./Input";

const Register = () => {
  const [account, setAccount] = useState({
    name: "",
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
        name="name"
        type="text"
        label="Name"
        value={account.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <Input
        name="newEmail"
        type="email"
        label="Email ID"
        value={account.email}
        onChange={handleChange}
        placeholder="Enter your Email ID"
      />

      <Input
        name="newPassword"
        type="password"
        label="Password"
        value={account.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />

      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
