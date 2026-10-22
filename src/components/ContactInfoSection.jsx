import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactInfoSection.css';

const ContactInfoSection = () => {
    return (
        <section className="contact-info-section section-padding">
            <div className="container">
                <h2 className="section-title">Get In <span className="text-green">Touch</span></h2>
                <div className="contact-info-wrapper">
                    <div className="contact-card animate-up">
                        <div className="icon-box">
                            <FaPhoneAlt />
                        </div>
                        <h3>Call Us</h3>
                        <p><a href="tel:+254724992956">+254 724 992 956</a></p>
                    </div>

                    <div className="contact-card animate-up delay-1">
                        <div className="icon-box">
                            <FaEnvelope />
                        </div>
                        <h3>Email Us</h3>
                        <p><a href="mailto:davckrefrigeration@gmail.com">davckrefrigeration@gmail.com</a></p>
                    </div>

                    <div className="contact-card animate-up delay-2">
                        <div className="icon-box">
                            <FaMapMarkerAlt />
                        </div>
                        <h3>Visit Us</h3>
                        <p>Charles Rubi Rd, Nairobi</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfoSection;
