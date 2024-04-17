import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdOlNtla7zXuKdrTn-P2G7jWOXSbU6PWE",
  authDomain: "room-connect-4a339.firebaseapp.com",
  projectId: "room-connect-4a339",
  storageBucket: "room-connect-4a339.appspot.com",
  messagingSenderId: "585959100382",
  appId: "1:585959100382:web:63c53829e5e0cd8ce3974f",
  measurementId: "G-K5PWBNXWW2",
  databaseURL:
    "https://room-connect-4a339-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;