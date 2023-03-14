import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const SignIn = () => {
  const [key, setKey] = useState("signin");

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
          <form className="row g-3">
            <div className="mb-3">
              <label for="email" className="form-label">
                Email ID
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Registered Email ID"
              />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </Tab>

        <Tab eventKey="register" title="Register" className="p-5">
          <form className="row g-3">
            <div className="mb-3">
              <label for="r-name" className="form-label">
                Full Name
              </label>
              <input
                type="email"
                className="form-control"
                id="r-name"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-3">
              <label for="r-email" className="form-label">
                Email ID
              </label>
              <input
                type="email"
                className="form-control"
                id="r-email"
                placeholder="Registered Email ID"
              />
            </div>
            <div className="mb-3">
              <label for="r-password" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="r-password"
                placeholder="Password"
              />
            </div>

            <div class="col-12">
              <button type="submit" class="btn btn-primary">
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
