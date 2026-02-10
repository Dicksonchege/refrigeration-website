import { FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Kamau",
            role: "Business Owner",
            text: "Davick Refrigeration saved my restaurant from a major disaster when our cold room broke down. Their response was fast and the repair was perfect.",
        },
        {
            id: 2,
            name: "Sarah Omondi",
            role: "Homeowner",
            text: "Very professional service. They installed my new AC unit efficiently and cleaned up after themselves. Highly recommended!",
        },
        {
            id: 3,
            name: "Peter Wanjala",
            role: "Hotel Manager",
            text: "We rely on Davick for all our HVAC maintenance. They are reliable, trustworthy, and always do a great job.",
        }
    ];

    return (
        <section className="testimonials-section section-padding">
            <div className="container">
                <h2 className="section-title">What Our Clients Say</h2>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <FaQuoteLeft className="quote-icon" />
                            <p className="testimonial-text">{testimonial.text}</p>
                            <div className="testimonial-author">
                                <h4>{testimonial.name}</h4>
                                <span>{testimonial.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
