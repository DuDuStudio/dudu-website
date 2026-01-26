import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only">
        Skip to main content
      </a>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main id="main-content">
        <Hero />
        <AboutUs />
        <Services />
        <ContactUs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
