import { ArrowForwardIos } from "@mui/icons-material";
import React,{useLayoutEffect} from "react";
import "./Login.css";
import { auth, provider  } from "../firebase";
import { useState  } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



    
 

    const signIn = () => {
      auth.signInWithPopup(provider).catch((e) => {
        alert(e.message);
      });
      
    };

    const fbSign = ()=>{
        window.alert("Please sign in using Google or email/passwors")
        
    }

  const handleSignIn = (e) => {
    e.preventDefault();
    

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
      })
      .catch((e) => alert(e.message));
  };

  const registerSignIn = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          window.alert("You have registered sucessfully")
        }
      })
      .catch((e) => alert(e.message));

      setEmail("");
      setPassword("")
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/archive/9/91/20170609154431%21Quora_logo_2015.svg"
            alt=""
          />
        </div>
        <div className="login__desc">
          <p>A Place to Share knowledge and better understand the world</p>
          <p style={{ color: "royalblue", fontSize: "25px" }}>Created by </p>
          <h3>Rutvik Pranami</h3>
        </div>
        <div className="login__auth">
          <div className="login__authOptions">
            <div className="login__auth__dec">
              <p>
                By continuing you indicate that you have read and agree to
                Quora's
                <span> Terms of Service </span>
                and <span>Privacy Policy</span>.
              </p>
            </div>
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p onClick={signIn}>Continue With Google</p>
            </div>
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                alt=""
              />
              <span onClick={fbSign}>Continue With Facebook</span>
            </div>
            <div className="login__authDesc">
              <p>Sign Up With Email</p>
            </div>
          </div>
          <div className="login__emailPass">
            <div className="login__label">
              <h4>Login</h4>
            </div>
            <div className="login__inputFields">
              <div className="login__inputField">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                  autoComplete="off"
                />
              </div>
              <div className="login__inputField">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="login__forgButt">
              <small>Forgot Password?</small>
              <button onClick={handleSignIn}>Login</button>
            </div>
            <button onClick={registerSignIn}>Register</button>
          </div>
        </div>
        <div className="login__lang">
          <h5 style={{fontSize:"13px"}}>New:</h5>
          <p></p>
          <p> हिन्दी </p>
          <p> ગુજરાતી</p>
          <ArrowForwardIos fontSize="small" />
        </div>
        <div className="login__footer">
          <p>About</p>
          <p>Languages</p>
          <p>Careers</p>
          <p>Businesses</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Contact</p>
          <p>&copy; Quora, Inc. 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
