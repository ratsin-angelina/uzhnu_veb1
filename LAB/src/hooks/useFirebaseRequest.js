import { useState } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  addDoc
} from "firebase/firestore";

export function useFirebaseRequest() {
  const [loading, setLoading] = useState(false);

  // GET
  const fetchData = async (collectionName) => {
    setLoading(true);
    const snapshot = await getDocs(collection(db, collectionName));
    setLoading(false);

    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };

  // POST
  const postData = async (collectionName, data) => {
    setLoading(true);
    const result = await addDoc(collection(db, collectionName), data);
    setLoading(false);

    return result.id;
  };

  return { fetchData, postData, loading };
}
