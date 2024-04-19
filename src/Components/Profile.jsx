import React, { useState, useEffect } from 'react';
import { query, collection, getDocs, where, updateDoc, doc } from 'firebase/firestore';
import { firestore } from '../firebase';

const Profile = () => {
  const [name, setName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [blockName, setBlockName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPreferencesModal, setShowPreferencesModal] = useState(false);
  const [preferences, setPreferences] = useState({
    numberOfRoommates: '',
    cleanlinessLevel: '',
    favoriteFootballTeams: '',
    favoriteCricketTeams: '',
    sleepingSchedule: '',
    roomType: '',
    hobbies: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const collectionRef = collection(firestore, "rooms");
        const name = 'Nishant';
        const q = query(collectionRef, where("name", "==", name));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const userData = snapshot.docs[0].data(); // Assuming only one document matches the query
          setName(userData.name);
          setRoomNumber(userData.roomNumber);
          setBlockName(userData.blockName);
          setRegNo(userData.regNo);
          setEmail(userData.email);
          setPhoneNumber(userData.phoneNumber);
          // If user preferences exist in the database, set them in the state
          if (userData.preferences) {
            setPreferences(userData.preferences);
          }
        } else {
          console.log('No user found with the specified ID');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to handle saving user preferences
  const savePreferences = async () => {
    try {
      const roomRef = doc(firestore, "rooms", name); // Assuming 'name' is unique and used as the document ID
      await updateDoc(roomRef, { preferences }); // Update the 'preferences' field in Firestore
      setShowPreferencesModal(false); // Close the modal after saving preferences
    } catch (error) {
      console.error('Error saving preferences:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid black', padding: '20px', borderRadius: '5px', width: '400px' }}>
        <h2>Profile</h2>
        <p>Name: {name}</p>
        <p>Room Number: {roomNumber}</p>
        <p>Block Name: {blockName}</p>
        <p>Registration Number: {regNo}</p>
        <p>Email: {email}</p>
        <p>Phone Number: {phoneNumber}</p>
        <button onClick={() => setShowPreferencesModal(true)}>Edit Preferences</button>
      </div>

      {/* Preferences Modal/Form */}
      {showPreferencesModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowPreferencesModal(false)}>&times;</span>
            <h2>Edit Preferences</h2>
            {/* Form to edit preferences */}
            <label>Number of Roommates: </label>
            <input type="text" value={preferences.numberOfRoommates} onChange={(e) => setPreferences({ ...preferences, numberOfRoommates: e.target.value })} />
            {/* Add other preference fields here */}
            <button onClick={savePreferences}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
