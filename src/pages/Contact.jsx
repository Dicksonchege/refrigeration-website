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
                                <p>davckrefrigeration@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <FaMapMarkerAlt className="contact-icon" />
                            <div>
                                <h3>Location</h3>
                                <p>Mukaa House, Chavakali–Busia Road</p>
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
                        {/* Embedding a generic map pointing to Kenya/Western Region or Chavakali as specific road might not be on generic google maps without exact coords. 
                Using Chavakali as a reference point. */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.030584742784!2d34.7214!3d0.1000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178005691c26b003%3A0xc3480373c2620786!2sChavakali%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
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
