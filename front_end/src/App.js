import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import About from './Components/About';
import Profile from './Components/Profile';
import Error from './Components/Error';
import "./Style/style.css"
import "./Style/Signup.css"
// import Logout from './Components/Logout';



const App = () => {
  return (
    <><Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>

    </>
  );
};

export default App;
