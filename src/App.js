// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./Components/ProtectedRoutes.jsx";
import Login from "./Components/LoginPage.jsx";
import Home from "./Components/Home.jsx";
import { FirebaseContextProvider } from "./Context/FirebaseContext.jsx";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import "./App.css";
function App() {

  return (
    <div className="App">
      <>
        <ToastContainer autoClose={2000} />
        <Router>
          <FirebaseContextProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoutes>
                    <Home />
                  </ProtectedRoutes>
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
