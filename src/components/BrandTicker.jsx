import lgLogo from '../assets/brands/lg.jpg';
import ramtonsLogo from '../assets/brands/ramtons.jpg';
import samsungLogo from '../assets/brands/samsung.jpg';
import hisenseLogo from '../assets/brands/hisense.png';
import './BrandTicker.css';

const brands = [
    { name: 'Samsung', logo: samsungLogo },
    { name: 'LG', logo: lgLogo },
    { name: 'Hisense', logo: hisenseLogo },
    { name: 'Ramtons', logo: ramtonsLogo },
];

const BrandTicker = () => {
    return (
        <section className="brand-ticker-section">
            <div className="container">
                <h3 className="brand-title">We Service All Major Brands</h3>
                <div className="ticker-wrap">
                    <div className="ticker">
                        {/* Duplicated list for seamless infinite scroll */}
                        {[...brands, ...brands, ...brands].map((brand, index) => (
                            <div className="brand-item" key={index}>
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="brand-logo"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://via.placeholder.com/150x50?text=${brand.name}`;
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandTicker;
