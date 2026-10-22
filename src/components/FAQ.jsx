import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Do you offer emergency repair services?",
            answer: "Yes, we offer 24/7 emergency repair services for critical refrigeration and HVAC breakdowns to prevent loss of goods."
        },
        {
            question: "What areas do you cover?",
            answer: "We primarily serve Nairobi, Western Kenya, and surrounding areas, and we are available for major projects countrywide."
        },
        {
            question: "Do you provide a warranty for your repairs?",
            answer: "Yes, we provide a warranty on both our workmanship and the parts we supply, giving you peace of mind."
        },
        {
            question: "Which brands do you service?",
            answer: "We service all major brands including LG, Samsung, Ramtons, Hisense, Von, Hotpoint, and many others."
        },
        {
            question: "How often should I service my AC?",
            answer: "It is recommended to service your air conditioning units at least once a year to ensure efficiency and prolong their lifespan."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section section-padding">
            <div className="container">
                <h2 className="section-title">Frequently Asked <span className="text-green">Questions</span></h2>
                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-header">
                                <h3>{faq.question}</h3>
                                {activeIndex === index ? <FaChevronUp className="faq-icon" /> : <FaChevronDown className="faq-icon" />}
                            </div>
                            <div className="faq-content">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
