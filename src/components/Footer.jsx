import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/logo.png';

function Footer() {
  const currentYear = new Date().getFullYear();

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
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navigation = [
    { id: 'hero', label: '首頁' },
    { id: 'about', label: '關於我們' },
    { id: 'services', label: '服務項目' },
    { id: 'products', label: '我們的產品' },
    { id: 'contact', label: '聯絡我們' }
  ];

  const legalLinks = [
    { href: '/privacy.html', label: '隱私權政策' },
    { href: '/terms.html', label: '服務條款' }
  ];

  const services = [
    '網頁設計開發',
    'APP 設計開發',
    '系統架設',
    'SEO 優化',
    '客製化系統開發'
  ];

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <a href="#hero" onClick={scrollToTop} className={styles.logoLink}>
              <img src={logo} alt="嘟嘟數位科技" className={styles.logo} />
              <div className={styles.brandText}>
                <span className={styles.brandName}>DuDu Technology</span>
                <span className={styles.brandNameZh}>嘟嘟數位科技有限公司</span>
              </div>
            </a>
            <p className={styles.brandDescription}>
              專注於網站設計、APP開發與系統架設，以創新技術和精湛工藝，
              為企業打造數位競爭優勢。
            </p>
            <p className={styles.tagline}>「做完沒用，做好才行。」</p>
          </div>

          {/* Navigation Column */}
          <div className={styles.navColumn}>
            <h3 className={styles.columnTitle}>快速連結</h3>
            <ul className={styles.navList}>
              {navigation.map((item) => (
                <li key={item.id}>
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
          </div>

          {/* Services Column */}
          <div className={styles.servicesColumn}>
            <h3 className={styles.columnTitle}>服務項目</h3>
            <ul className={styles.servicesList}>
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    onClick={(e) => scrollToSection(e, 'services')}
                    className={styles.serviceLink}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.contactColumn}>
            <h3 className={styles.columnTitle}>聯絡資訊</h3>
            <div className={styles.contactList}>
              <a href="mailto:sales@dudustudio.monster" className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>sales@dudustudio.monster</span>
              </a>
              <a href="tel:0971753062" className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>0971-753-062</span>
              </a>
              <div className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>週一至週五 09:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>© {currentYear} DuDu Technology Ltd. All Rights Reserved.</p>
            <p className={styles.copyrightZh}>嘟嘟數位科技有限公司 版權所有</p>
            <div className={styles.legalLinks}>
              {legalLinks.map((link, index) => (
                <a key={index} href={link.href} className={styles.legalLink}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className={styles.backToTop}
            aria-label="返回頂部"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
