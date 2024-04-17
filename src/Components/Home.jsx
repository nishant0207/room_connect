import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFirebase } from "../Context/FirebaseContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {

  const { user, logout } = useFirebase();

  const handleLogout = async () => {
    console.log(user);
    try {
      await logout(null);
      toast.success("Logged Out Sucessfully!", { autoClose: 2000 });
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="container">
      <div>Home</div>
      <button
        style={{ width: "25%", alignSelf: "center" }}
        className="btn btn-outline-success"
        type="button"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
