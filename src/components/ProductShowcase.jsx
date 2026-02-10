import { useState } from 'react';
import { FaShoppingCart, FaInfoCircle, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ProductShowcase.css';

const ProductShowcase = () => {
    const products = [
        {
            id: 1,
            name: "Bitzer Condensing Unit R404A",
            price: "280,000",
            image: "/assets/bitzer-unit.jpg",
            description: "A robust semi-hermetic condensing unit designed for heavy-duty commercial refrigeration applications like cold rooms and blast freezers.",
            howItWorks: "This unit compresses R404A refrigerant to high pressure, circulating it through the condenser coils to release heat. The cooled liquid refrigerant is then pumped to your evaporator, creating the intense cold needed for industrial preservation.",
            features: ["High Efficiency", "Low Noise Operation", "Durable Construction"]
        },
        {
            id: 2,
            name: "Danfoss Performer Compressor",
            price: "280,000",
            image: "/assets/danfoss-performer.jpg",
            description: "The Danfoss Performer scroll compressor is the industry standard for air conditioning and heat pump applications, delivering superior efficiency.",
            howItWorks: "Its advanced scroll set design provides maximum efficiency and reliability by minimizing friction and leakage. It is designed for longevity in demanding commercial environments.",
            features: ["Industry Standard", "Superior Efficiency", "High Reliability"]
        },
        {
            id: 3,
            name: "Industrial Cold Room Condensers",
            price: "110,000",
            image: "/assets/cold-room-condenser.jpg",
            description: "High-capacity air-cooled condensers designed for efficient heat rejection in commercial cold rooms and freezer applications.",
            howItWorks: "Hot high-pressure refrigerant gas flows through the coil tubes. Powerful fans blow ambient air across the fins, removing heat and condensing the gas back into a liquid state for the expansion valve.",
            features: ["High Heat Transfer", "Weather Resistant", "Heavy Duty Fans"]
        },
        {
            id: 4,
            name: "Cold Room Evaporator",
            price: "130,000",
            image: "/assets/cold-room-evaporator.jpg",
            description: "Industrial-grade evaporator unit designed for optimal airflow and rapid cooling in large-scale cold storage facilities.",
            howItWorks: "Liquid refrigerant expands inside the coil, absorbing heat from the room. The fans circulate air through the cold fins, ensuring even temperature distribution throughout the cold room.",
            features: ["Rapid Cooling", "Optimal Airflow", "Corrosion Resistant"]
        }
    ];

    return (
        <section className="product-section section-padding">
            <div className="container">
                <div className="section-header center-text">
                    <h2 className="section-title">Quality <span className="text-blue">Equipment</span> For Sale</h2>
                    <p className="section-subtitle">Top-rated machinery for your industrial cooling needs.</p>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="product-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="product-image">
                                <span className="stock-tag">In Stock</span>
                                <img src={product.image} alt={product.name} />
                            </div>

                            <div className="product-details">
                                <div className="product-header">
                                    <h3>{product.name}</h3>
                                    <div className="product-price">KES {product.price}</div>
                                </div>

                                <div className="product-block">
                                    <h4><FaInfoCircle /> What is it?</h4>
                                    <p>{product.description}</p>
                                </div>

                                <div className="product-block">
                                    <h4><FaCheck /> How it works:</h4>
                                    <p>{product.howItWorks}</p>
                                </div>

                                <div className="product-features">
                                    {product.features.map((feature, i) => (
                                        <span key={i} className="feature-pill">{feature}</span>
                                    ))}
                                </div>

                                <Link to="/contact" className="btn btn-primary btn-block">
                                    <FaShoppingCart /> Inquire / Buy Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
