import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { useFirebase } from "../Context/FirebaseContext";
import LoadingOverlay from "./LoadingOverlay"; // Importing the LoadingOverlay component

const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  transition: all 0.6s ease-in-out;
  left: 0;
  height: 100%;
  opacity: 1;
  width: 50%;
  z-index: 2;
  ${(props) =>
    props.signingin !== true
      ? `transform: translateY(-100%); opacity: 0;`
      : null}
`;

const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) =>
    props.signingin !== true ? `transform: translateY(100%); opacity:0` : null}
`;



const Login = () => {
  const navigate = useNavigate();
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp, logIn, googleLogin } = useFirebase();
  const [isHovered, setIsHovered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if authentication token exists in session storage or local storage
    const authToken = localStorage.getItem('authToken'); // or sessionStorage

    if (authToken) {
      // If authentication token exists, consider user logged in
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home"); // Redirect to home page if logged in
    }
  }, [isLoggedIn, navigate]);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleToggleForms = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
    setEmail("");
    setPassword("");
  };

  const handleLoginWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await googleLogin();
      navigate("/home");
      toast.success("Logged in successfully!");
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await logIn(email, password);
      navigate("/home");
      toast.success("Logged in successfully!");
      setIsLoggedIn(true);
    } catch (error) {
      const errorCode = error.code;
      switch (errorCode) {
        case "auth/invalid-email":
          toast.error("Invalid Email. Please try again.");
          break;
        case "auth/invalid-credential":
          toast.error("Invalid Credentials. Please try again.");
          break;
        case "auth/missing-password":
          toast.error("Missing Credentials. Please try again.");
          break;
        default:
          toast.error("An error occurred. Please try again later.");
          break;
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      toast.success("User registered successfully!");
      setEmail("");
      setPassword("");
      handleToggleForms();
      setIsLoggedIn(true);
    } catch (error) {
      const errorCode = error.code;
      switch (errorCode) {
        case "auth/invalid-email":
          toast.error("Invalid Email. Please try again.");
          break;
        case "auth/invalid-credential":
          toast.error("Invalid Credentials. Please try again.");
          break;
        case "auth/missing-password":
          toast.error("Missing Credentials. Please try again.");
          break;
        case "auth/weak-password":
          toast.error(
            "Password should be at least 6 characters. Please try again."
          );
          break;
        case "auth/email-already-in-use":
          toast.error("Email already registered. Please Log In.");
          handleToggleForms();
          break;
        default:
          toast.error("An error occurred. Please try again later.");
          break;
      }
      console.log(error);
    }
  };

  return (
    <div
      style={{
        position: "relative", // Ensure position is relative for absolute positioning of overlay
        maxWidth: "100%",
        height: "100vh",
        display: "flex",
        flexBasis: "100%",
        flexDirection: "column",
        textAlign: "left",
        background:
          "linear-gradient(90deg, rgba(15,46,173,0.8646052170868348) 0%, rgba(0,140,255,0.8982186624649859) 66%)",
      }}
    >
      {/* Dark overlay when loading */}
      <LoadingOverlay loading={loading} />{" "}
      {/* Using the LoadingOverlay component */}
      <div
        style={{
          width: "100%",
          height: "60px",
          boxShadow: "10px 0px 8px rgba(0,0,0,0.2)",
          display: "flex",
          alignItems: "center",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <p
          style={{
            paddingLeft: "30px",
            paddingTop: "15px",
            fontFamily: "monospace",
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Room Connect
        </p>
      </div>
      <div
        style={{
          height: "100vh",
          width: "100%",
          margin: "auto auto",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            height: "65vh",
            width: "50vw",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            margin: "auto auto",
            justifyContent: "center",
            alignContent: "center",
            background: "transparent",
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "30px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Discover Your Ideal Haven: Where Hostel Life Meets Comfort,
            Community, and Convenience.
          </p>
        </div>

        <div
          style={{
            overflow: "hidden",
            height: "70vh",
            width: "30vw",
            borderRadius: "20px",
            margin: "auto auto",
            background: "white",
            position: "relative",
            boxShadow: "10px 10px 8px rgba(0,0,0,0.2)",
          }}
        >
          <SignInContainer signingin={!isLoginFormVisible}>
            <div
              style={{
                height: "70vh",
                width: "30vw",
                border: "1px solid lightgray",
                borderRadius: "20px",
                boxShadow: "10px 10px 8px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                padding: "30px",
                margin: "auto auto",
                background: "white",
                position: "absolute",
                transition: "all 0.6s ease-in-out",
              }}
              id="login"
              className="form-wrapper sign-in"
            >
              <h1>Login</h1>

              <p>Hi, Welcome back</p>

              <button
                style={{
                  width: "100%",
                  alignSelf: "center",
                  transition: "fill 0.3s",
                }}
                className="btn btn-outline-success"
                type="button"
                onClick={handleLoginWithGoogle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill={isHovered ? "white" : "green"}
                  className="bi bi-google google-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                </svg>{" "}
                Login with Google
              </button>

              <p
                style={{
                  fontFamily: "monospace",
                  color: "gray",
                  fontSize: 15,
                  alignSelf: "center",
                  marginTop: "20px",
                }}
              >
                --------- or Login with Email ---------
              </p>

              <form action="" style={{ width: "100%" }}>
                <span style={{ fontFamily: "monospace", fontSize: "20px" }}>
                  Email
                </span>{" "}
                <br />
                <input
                  type="email"
                  id="emailid"
                  style={{
                    border: "1px solid lightgray",
                    width: "100%",
                    height: 40,
                    borderRadius: "5px",
                  }}
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br /> <br />
                <span style={{ fontFamily: "monospace", fontSize: "20px" }}>
                  Password
                </span>{" "}
                <br />
                <input
                  type="password"
                  id="password"
                  style={{
                    border: "1px solid lightgray",
                    width: "100%",
                    height: 40,
                    borderRadius: "5px",
                  }}
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br /> <br />
                <button
                  style={{ width: "100%", alignSelf: "center" }}
                  type="button"
                  id="Login"
                  className="btn btn-outline-primary"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <p style={{ marginTop: "20px" }}>
                  Don't have an account?{" "}
                  <span
                    style={{ color: "rgb(49,108,244)", cursor: "pointer" }}
                    id="signInBtn-Link"
                    onClick={handleToggleForms}
                  >
                    Create an account
                  </span>
                </p>
              </form>
            </div>
          </SignInContainer>

          <SignUpContainer signingin={isLoginFormVisible}>
            <div
              style={{
                height: "70vh",
                width: "30vw",
                border: "1px solid lightgray",
                borderRadius: "20px",
                boxShadow: "10px 10px 8px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                padding: "30px",
                margin: "auto auto",
                background: "white",
              }}
              id="signup"
              className="form-wrapper sign-up"
            >
              <h1>Sign Up</h1>

              <p>Hi, Welcome back</p>

              <button
                style={{
                  width: "100%",
                  alignSelf: "center",
                  transition: "fill 0.3s",
                }}
                className="btn btn-outline-success"
                type="button"
                onClick={handleLoginWithGoogle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill={isHovered ? "white" : "green"}
                  className="bi bi-google google-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                </svg>{" "}
                Login with Google
              </button>

              <p
                style={{
                  fontFamily: "monospace",
                  color: "gray",
                  fontSize: 15,
                  alignSelf: "center",
                  marginTop: "20px",
                }}
              >
                --------- or SignUp with Email ---------
              </p>

              <form action="" style={{ width: "100%" }}>
                <span style={{ fontFamily: "monospace", fontSize: "20px" }}>
                  Email
                </span>{" "}
                <br />
                <input
                  type="email"
                  id="emailid"
                  style={{
                    border: "1px solid lightgray",
                    width: "100%",
                    height: 40,
                    borderRadius: "5px",
                  }}
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br /> <br />
                <span style={{ fontFamily: "monospace", fontSize: "20px" }}>
                  Password
                </span>{" "}
                <br />
                <input
                  type="password"
                  id="password"
                  style={{
                    border: "1px solid lightgray",
                    width: "100%",
                    height: 40,
                    borderRadius: "5px",
                  }}
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br /> <br />
                <button
                  style={{ width: "100%", alignSelf: "center" }}
                  type="button"
                  id="Login"
                  className="btn btn-outline-primary"
                  onClick={handleSignup}
                >
                  Signup
                </button>
                <p style={{ marginTop: "20px" }} id="signUpBtn-Link">
                  Already have an account?{" "}
                  <span
                    style={{ color: "rgb(49,108,244)", cursor: "pointer" }}
                    onClick={handleToggleForms}
                  >
                    Login
                  </span>
                </p>
              </form>
            </div>
          </SignUpContainer>
        </div>
      </div>
    </div>
  );
};

export default Login;
