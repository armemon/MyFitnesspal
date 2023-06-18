import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { sendPasswordResetEmail } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

import styles from "./Signup.module.css";

function Reset() {
  const navigate = useNavigate();
  const [user, loading ] = useAuthState(auth);
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (loading) return;
    if (user) {
      navigate("/MyFitnesspal/home");
    }
  }, [user, loading]);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = async() => {
    if (!email ) {
      setErrorMsg("Write your email");
      return;
    }
    setErrorMsg("");
    
    setSubmitButtonDisabled(true);
    sendPasswordResetEmail(auth, email)           
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        alert("Password reset link sent!");
        setErrorMsg("Password reset link sent!");
        navigate("/MyFitnesspal");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
      <img src="https://raw.githubusercontent.com/armemon/MyFitnesspal/gh-pages/myfitness.png" alt="logo" className={styles.logo } />

        <h1 className={styles.heading}>Reset Password</h1>
        <InputControl
          label="Email"
          placeholder="Enter email address"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
          Send Password Reset Email
          </button>
          <p>
            Go to Login Page?{" "}
            <span>
              <Link to="/MyFitnesspal">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reset;
