import React, { useState } from "react";
import "./LoginModal.scss"
import { auth, app } from "../firebase"
import { useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth"

const Login = () => {
     
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const Navigate = useNavigate('');

      const Register = (e) => 
         e.preventDefault();
    //   const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate("/login")
          // Signed up
          const user = userCredential.user;
          // ...
          console.log( userCredential );
        })
        .catch((error) => {
            
             const errorCode = error.code;
          const errorMessage = error.message;
        });

    return (
       
        <>
        <div className="signin-overlay">
      <div className="signin_modal">
            <div className="signin__heading">
                <h1><strong>Register</strong></h1>
                <p>Already a user?<span><a href="/login">Log in</a></span></p>
            </div>
            <form onSubmit={Register}>
                <div className="signing__input">
                
                  <input required type="email" placeholder="Enter your email"  value={email} onChange = {(e) => setEmail(e.target.value)} className="input__field" />

                </div>
                <div className="signing__input">
                     
                    <input required type="password" placeholder="Enter your password" value={password}  onChange = {(e) => setPassword(e.target.value)} className="input__field" />
                    </div>

                    <button type="submit" name="submit" className="submit__button" value="Sign In">Submit</button>
            </form>
        </div>
        </div>
        </>
    );
};

export default Login;