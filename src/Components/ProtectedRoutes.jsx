import React from "react";
import { Navigate } from "react-router-dom";
import { useFirebase } from "../Context/FirebaseContext";

const ProtectedRoutes = ({ children }) => {
  let { user } = useFirebase();
  console.log(user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoutes;
