// RoomListingForm.jsx
import { useState } from 'react';
import { database } from '../firebase';
const RoomListingForm = () => {

    // Define formData state
    const [formData, setFormData] = useState({
        name: '',
        regNo: '',  
        email: '',
        phoneNumber: '',
        blockName: '',
        roomNumber: ''
    });

    // Function to handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!database){
            console.log("Firebase database not intialized");
            return;
        }
        // Push the form data to the database under a 'rooms' node
        database.ref('rooms').push(formData)
            .then(() => {
                console.log('Form data saved successfully');
                // Clear the form fields after successful submission
                setFormData({
                    name: '',
                    regNo: '',  
                    email: '',
                    phoneNumber: '',
                    blockName: '',
                    roomNumber: ''
                });
            })
            .catch((error) => {
                console.error('Error saving form data:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} style={{ width: "400px", margin: "0 auto", padding: "20px", border: "2px solid black", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", fontSize: "14px" }}>
            <div>
                <input type="text" id="name" name="name" placeholder='Name' value={formData.name} onChange={handleChange} required style={{ width: "100%", padding: "10px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "5px" }} />
            </div>
            <div>
                <input type="text" id="regNo" name="regNo" placeholder='Registration No.' value={formData.regNo} onChange={handleChange} required style={{ width: "100%", padding: "10px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "5px" }} />
            </div>
            <div>
                <input type="email" id="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required style={{ width: "100%", padding: "10px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "5px" }} />
            </div>
            <div>
                <input type="tel" id="phoneNumber" name="phoneNumber" placeholder='Phone No.' value={formData.phoneNumber} onChange={handleChange} required style={{ width: "100%", padding: "10px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "5px" }} />
            </div>
            <div>
                <input type="text" id="blockName" name="blockName" placeholder='Block Name' value={formData.blockName} onChange={handleChange} required style={{ width: "100%", padding: "10px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "5px" }} />
            </div>
            <div>
                <input type="text" id="roomNumber" name="roomNumber" placeholder='Room No.' value={formData.roomNumber} onChange={handleChange} required style={{ width: "100%", padding: "10px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "5px" }} />
            </div>
            <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>Submit</button>
        </form>
    );
};

export default RoomListingForm;
