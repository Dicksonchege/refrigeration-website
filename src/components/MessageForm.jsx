import { useState } from 'react';
import { FaPaperPlane, FaUser, FaPhone, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';
import './MessageForm.css';

const MessageForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        company: '',
        region: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const regions = [
        "Western Region (Kakamega, Busia, Vihiga)",
        "Nyanza Region (Kisumu, Siaya, Migori)",
        "Rift Valley (Eldoret, Nakuru, Kericho)",
        "Nairobi Area",
        "Central Region",
        "Coast Region",
        "Other"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Construct Mailto Link
        const subject = `New Inquiry from ${formData.fullName} (${formData.company})`;
        const body = `Name: ${formData.fullName}%0D%0APhone: ${formData.phone}%0D%0ACompany: ${formData.company}%0D%0ARegion: ${formData.region}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

        setTimeout(() => {
            window.location.href = `mailto:davckrefrigeration@gmail.com?subject=${subject}&body=${body}`;
            setStatus('success');
            setFormData({
                fullName: '',
                phone: '',
                company: '',
                region: '',
                message: ''
            });
            setTimeout(() => setStatus(''), 5000);
        }, 1500);
    };

    return (
        <section className="message-form-section section-padding">
            <div className="container">
                <div className="form-wrapper">
                    <div className="form-header">
                        <h2 className="section-title">Send Us a <span className="text-green">Message</span></h2>
                        <p>Have a project in mind? Fill out the form below and we'll get back to you shortly.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-grid">
                            <div className="form-group">
                                <label><FaUser className="input-icon" /> Full Names</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label><FaPhone className="input-icon" /> Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+254 7XX XXX XXX"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label><FaBuilding className="input-icon" /> Company Name</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Your Company (Optional)"
                                />
                            </div>

                            <div className="form-group">
                                <label><FaMapMarkerAlt className="input-icon" /> Area of Residence</label>
                                <select
                                    name="region"
                                    value={formData.region}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select your region</option>
                                    {regions.map((region, index) => (
                                        <option key={index} value={region}>{region}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label>Your Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your refrigeration or HVAC needs..."
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <div className="form-actions">
                            <button type="submit" className={`btn btn-primary ${status === 'sending' ? 'loading' : ''}`}>
                                {status === 'sending' ? 'Sending...' : 'Send Message'} <FaPaperPlane style={{ marginLeft: '10px' }} />
                            </button>
                        </div>

                        {status === 'success' && (
                            <div className="success-banner animate-fade-up">
                                Message sent successfully! We will contact you soon.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MessageForm;
