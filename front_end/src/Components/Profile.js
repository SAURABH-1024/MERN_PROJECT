import React from 'react'
import profile from "../assets/img/portfolio/fullsize/prfile.jpg"
import "../Style/about.css";



const Profile = () => {
  return (
    <section id="about" className="about">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>About</h2>
      </div>

      <div className="row" id="row10">
        <div id="img-profile" className="col-lg-4">
          <img src={profile} className="img-fluid" alt="..." />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content">
          <h3 id="job-title" >MERN STACK DEVELOPER.</h3>
          <p id="title-description" className="fst-italic">
            Dedicated
            and efficient full stack developer with understanding of front - end
            technologies,along with Back - end technologies, Restful web services and databases.
          </p>
          <div id="details" className="row">
            <div className="col-lg-6">
              <ul id="li-items-1">
                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>10 Dec 1996</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>8766691181</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Pune, IND</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.saurabh1.com</span></li>
              </ul>
            </div>
            <div id="li-item" className="col-lg-6">
              <ul id="li-items-2" > 
                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachleor's</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Work:</strong> <span>Intern</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>workmail7746@gmail.com</span></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>

  )
}

export default Profile