import React, { useState } from 'react';
import roomConnectImage from '../images/Profile-Male-PNG.png';
import ProfileDropdown from './ProfileDropdown'; 
import './Navbar.css';

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const closeDropdown = () => {
        setDropdownVisible(false);
    };

    const [selectedOption, setSelectedOption] = useState('Home');

    const handleSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="header" style={{ display: 'flex', flexDirection: 'row', alignContent: 'flex-end', width: '100%', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', padding: '10px', fontFamily: 'monospace', justifyContent: "center" }}>
            <div className='headname' style={{ display: 'flex', flexBasis: '75%' }}><span style={{ fontSize: '20px', fontWeight: 'bold',alignContent:"center" }}>Room Connect</span></div>
            <div className='navbar' style={{ display: 'flex', flexDirection: "row", alignItems: 'flex-end', flexBasis: "25%", alignContent: 'space-evenly', fontSize: '16px' }} >
                <div
                    className="nav-option"
                    style={{ textDecoration: selectedOption === 'Home' ? 'underline' : 'none', marginRight: '10px', cursor:"pointer" }}
                    onClick={() => handleSelect('Home')}
                >
                    Home
                </div>
                <div
                    className="nav-option"
                    style={{ textDecoration: selectedOption === 'About' ? 'underline' : 'none', cursor:"pointer" }}
                    onClick={() => handleSelect('About')}
                >
                    About
                </div>
                {/* <button
                    style={{ width: "100px", alignSelf: "center" }}
                    className="btn btn-outline-success"
                    type="button"
                    onClick={handleLogout}
                >
                    Log Out
                </button> */}
                <div className='profile_pic'>
                <img src={roomConnectImage} alt="Profile" style={{ height: "30px", cursor: "pointer" }} onClick={toggleDropdown} />
                    {dropdownVisible && <ProfileDropdown />} 
                </div>
            </div>
            {dropdownVisible && <div className="overlay" onClick={closeDropdown}></div>} {/* Render an overlay to close the dropdown when clicked outside */}
        </div>
    );
};

export default Navbar;


