import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt, FaSnowflake, FaPalette } from 'react-icons/fa';
import { useTheme } from '../theme/ThemeContext';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { toggleCustomizer } = useTheme();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
                    <FaSnowflake className="logo-icon" />
                    <div className="logo-text">
                        <span className="logo-main">Davick</span>
                        <span className="logo-sub">Refrigeration</span>
                    </div>
                </Link>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="nav-theme-btn"
                            onClick={() => { toggleCustomizer(); setIsOpen(false); }}
                            aria-label="Customize Theme"
                            title="Customize Theme"
                        >
                            <FaPalette />
                        </button>
                    </li>
                    <li className="nav-item">
                        <Link to="/book-repair" className="nav-links-btn" onClick={toggleMenu}>
                            Book Repair
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
