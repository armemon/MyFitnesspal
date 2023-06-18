import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, GoogleAuthProvider,
  signInWithPopup} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

import styles from "./Login.module.css";

function Login() {
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) {
      navigate("/MyFitnesspal/home");
    }
  }, [user, loading]);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/MyFitnesspal/home")
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  const signInWithGoogle = async () => {
    const res = await signInWithPopup(auth, googleProvider)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        // await updateProfile(user, {
        //   uid: user.uid,
        //   displayName: user.displayName,
        //   authProvider: "google",
        //   email: user.email,
        // });
        navigate("/MyFitnesspal/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <img src="https://raw.githubusercontent.com/armemon/MyFitnesspal/gh-pages/myfitness.png" alt="logo" className={styles.logo } />
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          type="email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          type="password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <button className={styles.logingoogle} onClick={signInWithGoogle}>
          Login with <img width="26" height="26" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
        </button>
          <p>
            <span>
          <Link to="/MyFitnesspal/reset">Forgot Password?</Link>
            </span>
          </p>
          <p>
            Don't have an Account?{" "}
            <span>
              <Link to="/MyFitnesspal/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
