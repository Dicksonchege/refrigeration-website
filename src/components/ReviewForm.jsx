import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './ReviewForm.css';

const ReviewForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            setRating(0);
            setName('');
            setComment('');
        }, 1000);
    };

    if (submitted) {
        return (
            <section className="review-section section-padding">
                <div className="container review-container">
                    <div className="success-message animate-fade-up">
                        <FaStar className="success-star" />
                        <h3>Thank You!</h3>
                        <p>Your review has been submitted successfully.</p>
                        <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
                            Submit Another
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="review-section section-padding">
            <div className="container review-container">
                <h2 className="section-title">Rate Our <span className="text-green">Service</span></h2>
                <div className="review-card">
                    <form onSubmit={handleSubmit}>
                        <div className="rating-input">
                            <p className="rating-label">How was your experience?</p>
                            <div className="stars">
                                {[...Array(5)].map((star, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <label key={index}>
                                            <input
                                                type="radio"
                                                name="rating"
                                                value={ratingValue}
                                                onClick={() => setRating(ratingValue)}
                                            />
                                            <FaStar
                                                className="star"
                                                color={ratingValue <= (hover || rating) ? "#27c96d" : "#4a5568"}
                                                size={30}
                                                onMouseEnter={() => setHover(ratingValue)}
                                                onMouseLeave={() => setHover(0)}
                                            />
                                        </label>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="review-input"
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                placeholder="Tell us about your experience..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                required
                                className="review-textarea"
                                rows="4"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ReviewForm;
