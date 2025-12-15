import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Слідкуємо за станом авторизації
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Логін
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // Реєстрація
  const register = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // Логаут
  const logout = () => signOut(auth);

  return { user, loading, login, register, logout };
}
