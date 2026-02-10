import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaSnowflake, FaFan, FaPhoneAlt } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';
import Testimonials from '../components/Testimonials';
import BrandTicker from '../components/BrandTicker';
import ReviewForm from '../components/ReviewForm';
import EmergencyBanner from '../components/EmergencyBanner';
import FeaturesSection from '../components/FeaturesSection';
import FAQ from '../components/FAQ';
import WorkingHours from '../components/WorkingHours';
import ContactInfoSection from '../components/ContactInfoSection';
import MessageForm from '../components/MessageForm';
import ProcessSection from '../components/ProcessSection';
import WhyChooseUs from '../components/WhyChooseUs';
import CostEstimator from '../components/CostEstimator';
import ProjectGallery from '../components/ProjectGallery';
import ProductShowcase from '../components/ProductShowcase';
import './Home.css';

const Home = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    // Auto-advance slider
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % 3);
        }, 5000); // 5 seconds per slide
        return () => clearInterval(interval);
    }, []);

    const slides = [
        {
            id: 1,
            // User provided image 1
            img: "/assets/hero-slide-1.png",
            sub: "Committed to top quality services",
            title: "Freezer, ice maker and refrigerator repair services",
            cta: "Book Online"
        },
        {
            id: 2,
            // User provided image 2
            img: "/assets/hero-slide-2.png",
            sub: "Expert Cooling Solutions",
            title: "Commercial & Industrial Refrigeration Maintenance",
            cta: "Get a Quote"
        },
        {
            id: 3,
            // User provided image 3 (from previous upload)
            img: "/assets/hero-3.png",
            sub: "24/7 Emergency Support",
            title: "Reliable HVAC Repairs When You Need Them Most",
            cta: "Call Now"
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section - Refix Split Slider Style */}
            <section className="hero-slider-section">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
                    >
                        {/* LEFT SIDE: Content */}
                        <div className="hero-split-content">
                            <div className="content-wrapper">
                                <h4 className={`animate-text ${index === activeSlide ? 'visible' : ''}`}>{slide.sub}</h4>
                                <h1 className={`animate-text delay-100 ${index === activeSlide ? 'visible' : ''}`}>{slide.title}</h1>

                                <Link to="/book-repair" className={`refix-btn animate-text delay-200 ${index === activeSlide ? 'visible' : ''}`}>
                                    {slide.cta}
                                </Link>

                                {/* Slider Dots */}
                                <div className="slider-dots animate-text delay-300">
                                    {slides.map((_, dotIndex) => (
                                        <span
                                            key={dotIndex}
                                            className={`dot ${activeSlide === dotIndex ? 'active' : ''}`}
                                            onClick={() => setActiveSlide(dotIndex)}
                                        ></span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: Image */}
                        <div className="hero-split-image">
                            <img src={slide.img} alt={slide.title} />
                        </div>
                    </div>
                ))}
            </section>

            {/* Brand Partners Ticker */}
            <BrandTicker />

            {/* Key Features */}
            <FeaturesSection />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Price Estimator Tool */}
            <div data-aos="fade-up" data-aos-duration="1000">
                <CostEstimator />
            </div>

            {/* Project Gallery */}
            <div data-aos="fade-up" data-aos-delay="300">
                <ProjectGallery />
            </div>

            {/* Equipment for Sale */}
            <ProductShowcase />

            {/* Intro / Stats Section */}
            <section className="intro section-padding" data-aos="fade-in">
                <div className="container">
                    <div className="stats-row">
                        <div className="stat-item">
                            <h2>12+</h2>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-item">
                            <h2>500+</h2>
                            <p>Projects Done</p>
                        </div>
                        <div className="stat-item">
                            <h2>100%</h2>
                            <p>Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <section className="featured-services section-padding">
                <div className="container">
                    <h2 className="section-title">Our <span className="text-green">Expertise</span></h2>
                    <div className="services-grid">
                        <ServiceCard
                            icon={<FaSnowflake />}
                            title="Refrigeration"
                            description="Industrial & Commercial cooling solutions."
                        />
                        <ServiceCard
                            icon={<FaFan />}
                            title="HVAC Systems"
                            description="Advanced climate control installation."
                        />
                        <ServiceCard
                            icon={<FaTools />}
                            title="Maintenance"
                            description="24/7 Reliability & Servicing."
                        />
                    </div>
                </div>
            </section>

            {/* How We Work Process */}
            <ProcessSection />

            <Testimonials />

            {/* Working Hours */}
            <WorkingHours />

            {/* FAQ Section */}
            <FAQ />

            {/* Get In Touch Info */}
            <ContactInfoSection />

            {/* Detailed Message Form */}
            <MessageForm />

            {/* Customer Review Form */}
            <ReviewForm />

            {/* Emergency Contact Section */}
            <EmergencyBanner />
        </div>
    );
};

export default Home;
