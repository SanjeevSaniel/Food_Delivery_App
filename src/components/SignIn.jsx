import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const SignIn = () => {
  const [key, setKey] = useState("signin");

  const [existingAccount, setExistingAccount] = useState({
    email: "",
    password: "",
  });

  const [newAccount, setNewAccount] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleExistingChange = ({ currentTarget: input }) => {
    const account = { ...existingAccount };
    account[input.name] = input.value;
    setExistingAccount({ ...account });
  };

  const handleNewChange = ({ currentTarget: input }) => {
    const account = { ...newAccount };
    account[input.name] = input.value;
    setNewAccount({ ...account });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(existingAccount);
    console.log("Login");
  };
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register");
  };

  return (
    <div style={{ width: "40rem", margin: "auto" }}>
      <Tabs
        onSelect={(k) => setKey(k)}
        activeKey={key}
        defaultActiveKey="register"
        id="fill-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="signin" title="Sign In" className="p-5">
          <form className="row g-3" onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email ID
              </label>
              <input
                onChange={handleExistingChange}
                value={existingAccount.username}
                name="email"
                type="email"
                className="form-control"
                id="email"
                placeholder="Registered Email ID"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                onChange={handleExistingChange}
                value={existingAccount.password}
                name="password"
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </Tab>

        <Tab eventKey="register" title="Register" className="p-5">
          <form className="row g-3" onSubmit={handleRegister}>
            <div className="mb-3">
              <label htmlFor="r-name" className="form-label">
                Full Name
              </label>
              <input
                onChange={handleNewChange}
                value={newAccount.fullName}
                name="fullName"
                type="text"
                className="form-control"
                id="r-name"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="r-email" className="form-label">
                Email ID
              </label>
              <input
                onChange={handleNewChange}
                value={newAccount.email}
                name="email"
                type="email"
                className="form-control"
                id="r-email"
                placeholder="Registered Email ID"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="r-password" className="form-label">
                Password
              </label>
              <input
                onChange={handleNewChange}
                value={newAccount.password}
                name="password"
                type="password"
                className="form-control"
                id="r-password"
                placeholder="Password"
              />
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SignIn;
