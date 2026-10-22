import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from './theme/ThemeContext';
import ThemeCustomizer from './components/ThemeCustomizer/ThemeCustomizer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BookRepair from './pages/BookRepair';
import Contact from './pages/Contact';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
            offset: 100
        });
    }, []);

    return (
        <ThemeProvider>
            <Router>
                <div className="app-container">
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/book-repair" element={<BookRepair />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </main>
                    <ScrollToTop />
                    <Footer />
                    <ThemeCustomizer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
