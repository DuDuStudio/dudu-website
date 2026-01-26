import React from 'react';
import styles from './ContactUs.module.css';

function ContactUs() {
  const contactInfo = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: '業務洽詢',
      value: 'sales@dudustudio.monster',
      href: 'mailto:sales@dudustudio.monster',
      description: '專案諮詢與報價'
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: '一般資訊',
      value: 'info@dudustudio.monster',
      href: 'mailto:info@dudustudio.monster',
      description: '合作與其他詢問'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: '電話聯繫',
      value: '0971-753-062',
      href: 'tel:0971753062',
      description: '週一至週五 09:00-18:00'
    }
  ];

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: '免費初步諮詢'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: '快速回覆保證'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: '詳細專案報價'
    }
  ];

  return (
    <section id="contact" className={styles.contactSection} aria-labelledby="contact-title">
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Column - Info */}
          <div className={styles.infoColumn}>
            <span className={styles.sectionLabel}>Contact Us</span>
            <h2 id="contact-title" className={styles.sectionTitle}>聯絡我們</h2>
            <div className={styles.divider}></div>
            
            <p className={styles.intro}>
              無論您有專案需求、技術問題，或想進一步了解我們的服務，
              都歡迎隨時與我們聯繫。我們期待與您一同打造卓越的數位產品。
            </p>

            {/* Features */}
            <div className={styles.features}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    {feature.icon}
                  </div>
                  <span className={styles.featureText}>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className={styles.businessHours}>
              <div className={styles.hoursIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.hoursContent}>
                <span className={styles.hoursLabel}>服務時間</span>
                <span className={styles.hoursValue}>週一至週五 09:00 - 18:00</span>
                <span className={styles.hoursNote}>(國定假日除外)</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Cards */}
          <div className={styles.cardsColumn}>
            {contactInfo.map((contact) => (
              <a 
                key={contact.id} 
                href={contact.href} 
                className={styles.contactCard}
                aria-label={`${contact.label}: ${contact.value}`}
              >
                <div className={styles.cardIcon}>
                  {contact.icon}
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cardLabel}>{contact.label}</span>
                  <span className={styles.cardValue}>{contact.value}</span>
                  <span className={styles.cardDescription}>{contact.description}</span>
                </div>
                <div className={styles.cardArrow}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            ))}

            {/* Quick Contact Note */}
            <div className={styles.quickNote}>
              <div className={styles.noteIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className={styles.noteText}>
                我們通常會在 24 小時內回覆您的訊息。若有緊急事項，建議直接撥打電話聯繫。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
