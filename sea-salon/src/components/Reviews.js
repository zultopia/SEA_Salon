import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('reviews').onSnapshot(snapshot => {
      setReviews(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleReview = (e) => {
    e.preventDefault();
    db.collection('reviews').add({
      name,
      rating,
      comment,
    })
    .then(() => {
      setName('');
      setRating(1);
      setComment('');
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div>
      <h1>Reviews</h1>
      <form onSubmit={handleReview}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
        <button type="submit">Submit Review</button>
      </form>
      <div>
        {reviews.map((review) => (
          <div key={review.id}>
            <h3>{review.name} - {review.rating} Stars</h3>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;