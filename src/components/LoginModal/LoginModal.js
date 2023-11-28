import React, { useState } from "react";
import "./LoginModal.scss"
import { auth, app } from "../firebase"
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {
     
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const navigate = useNavigate('');

      const signIn = (e) => 
         e.preventDefault();
    //   const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate("/")
          // Signed in 
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
                <h1><strong>Sign In</strong></h1>
                <p>New User?<span><a href="signup">Create an account</a></span></p>
            </div>
            <form onSubmit={SignIn}>
                <div className="signing__input">
                
                  <input type="email" placeholder="Enter your email"  value={email} onChange = {(e) => setEmail(e.target.value)} className="input__field" />

                </div>
                <div className="signing__input">
                     
                    <input type="password" placeholder="Enter your password" value={password}  onChange = {(e) => setPassword(e.target.value)} className="input__field" />
                    </div>

                    <button type="submit" name="submit" className="submit__button" value="Sign In">Sign In</button>
            </form>
        </div>
        </div>
        </>
    );
};

export default Login;