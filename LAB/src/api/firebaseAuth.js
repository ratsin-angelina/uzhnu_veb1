// src/api/firebaseAuth.js
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user };
  } catch (error) {
    return { error: error.message };
  }
};
