import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route path="/MyFitnesspal" element={<Login />} />
          <Route path="/MyFitnesspal/signup" element={<Signup onSignup={handleSignup} />} />
          <Route path="/MyFitnesspal/home" element={<Home values={values}/>}  />
            </Routes>
          
        
        </Router>
        
    </div>
  );
}

export default App;
