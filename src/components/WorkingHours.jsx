import { FaClock, FaCalendarAlt } from 'react-icons/fa';
import './WorkingHours.css';

const WorkingHours = () => {
    return (
        <section className="working-hours-section section-padding">
            <div className="container">
                <div className="hours-card">
                    <h2 className="section-title">Opening <span className="text-green">Hours</span></h2>
                    <p className="hours-subtitle">East African Time (EAT)</p>

                    <div className="hours-grid">
                        <div className="hours-row">
                            <span className="day">Monday - Friday</span>
                            <span className="time">8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="hours-row">
                            <span className="day">Saturday</span>
                            <span className="time">8:00 AM - 4:00 PM</span>
                        </div>
                        <div className="hours-row sunday">
                            <span className="day">Sunday</span>
                            <span className="time closed">Closed</span>
                        </div>
                    </div>
                    <div className="emergency-note">
                        <FaClock className="note-icon" />
                        <span>24/7 Support Available for Emergencies</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkingHours;
