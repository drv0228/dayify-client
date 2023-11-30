import React, { useEffect, useState } from "react";
import "./LoginModal.scss";
import { Link } from "react-router-dom";
import { auth, app, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const LoginModal = ({ closeLoginModal, openRegisterModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");
  const navigate = useNavigate('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/")
        
        console.log(userCredential);
      })
      .catch((error) => {
        // console.log(error)
      });
      window.location.reload();
  }
 
  // const logout = async () => {
  //     try {
  //       await signOut(auth);
  //     } catch (err) {
  //       console.error(err);
  //     }
     
  // };

  // const googleSignIn = () => {
  //   signInWithPopup(auth, provider).then((data)=>{
  //     setValue(data.user.email)
  //     localStorage.setItem("email", data.user.email)
      
  //   })
  // }

  // useEffect(() => {
  //   setValue(localStorage.getItem('email'))
  // })


  return (
    <>
      <div className="signin-overlay">
        <div className="signin_modal">
        <button className="close-button" onClick={closeLoginModal}>
          <Link to="/" className="modal__link--login">
            {" "}
            X{" "}
          </Link>
        </button>
          <div className="sigin__container">
            <div className="signin__heading">
              <h1 className="sign-up__call">Sign In</h1>
            </div>
            <form onSubmit={signIn}>
              <div className="signing__input">
                <input
                  required
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input__field"
                />
              </div>
              <div className="signing__input">
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
                value="Sign In"
              >
                Sign In
              </button>
            </form>

            {/* <button
                onClick={logout}
                className="submit__button"
                value="Log Out"
              >
                Log Out
              </button> */}
            {/* <button
                onClick={googleSignIn}
                className="submit__button google"
                value="Sign In" onChange={closeLoginModal}
              >
                Sign In with Google
              </button> */}
            <div className="sign-up__container">
              <p className="sign-up__call">New User ?</p>
              <Link
                to={`/`}
                className="link__products"
                onClick={openRegisterModal}
                onChange={closeLoginModal}
              >
                <p className="sign-up__call"> Create an account </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
