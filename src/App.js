import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";


import "./App.css";


function App() {
  const [values, setValues] = useState("");

  const handleSignup = (values) => {
    setValues(values);
    // console.log(values)
  };


  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/Myfitness" element={<Login />} />
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          <Route path="/home" element={<Home values={values}/>}  />
            </Routes>
          
        
        </Router>
        
    </div>
  );
}

export default App;
