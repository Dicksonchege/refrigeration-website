import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="container section-padding">
                <h2 className="section-title">About Davick Refrigeration</h2>
                <div className="about-content">
                    <div className="about-text">
                        <h3>Who We Are</h3>
                        <p>
                            Davick Refrigeration is a leading provider of HVAC and refrigeration services in the region.
                            Founded with the mission to deliver reliable and high-quality cooling solutions, we have established
                            ourselves as a trusted name for both residential and commercial clients.
                        </p>
                        <p>
                            Located at Mukaa House on Chavakali–Busia Road, our strategic location allows us to respond
                            quickly to service calls and emergency repairs.
                        </p>

                        <h3>Our Expertise</h3>
                        <p>
                            We pride ourselves on our deep technical knowledge and hands-on experience.
                            Our team deals with a wide variety of makes and models, ensuring that no matter what
                            equipment you have, we can service it. Our core areas of expertise include:
                        </p>
                        <ul className="expertise-list">
                            <li><strong>Heating:</strong> Keeping your spaces warm and comfortable during colder months.</li>
                            <li><strong>Ventilation:</strong> Ensuring proper air flow and quality for healthy environments.</li>
                            <li><strong>Air Conditioning (HVAC):</strong> Installation and repair of modern AC systems.</li>
                            <li><strong>Refrigeration:</strong> Expert diagnostics and fixes for fridges, freezers, and cold rooms.</li>
                        </ul>

                        <h3>Why Choose Us?</h3>
                        <p>
                            At Davick Refrigeration, customer satisfaction is our top priority. We combine professional
                            workmanship with friendly service to ensure your systems run efficiently, saving you money on energy bills and preventing costly breakdowns.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Technician working" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
