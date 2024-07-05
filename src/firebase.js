// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase} from "firebase/database";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBVAzFb9LSZDk4Ex59Myx0_CCnUhWdFCkA",
  authDomain: "room-connect-88b78.firebaseapp.com",
  projectId: "room-connect-88b78",
  storageBucket: "room-connect-4a339.appspot.com",
  messagingSenderId: "256986412795",
  appId: "1:256986412795:web:9bc8705d26b1a21cb8a25e",
  measurementId: "G-1DE065R7GV",
  databaseURL:
    "https://room-connect-88b78-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const firestore = getFirestore(app);
export {auth,database,firestore};

export default app;
