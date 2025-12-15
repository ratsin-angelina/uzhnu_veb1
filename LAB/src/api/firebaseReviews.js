// src/api/firebaseReviews.js
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Додати відгук
export const addReview = async (review) => {
  try {
    const docRef = await addDoc(collection(db, "reviews"), review);
    return { id: docRef.id };
  } catch (error) {
    return { error: error.message };
  }
};

// Отримати всі відгуки
export const getReviews = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "reviews"));
    const reviews = [];
    querySnapshot.forEach((doc) => {
      reviews.push({ id: doc.id, ...doc.data() });
    });
    return reviews;
  } catch (error) {
    return { error: error.message };
  }
};
