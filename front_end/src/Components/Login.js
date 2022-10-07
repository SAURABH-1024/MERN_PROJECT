import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import "../Style/Login.css"


const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const data = await res.json();

    if (!data || res.status === 422 ||res.status === 404) {
      window.alert("Please Check Your Credentials")
    } else if (res.status === 400) {
      window.alert("Fill in the details ")
    }
    else {
      window.alert("Login Successfull")
      navigate("/profile")
    }
  }

  return (<>
    <div className="container">
      <div className="myCard">
        <div className="row">
          <div className="col-md-6">
            <div className="myLeftCtn">
              <form method="POST" className="myForm text-center ">
                <header>LOGIN NOW</header>

                <div className="form-group">
                  <i className="fas fa-envelope"></i>
                  <input type="email" className="myInput" defaultValue={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <i className="fas fa-lock"></i>
                  <input type="password" className="myInput" onChange={(e) => setPassword(e.target.value)} defaultValue={password} placeholder="Enter Your Password" id="password" name="password" required />
                </div>

                <input type="submit" className="butt" value="LOGIN" onClick={loginUser} />


              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="myRightCtn">
              <div className="box">
                <header>New Here?</header>
                <NavLink to="/signup" ><input type="button" className="butt_out" value="Signup" /></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
};

export default Login;
