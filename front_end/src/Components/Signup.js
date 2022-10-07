import "../Style/Signup.css"
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";



const Signup = () => {
  let Navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    password: "",
    confirmpassword: ""
  })
  let names, value
  const onChange = (e) => {
    // console.log(e);
    names = e.target.name;
    value = e.target.value;

    setUser({ ...user, [names]: value });
  }

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, number, city, password, confirmpassword } = user;


    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, number, city, password, confirmpassword
      })
    });

    const data = await res.json();


    if (!data || res.status === 400) {
      window.alert("please fill in all the details");
    }
    else if (res.status === 409) {
      window.alert("EmailId already exists");

    } else if (res.status === 422) {
      window.alert("Phone number already exists")
    }
    else if (res.status === 422 && res.status === 422) {
      window.alert(" Email and Phone number already exists");
    }
    else if (res.status === 404) {
      window.alert(" Passwords not matching");
    }
    else {
      window.alert("Registration successfull");
      console.log("Registration successfull");
      Navigate("/login")
    }
  }


  return (
    <>
      <div className="container">
        <div className="myCard">
          <div className="row">
            <div className="col-md-6">
              <div className="myLeftCtn">
                <form className="myForm text-center" method="POST" >
                  <header>Create new account</header>
                  <div className="form-group">
                    <i className="fas fa-user"></i>
                    <input type="text" className="myInput" placeholder="Enter Your Name" id="name" name="name" value={user.name} onChange={onChange} autoComplete="off" required />
                  </div>

                  <div className="form-group">
                    <i className="fas fa-envelope"></i>
                    <input type="email" className="myInput" placeholder="Enter Your Email" id="email" name="email" value={user.email} onChange={onChange} autoComplete="off" required />
                  </div>

                  <div className="form-group">
                    <i className="fas fa-user"></i>
                    <input type="number" className="myInput" placeholder="Enter Your Number" id="number" name="number" value={user.number} onChange={onChange} autoComplete="off" required />
                  </div>

                  <div className="form-group">
                    <i className="fas fa-city"></i>
                    <input type="text" className="myInput" placeholder="Enter Your City" id="city" name="city" value={user.city} onChange={onChange} autoComplete="off" required />
                  </div>

                  <div className="form-group">
                    <i className="fas fa-lock"></i>
                    <input type="password" className="myInput" placeholder="Enter Your Password" id="password" name="password" value={user.password} onChange={onChange} autoComplete="off" required />
                  </div>

                  <div className="form-group">
                    <i className="fas fa-lock"></i>
                    <input type="password" className="myInput" placeholder="Confirm Password" id="confirmpassword" name="confirmpassword" value={user.confirmpassword} onChange={onChange} autoComplete="off" required />
                  </div>
                  <input type="submit" className="butt" value="SIGNUP" onClick={postData} />


                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="myRightCtn">
                <div className="box">
                  <header>Already Registered?</header>
                  <NavLink to="/login" ><input type="button" className="butt_out" value="Login" /></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;