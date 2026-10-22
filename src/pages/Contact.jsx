import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page section-padding">
            <div className="container">
                <h2 className="section-title">Contact Us</h2>

                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="contact-item">
                            <FaPhoneAlt className="contact-icon" />
                            <div>
                                <h3>Phone</h3>
                                <p><a href="tel:+254724992956">+254724992956</a></p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <FaEnvelope className="contact-icon" />
                            <div>
                                <h3>Email</h3>
                                <p><a href="mailto:davckrefrigeration@gmail.com">davckrefrigeration@gmail.com</a></p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <FaMapMarkerAlt className="contact-icon" />
                            <div>
                                <h3>Location</h3>
                                <p>Charles Rubi Rd, Nairobi</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <FaWhatsapp className="contact-icon whatsapp-icon" />
                            <div>
                                <h3>WhatsApp</h3>
                                <a
                                    href="https://wa.me/254724992956"
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="map-container">
                        <iframe
                            src="https://maps.google.com/maps?q=Charles+Rubi+Rd,+Nairobi,+Kenya&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Davick Refrigeration Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
