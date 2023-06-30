import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { authToken } from "./reduxData/slices/authSlices";
const Login = () => {
  const dispatch = useDispatch()
  const getInitialState = () => {
    const value = "N/A";
    return value;
  };
  const navigat = useNavigate();
  const [user, setUser] = useState({});
  const [value, setValue] = useState(getInitialState);

  const handleSelect = (e) => {
    setValue(e.target.value);
  };
 
  const handleSubmit = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(user);

    if ("Super Admin" === value) {
      if (user.userEmail === "super" && user.password === "12345") {
        navigat("/dashboard");
      }
    } else if ("Client" === value) {
      if (user.userEmail === "Client" && user.password === "12345") {
        navigat("/dashboard");
      }
    } else if ("coordinator" === value) {
      if (user.userEmail === "coordinator" && user.password === "12345") {
        navigat("/dashboard");
      }
    } else if ("Admin" === value) {
      if (user.userEmail === "user" && user.password === "12345") {
        navigat("/dashboard");
      }
    }
    dispatch(authToken(user))
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="container login-cont p-4 mt-5 ">
              <form className="form-group" action="" onSubmit={submit}>
                <div className="d-flex">
                  <p className="ms-auto">
                    {" "}
                    You selected <span className="text-danger">{value} </span>
                  </p>
                </div>

                <div className="text-center mt-5">
                  <select value={value} onChange={handleSelect}>
                    {/* className="form-select" */}
                    <option value="N/A" > User Type</option>
                    <option value="Super Admin">Super Admin</option>
                    <option value="Admin"> Admin</option>
                    <option value="coordinator">Risk Coordinator</option>
                    <option value="Client">Client</option>
                  </select>
                </div>
                <div className="mt-5">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="userEmail"
                    onChange={handleSubmit}
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={handleSubmit}
                    name="password"
                  />
                </div>

                <div className="text-center">
                  <button className="login-btn mt-3">Login</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
