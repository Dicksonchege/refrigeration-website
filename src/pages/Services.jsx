import { FaTools, FaSnowflake, FaFan, FaServer, FaHome, FaIndustry } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: <FaSnowflake />,
            title: "Fridge Repair",
            description: "Quick diagnosis and repair of all refrigerator brands. We fix cooling issues, leaks, and more."
        },
        {
            icon: <FaServer />,
            title: "Freezer Repair",
            description: "Expert manufacturing and repair for deep freezers to prevent food spoilage."
        },
        {
            icon: <FaFan />,
            title: "AC Installation & Repair",
            description: "Full service for air conditioning units, from new installations to routine servicing."
        },
        {
            icon: <FaIndustry />,
            title: "Cold Room Services",
            description: "Installation and maintenance of commercial cold rooms and walk-in freezers."
        },
        {
            icon: <FaTools />,
            title: "HVAC Maintenance",
            description: "Preventative maintenance plans to keep your heating and cooling systems running efficiently."
        },
        {
            icon: <FaHome />,
            title: "Residential & Commercial",
            description: "Tailored solutions for both home appliances and large-scale commercial refrigeration needs."
        }
    ];

    return (
        <div className="services-page section-padding">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <p className="services-intro">
                    We offer a comprehensive range of services to meet all your cooling and heating needs.
                </p>
                <div className="services-grid-page">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
