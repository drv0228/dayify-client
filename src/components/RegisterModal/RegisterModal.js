import React, { useState } from "react";
import "./RegisterModal.scss";
import { Link } from "react-router-dom";
import { auth, app, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const RegisterModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate('');

  console.log(auth?.currentUser?.email);

  const Register = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
    window.location.reload();
  //   await createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     navigate("/")

  //     // console.log(userCredential);
  //   })
  //   .catch((error) => {
  //   console.log(error);
  // })
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <>
      <div className="signup-overlay">
        <div className="signup_modal">
          <div className="signup__container ">
            <div className="signup__heading">
              <h1 className="sign-in__call">Register</h1>
            </div>
            <form onSubmit={Register}>
              <div className="signup__input">
                <input
                  required
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input__field"
                />
              </div>
              <div className="signup__input">
                <input
                  required
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input__field"
                />
              </div>

              <button
                type="submit"
                name="submit"
                className="submit__button"
                value="Sign up"
              >
                Submit
              </button>
            </form>
            <button
              onClick={signInWithGoogle}
              className="submit__button"
              value="Sign Up"
            >
              Register with Google
            </button>
            {/* <div className="sign-in__container">
              <p className="sign-in__call">Already a user ?</p>
              <Link
                to={`/`}
                className="link__products"
                onClick={openLoginModal}
              >
                <p className="sign-in__call"> Log in </p>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterModal;
