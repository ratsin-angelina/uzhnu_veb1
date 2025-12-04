import React, { useState } from 'react';
import { useReview } from '../hooks/useReview';
import styles from './Login.module.css';

const ReviewForm = () => {
  const { reviews, addReview, isAddingReview } = useReview();
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [message, setMessage] = useState('');

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !reviewText.trim()) {
      showMessage('Заповніть ім’я та текст відгуку');
      return;
    }

    await addReview({
      userName: name.trim(),
      text: reviewText.trim(),
    });

    setReviewText('');
    showMessage('Відгук додано!');
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.formContainer}>

        {/* Повідомлення */}
        {message && (
          <div
            className={
              message.includes('додано')
                ? styles.success
                : styles.error
            }
          >
            {message}
          </div>
        )}

        <h3>Залишити відгук</h3>

        {/* Форма */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Ваше ім'я"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <textarea
            placeholder="Ваш відгук..."
            className={styles.textarea}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows="4"
            required
          />

          <button
            type="submit"
            className={styles.button}
            disabled={isAddingReview}
          >
            {isAddingReview ? 'Відправка...' : 'Додати відгук'}
          </button>
        </form>

        {/* Секція відгуків */}
        <div className={styles.reviewsSection}>
          <h3>Відгуки ({reviews?.length || 0})</h3>

          <div className={styles.reviewsList}>
            {reviews && reviews.length > 0 ? (
              reviews.map((r, i) => (
                <div key={i} className={styles.reviewItem}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewAuthor}>{r.userName}</span>
                  </div>

                  <p className={styles.reviewText}>{r.text}</p>
                </div>
              ))
            ) : (
              <div className={styles.noReviews}>
                Поки що відгуків немає
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReviewForm;
