import React from "react";
import "./ReviewSection.css";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    comment: "Amazing quality shoes! Very comfortable and stylish.",
  },
  {
    id: 2,
    name: "Anjali Verma",
    rating: 4,
    comment: "Good value for money. Delivery was fast.",
  },
  {
    id: 3,
    name: "Amit Patel",
    rating: 5,
    comment: "Perfect fitting and premium feel. Highly recommended!",
  },
];

const ReviewSection = () => {
  return (
    <section className="review-section">
      <h1 className="review-title">What Our Customers Say</h1>

      <div className="review-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <h3>{review.name}</h3>

            <div className="review-stars">
              {Array.from({ length: review.rating }).map((_, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
            </div>

            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
