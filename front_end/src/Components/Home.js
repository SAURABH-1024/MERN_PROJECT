import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Style/Home.css"



const Home = () => {
    return (
        <>

            <header className="masthead">
                <div className="container px-4 px-lg-5 h-100">
                    <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end">
                            <h3 className="text-white font-weight-bold">HELLO EVERYBODY, I AM</h3>
                            <h1 className="text-white font-weight-bold">SAURABH AMBESANGE</h1>
                            <h4 className="text-white font-weight-bold">JUNIOR MERN STACK DEVELOPER</h4>
                            <hr className="divider" />
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <p className="text-white-75 mb-5">Dedicated
                                and efficient full stack developer with understanding of front - end
                                technologies,along with Back - end technologies, Restful web services and databases.</p>
                            <NavLink className="btn btn-primary btn-xl" to="/about"> KNOW MORE ABOUT ME </NavLink>
                        </div>
                    </div>
                </div>
            </header>







        </>
    )
};

export default Home;
