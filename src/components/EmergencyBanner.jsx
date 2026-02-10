import { FaPhoneAlt, FaExclamationTriangle } from 'react-icons/fa';
import './EmergencyBanner.css';

const EmergencyBanner = () => {
    return (
        <section className="emergency-section">
            <div className="container emergency-container">
                <div className="emergency-icon-wrapper">
                    <FaExclamationTriangle className="emergency-icon pulse-animation" />
                </div>
                <div className="emergency-text">
                    <h2>Emergency Breakdown?</h2>
                    <p>Don't let your goods spoil. We offer 24/7 Emergency Repair Services.</p>
                </div>
                <div className="emergency-action">
                    <a href="tel:+254724992956" className="btn btn-danger animate-pulse">
                        <FaPhoneAlt style={{ marginRight: '10px' }} />
                        Call +254 724 992 956
                    </a>
                </div>
            </div>
        </section>
    );
};

export default EmergencyBanner;
