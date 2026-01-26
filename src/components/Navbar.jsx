import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: 'hero', label: '首頁' },
    { id: 'about', label: '關於我們' },
    { id: 'services', label: '服務項目' },
    { id: 'contact', label: '聯絡我們' }
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
        <div className={styles.navContainer}>
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, 'hero')} 
            className={styles.logoLink}
            aria-label="嘟嘟數位科技 - 返回首頁"
          >
            <img src={logo} alt="嘟嘟數位科技 Logo" className={styles.logo} />
            <span className={styles.logoText}>DuDu Tech</span>
          </a>

          {/* Desktop Navigation */}
          <ul className={styles.navMenu}>
            {navItems.map((item) => (
              <li key={item.id} className={styles.navItem}>
                <a 
                  href={`#${item.id}`} 
                  onClick={(e) => scrollToSection(e, item.id)} 
                  className={styles.navLink}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className={styles.ctaButton}
          >
            免費諮詢
          </a>

          {/* Mobile Menu Button */}
          <button 
            className={`${styles.hamburgerIcon} ${isMobileMenuOpen ? styles.open : ''}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? '關閉選單' : '開啟選單'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <ul className={styles.mobileNavList}>
            {navItems.map((item, index) => (
              <li 
                key={item.id} 
                className={styles.mobileNavItem}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a 
                  href={`#${item.id}`} 
                  onClick={(e) => scrollToSection(e, item.id)} 
                  className={styles.mobileNavLink}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className={styles.mobileNavItem} style={{ animationDelay: '0.4s' }}>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className={styles.mobileCta}
              >
                免費諮詢
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
