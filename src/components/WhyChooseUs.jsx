import { FaStopwatch, FaAward, FaShieldAlt, FaHandHoldingUsd } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const benefits = [
        {
            icon: <FaStopwatch />,
            title: "Rapid Response",
            text: "We arrive within hours, not days. Your cooling emergency is our top priority."
        },
        {
            icon: <FaShieldAlt />,
            title: "30-Day Warranty",
            text: "We stand by our work. If the issue recurs within 30 days, we fix it for free."
        },
        {
            icon: <FaAward />,
            title: "Genuine Parts",
            text: "We never compromise on quality. We use only original manufacturer parts."
        },
        {
            icon: <FaHandHoldingUsd />,
            title: "Transparent Pricing",
            text: "No hidden fees. You get a clear, fair quote before we start any work."
        }
    ];

    return (
        <section className="why-us-section section-padding">
            <div className="container">
                <div className="why-us-header">
                    <h2 className="section-title">The <span className="text-blue">Davick Difference</span></h2>
                    <p className="section-subtitle">Why unparalleled service matters for your business.</p>
                </div>

                <div className="benefits-grid">
                    {benefits.map((item, index) => (
                        <div
                            className="benefit-card"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="benefit-icon-wrapper">
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
