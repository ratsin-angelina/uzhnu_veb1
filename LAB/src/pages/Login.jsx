import React, { useState } from "react";
import styles from "./Login.module.css";

import { useAuth } from "../hooks/useAuth";
import { useFirebaseRequest } from "../hooks/useFirebaseRequest";

const Login = () => {
  const { user, login, register } = useAuth();
  const { postData } = useFirebaseRequest();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mode, setMode] = useState("login");

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        await register(email, password);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    await postData("reviews", {
      email: user.email,
      review,
      createdAt: new Date(),
    });

    setSubmitted(true);
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.card}>
        {!user ? (
          <>
            <h2 className={styles.title}>
              {mode === "login" ? "Вхід" : "Реєстрація"}
            </h2>

            <form onSubmit={handleAuthSubmit} className={styles.form}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label className={styles.label}>Пароль</label>
              <input
                type="password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit" className={styles.button}>
                {mode === "login" ? "Увійти" : "Зареєструватися"}
              </button>
            </form>

            <p className={styles.switchText}>
              {mode === "login" ? "Немає акаунту?" : "Вже є акаунт?"}
              <span
                className={styles.switchLink}
                onClick={() =>
                  setMode(mode === "login" ? "register" : "login")
                }
              >
                {mode === "login" ? "Створити" : "Увійти"}
              </span>
            </p>
          </>
        ) : (
          <>
            {!submitted ? (
              <>
                <h2 className={styles.title}>Hola, {user.email}!</h2>
                <p className={styles.subtitle}>
                  Залиште свій відгук про наш ресторан:
                </p>

                <form onSubmit={handleReviewSubmit} className={styles.form}>
                  <textarea
                    className={styles.textarea}
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Ваш відгук..."
                    required
                    rows="5"
                  ></textarea>

                  <button type="submit" className={styles.button}>
                    Відправити відгук
                  </button>
                </form>
              </>
            ) : (
              <h2 className={styles.title}>
                Дякуємо за ваш відгук, {user.email}!
              </h2>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
