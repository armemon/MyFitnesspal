import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import CollapsibleExample from "./Navbar";
import BMI from "../BMI/BMI";
import FoodCaloriesCalculator from "../BMI/FoodCaloriesCalculator";




function Home(props) {
  const [user, loading ] = useAuthState(auth);
  const navigate = useNavigate();
  

    useEffect(() => {
      if (loading) return;
  
      if (!user) {
        navigate("/MyFitnesspal");
      } 
    }, [user, loading, navigate]);
  
    if (loading) {
      return <div>Loading...</div>;
    }

    

  return (
      <div>
       <CollapsibleExample user={user} {...props} />
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", marginTop: "20px"}}>
      <FoodCaloriesCalculator />
          <BMI />
         </div>

        {/* <h2>{props.values.name ? `Welcome - ${props.name}` : user.displayName ? `Welcome - ${user.displayName}` : ""}</h2> */}
      </div>
    );
  }


export default Home;
