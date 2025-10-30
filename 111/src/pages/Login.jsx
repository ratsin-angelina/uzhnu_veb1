import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && name) {
      setLoggedIn(true);
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.formContainer}>
        {!loggedIn ? (
          <>
            <h2>Введіть ваші дані</h2>
            <form onSubmit={handleSubmit}>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>Ім’я:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <button type="submit">Залишити відгук</button>
            </form>
          </>
        ) : !submitted ? (
          <>
            <h2>¡Hola, {name}!</h2>
            <p>Залиште свій відгук про наш ресторан:</p>
            <form onSubmit={handleReviewSubmit}>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Ваш відгук..."
                required
                rows="5"
              ></textarea>
              <button type="submit">Відправити відгук</button>
            </form>
          </>
        ) : (
          <h2>Дякуємо за ваш відгук, {name}!</h2>
        )}
      </div>
    </div>
  );
};

export default Login;
