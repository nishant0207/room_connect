// ProfileDropdown.jsx
import React from 'react';
import { useFirebase } from "../Context/FirebaseContext";
import { toast } from "react-toastify";

const ProfileDropdown = ({ onPageChange }) => {
    const { logout } = useFirebase();

    const handleLogout = async () => {
        try {
            await logout(null);
            toast.success("Logged Out Successfully!", { autoClose: 2000 });
        } catch (error) {
            console.log(error);
        }
    };

    const handleProfileClick = () => {
        onPageChange('profilePage');
    };

    return (
        <div className="profile_dropdown" style={{fontSize:"14px",border:"1px solid gray"}}>
            <button className="btn btn-outline-success" onClick={handleLogout}>
                Log Out
            </button>
            <div onClick={handleProfileClick} style={{cursor:'pointer'}}>
                Profile
            </div>
            <div>
                Settings
            </div>
            <div>
                Upgrade
            </div>
        </div>
    );
};

export default ProfileDropdown;
