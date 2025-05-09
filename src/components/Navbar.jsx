import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png'; // Assuming logo.png is in src/assets

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <a href="#" onClick={() => scrollToSection('hero')} className={styles.logoLink}>
          <img src={logo} alt="DuDu Technology Ltd. Logo" className={styles.logo} />
        </a>

        {/* Hamburger Icon for mobile */}
        <button 
          className={`${styles.hamburgerIcon} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navMenu} ${isMobileMenuOpen ? styles.navMenuOpen : ''}`}>
          <li className={styles.navItem}>
            <a href="#hero" onClick={() => scrollToSection('hero')} className={styles.navLink}>首頁</a>
          </li>
          <li className={styles.navItem}>
            <a href="#about" onClick={() => scrollToSection('about')} className={styles.navLink}>關於我們</a>
          </li>
          <li className={styles.navItem}>
            <a href="#services" onClick={() => scrollToSection('services')} className={styles.navLink}>服務項目</a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact" onClick={() => scrollToSection('contact')} className={styles.navLink}>聯絡我們</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 