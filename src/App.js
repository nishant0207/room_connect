import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "./Components/ProtectedRoutes.jsx";
import Login from "./Components/LoginPage.jsx";
import Home from "./Components/Home.jsx";
import { FirebaseContextProvider } from "./Context/FirebaseContext.jsx";
import { auth } from "./firebase"; // Import Firebase auth module
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ReactComponent as LoadingIcon } from './images/Eclipse@2x-1.0s-200px-200px.svg';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
    <div style={{display:'flex', flexBasis:"100%", alignItems:'center',alignContent:'center', justifyContent:"center", height:"100vh"}}>
      <LoadingIcon style={{ animation: 'spin 1s linear infinite' }} />
      </div>);
  }

  return (
    <div className="App">
      <>
        <ToastContainer autoClose={2000} />
        <Router>
          <FirebaseContextProvider>
            <Routes>
              <Route
                path="/"
                element={user ? <Navigate to="/home" /> : <Login />}
              />
              <Route
                path="/home"
                element={
                  user ? (
                    <ProtectedRoutes>
                      <Home />
                    </ProtectedRoutes>
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
            </Routes>
          </FirebaseContextProvider>
        </Router>
      </>
    </div>
  );
}

export default App;
