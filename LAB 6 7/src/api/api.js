const API_URL = 'http://localhost:5000/api/reviews';

export const getReviews = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Не вдалося завантажити відгуки');
  return await res.json();
};

export const addReview = async (review) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(review)
  });

  if (!res.ok) throw new Error('Не вдалося додати відгук');
  return await res.json();
};
