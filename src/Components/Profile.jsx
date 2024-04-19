import React, { useState, useEffect } from 'react';
import { query,collection, getDocs, where } from 'firebase/firestore';
import { firestore } from '../firebase';

const Profile = () => {
  const [name, setName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [blockName, setBlockName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const collectionRef = collection(firestore, "rooms");
        const name = 'nishant';
        const q = query(collectionRef, where("name", "==", name));
        const snapshot = await getDocs(q)
        if (!snapshot.empty) {
          const userData = snapshot.docs[0].data(); // Assuming only one document matches the query
          setName(userData.name);
          setRoomNumber(userData.roomNumber);
          setBlockName(userData.blockName);
          setRegNo(userData.regNo);
          setEmail(userData.email);
          setPhoneNumber(userData.phoneNumber);
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
  }, []); // Empty dependency array to fetch data only once on component mount

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
      <div style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid black', padding: '20px', borderRadius: '5px',width:'400px' }}>
      <h2>Profile</h2>
      <p>Name: {name}</p>
      <p>Room Number: {roomNumber}</p>
      <p>Block Name: {blockName}</p>
      <p>Registration Number: {regNo}</p>
      <p>Email: {email}</p>
      <p>Phone Number: {phoneNumber}</p>
    </div>
  </div>
  );
};

export default Profile;
