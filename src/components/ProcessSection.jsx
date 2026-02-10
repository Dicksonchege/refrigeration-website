import { FaPhoneVolume, FaSearchDollar, FaTools, FaCheckCircle } from 'react-icons/fa';
import './ProcessSection.css';

const ProcessSection = () => {
    const steps = [
        {
            icon: <FaPhoneVolume />,
            number: "01",
            title: "Contact Us",
            description: "Call or message us with your issue. Our team is ready 24/7 to listen."
        },
        {
            icon: <FaSearchDollar />,
            number: "02",
            title: "Assessment",
            description: "We visit your site, diagnose the problem, and provide a fair quote."
        },
        {
            icon: <FaTools />,
            number: "03",
            title: "Expert Repair",
            description: "Our skilled technicians fix the issue using genuine parts and best practices."
        },
        {
            icon: <FaCheckCircle />,
            number: "04",
            title: "Test & Support",
            description: "We verify the system works perfectly and offer warranty support."
        }
    ];

    return (
        <section className="process-section section-padding">
            <div className="container">
                <h2 className="section-title">How We <span className="text-green">Work</span></h2>
                <div className="process-grid">
                    {steps.map((step, index) => (
                        <div className="process-item" key={index}>
                            <div className="process-number">{step.number}</div>
                            <div className="process-icon">
                                {step.icon}
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                            {index !== steps.length - 1 && <div className="process-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
