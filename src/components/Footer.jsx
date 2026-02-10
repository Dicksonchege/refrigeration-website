import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3>Davick Refrigeration</h3>
                    <p>Professional Refrigeration & HVAC Services You Can Trust.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <p><FaMapMarkerAlt /> Mukaa House, Chavakali–Busia Road</p>
                    <p><FaPhoneAlt /> <a href="tel:+254724992956">+254724992956</a></p>
                    <p><FaEnvelope /> <a href="mailto:davckrefrigeration@gmail.com">davckrefrigeration@gmail.com</a></p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/book-repair">Book a Repair</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} Davick Refrigeration. All rights reserved.</p>
                <a
                    href="https://wa.me/254724992956"
                    className="whatsapp-float"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp size={30} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
