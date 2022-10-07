import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';
import "../Style/navbar.css"
import "../Style/Home.css"



const Navbar = () => {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            
            <NavLink className="navbar-brand" to="/"><h1 id='logo'>MEETME</h1></NavLink>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto my-2 my-lg-0">
                    <NavLink className="nav-item nav-link active " to="/">Home <span className="sr-only">(current)</span></NavLink>
                    <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                    <NavLink  className="nav-item nav-link" to="/contact">Contact</NavLink>
                    <NavLink  className="nav-item nav-link" to="/login">Login</NavLink>
                    <NavLink className="nav-item nav-link" to="/signup">SignUp</NavLink>
                    <NavLink  className="nav-item nav-link" to="/logout">Logout</NavLink>
                    
                </div>
            </div>
        </nav>
    </>);
};

export default Navbar;

