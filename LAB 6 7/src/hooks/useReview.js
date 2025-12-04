import { useState, useEffect } from "react";
import axios from "axios";

export const useReview = () => {
  const [reviews, setReviews] = useState([]);
  const [isAddingReview, setIsAddingReview] = useState(false);

  const API_URL = "http://localhost:5000/api/reviews";

  
  const fetchReviews = async () => {
    try {
      const res = await axios.get(API_URL);
      setReviews(res.data);
    } catch (error) {
      console.error("Помилка при отриманні відгуків:", error);
    }
  };

  const addReview = async (reviewData) => {
    setIsAddingReview(true);
    try {
      const res = await axios.post(API_URL, reviewData, {
        headers: {
          "Content-Type": "application/json"
        }
      });


      setReviews((prev) => [...prev, res.data]);

      return true;
    } catch (error) {
      console.error("Помилка при додаванні відгуку:", error);
      return false;
    } finally {
      setIsAddingReview(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return { reviews, addReview, isAddingReview };
};
