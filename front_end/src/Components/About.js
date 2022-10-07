import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom"
// import "../Style/about.css";
// import profile from "../assets/img/portfolio/fullsize/prfile.jpg"


const About = () => {
  let navigate = useNavigate()
  const callAboutPage = async () => {
  try {
    const res = await fetch("/about", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type" : "application/json"
      },
      credentials:"include"
    })

    const data = await res.json();
    console.log(data);

    
    
    if( !res.status === 200 ||!data) {
      const error = new Error(res.error)
      throw error
    }

  } catch (error) {
    console.log("not working");
    navigate("/login")

  }
}
 
  useEffect(() => {
    callAboutPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  
  return (
    <>
<h1>Login to access the details</h1>
    </>
  )
}




export default About;


//  {/* <!-- ======= About Section ======= --> */}
//  <section id="about" className="about">
//  <div className="container" data-aos="fade-up">

//    <div className="section-title">
//      <h2>About</h2>
//    </div>

//    <div className="row" id="row10">
//      <div id="img-profile" className="col-lg-4">
//        <img src={profile} className="img-fluid" alt="..." />
//      </div>
//      <div className="col-lg-8 pt-4 pt-lg-0 content">
//        <h3 id="job-title" >MERN STACK DEVELOPER.</h3>
//        <p id="title-description" className="fst-italic">
//          Dedicated
//          and efficient full stack developer with understanding of front - end
//          technologies,along with Back - end technologies, Restful web services and databases.
//        </p>
//        <div id="details" className="row">
//          <div className="col-lg-6">
//            <ul id="li-items-1">
//              <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
//              <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
//              <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
//              <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
//            </ul>
//          </div>
//          <div id="li-item" className="col-lg-6">
//            <ul id="li-items-2" > 
//              <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
//              <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
//              <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
//              <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
//            </ul>
//          </div>
//        </div>

//      </div>
//    </div>

//  </div>
// </section>

// {/* <!-- End Skills Section --> */}