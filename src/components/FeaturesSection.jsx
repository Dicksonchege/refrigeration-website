import { FaClock, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import './FeaturesSection.css';

const FeaturesSection = () => {
    const features = [
        {
            icon: <FaClock />,
            title: "24/7 Operations",
            description: "Round-the-clock support ensuring your critical cooling systems never fail when you need them most."
        },
        {
            icon: <FaShieldAlt />,
            title: "Proven Reliability",
            description: "Trusted by top businesses for durable installations and repairs that stand the test of time."
        },
        {
            icon: <FaChartLine />,
            title: "Smart Monitoring",
            description: "Advanced diagnostic tools to track performance and predict maintenance needs before issues arise."
        }
    ];

    return (
        <section className="features-section section-padding">
            <div className="container">
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            className="feature-item"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
