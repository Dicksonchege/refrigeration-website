import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './BookRepair.css';

const BookRepair = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        location: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        const serviceId = 'service_w7p8v49';
        const templateId = 'template_i2cm8kt';
        const publicKey = 'qqGpgjhi4iM2iLbUv';

        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
            .then((result) => {
                console.log(result.text);
                alert('Thank you for your booking request! We will contact you shortly.');
                setFormData({
                    name: '',
                    phone: '',
                    service: '',
                    location: '',
                    message: ''
                });
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the request. Please try again or contact us directly via phone/WhatsApp.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="book-repair-page section-padding">
            <div className="container">
                <h2 className="section-title">Book a Repair</h2>
                <div className="form-container">
                    <form className="booking-form" ref={formRef} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="service">Service Needed</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a service</option>
                                <option value="Fridge Repair">Fridge Repair</option>
                                <option value="Freezer Repair">Freezer Repair</option>
                                <option value="AC Repair/Install">AC Repair/Install</option>
                                <option value="Cold Room">Cold Room Service</option>
                                <option value="HVAC Maintenance">HVAC Maintenance</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                                placeholder="Where is the repair needed?"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message (Optional)</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Describe the issue..."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                            {loading ? 'Sending...' : 'Submit Booking'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookRepair;
