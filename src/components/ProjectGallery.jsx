import './ProjectGallery.css';

const ProjectGallery = () => {
    const projects = [
        {
            id: 1,
            title: 'Commercial Cold Room Fix',
            description: 'Fixed a compressor failure for a local butchery.',
            image: '/assets/cold-room-project.jpg',
            category: 'Commercial'
        },
        {
            id: 2,
            title: 'Home HVAC Installation',
            description: 'Complete AC system setup for a modern apartment.',
            image: '/assets/hvac-project.jpg',
            category: 'Residential'
        },
        {
            id: 3,
            title: 'Supermarket Fridge Maintenance',
            description: 'Routine servicing and gas refill for display units.',
            image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
            category: 'Maintenance'
        }
    ];

    return (
        <section className="gallery-section section-padding">
            <div className="container">
                <div className="section-header center-text">
                    <h2 className="section-title">Recent <span className="text-blue">Work</span></h2>
                    <p className="section-subtitle">See how we bring cool comfort back to our clients.</p>
                </div>

                <div className="gallery-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="gallery-card"
                            data-aos="zoom-in"
                            data-aos-delay={index * 150}
                        >
                            <div className="gallery-img-wrapper">
                                <img src={project.image} alt={project.title} />
                                <div className="category-tag">{project.category}</div>
                            </div>
                            <div className="gallery-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;
