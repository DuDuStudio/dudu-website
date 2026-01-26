import React from 'react';
import styles from './Services.module.css';

const servicesData = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '網頁設計開發',
    subtitle: 'Web Development',
    description: '從品牌官網到電商平台，我們提供美觀與實用兼具的客製化網頁設計。採用最新技術，打造響應式設計（RWD），確保在各種裝置上都有完美體驗。',
    features: ['品牌形象網站', 'RWD 響應式設計', '電商購物網站', 'SEO 友善架構']
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'APP 設計開發',
    subtitle: 'Mobile App Development',
    description: '專業的 iOS 與 Android 應用程式開發服務，無論是原生開發或跨平台方案，我們都能為您打造流暢的行動體驗，讓您的服務觸及更多用戶。',
    features: ['iOS / Android 原生', '跨平台開發', 'UI/UX 設計', '後端 API 整合']
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '系統架設',
    subtitle: 'System Infrastructure',
    description: '依據您的業務需求，提供穩固、安全的伺服器架構與雲端解決方案。從規劃、建置到維運，確保您的系統能夠高效、穩定地運行。',
    features: ['雲端架構規劃', '伺服器管理', '資料庫設計', '系統效能優化']
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'SEO 優化',
    subtitle: 'Search Engine Optimization',
    description: '透過專業的搜尋引擎優化策略，從技術 SEO、內容優化到外部連結建立，全方位提升您的網站在搜尋結果中的排名，增加品牌曝光與流量。',
    features: ['關鍵字策略', '技術 SEO 優化', '內容優化建議', '排名追蹤報告']
  },
  {
    id: 5,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '客製化系統開發',
    subtitle: 'Custom System Development',
    description: '針對您的特定業務流程與管理需求，開發量身訂製的資訊系統。從需求分析到系統上線，提供完整的軟體開發服務，有效提升營運效率。',
    features: ['ERP / CRM 系統', '流程自動化', '數據分析平台', 'API 整合開發']
  }
];

function Services() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const section = document.getElementById('contact');
    if (section) {
      const navHeight = 80;
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className={styles.servicesSection} aria-labelledby="services-title">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Our Services</span>
          <h2 id="services-title" className={styles.sectionTitle}>服務項目</h2>
          <div className={styles.divider}></div>
          <p className={styles.sectionDescription}>
            我們提供全方位的數位服務，從網站開發到系統建置，
            <br className={styles.brDesktop} />
            以專業技術和創新思維，協助您實現商業目標。
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <article 
              key={service.id} 
              className={styles.serviceCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>
                <div className={styles.titleGroup}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <span className={styles.serviceSubtitle}>{service.subtitle}</span>
                </div>
              </div>
              
              <p className={styles.serviceDescription}>{service.description}</p>
              
              <ul className={styles.featureList}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>準備好開始您的專案了嗎？</h3>
            <p className={styles.ctaDescription}>
              與我們聯繫，獲取免費諮詢和專案報價。
            </p>
          </div>
          <a 
            href="#contact" 
            onClick={scrollToContact}
            className={styles.ctaButton}
          >
            <span>立即諮詢</span>
            <svg className={styles.ctaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
