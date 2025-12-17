import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAscBWx_tz-VSClYODZl5DYhqcsx7uuWk4",
  authDomain: "labki-594c6.firebaseapp.com",
  projectId: "labki-594c6",
  storageBucket: "labki-594c6.firebasestorage.app",
  messagingSenderId: "590830202408",
  appId: "1:590830202408:web:1f569984e0eca067ee0f1d",
  measurementId: "G-MNRMC0XELX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, analytics };
