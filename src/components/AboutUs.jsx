import React from 'react';
import styles from './AboutUs.module.css';

function AboutUs() {
  const values = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '追求卓越',
      description: '我們對品質有著不懈追求，每一個專案都力求完美，為客戶交付值得驕傲的作品。'
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '品質至上',
      description: '堅持高標準的開發流程和嚴格的測試程序，確保每個產品都能穩定運行、無懈可擊。'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '高效執行',
      description: '我們深知時間寶貴，在確保品質的同時，以高效率的工作方式為客戶節省時間成本。'
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '夥伴關係',
      description: '我們視客戶為長期合作夥伴，提供持續的技術支援與顧問服務，共創長遠價值。'
    }
  ];

  return (
    <section id="about" className={styles.aboutSection} aria-labelledby="about-title">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>About Us</span>
          <h2 id="about-title" className={styles.sectionTitle}>關於我們</h2>
          <div className={styles.divider}></div>
        </div>

        {/* Story Content */}
        <div className={styles.storyWrapper}>
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <p className={styles.highlight}>
                嘟嘟數位科技有限公司成立於 2023 年，是一支對卓越品質有著不懈追求的專業團隊。
              </p>
              <p>
                我們堅信每一次的交付，都應是值得驕傲的代表作。有感於市場上許多專案成果的參差不齊，
                我們更堅定了以精湛的專業素養與嚴謹的態度，為客戶打造不僅滿足當下需求，
                更能為未來發展奠定穩固基礎、創造長遠價值的數位解決方案。
              </p>
              <p>
                <strong>「追求卓越，止於至善」</strong>是我們的核心理念。
                我們深知時間的寶貴，並致力於在確保頂尖品質的前提下，
                提供最高效率的服務，與客戶共創卓越成就。
              </p>
            </div>
            
            {/* Company Name Badge */}
            <div className={styles.companyBadge}>
              <span className={styles.companyNameEn}>DuDu Technology Ltd.</span>
              <span className={styles.companyNameZh}>嘟嘟數位科技有限公司</span>
            </div>
          </div>

          {/* Visual Element */}
          <div className={styles.visualElement}>
            <div className={styles.visualCard}>
              <div className={styles.visualIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className={styles.visualText}>創新驅動</span>
            </div>
            <div className={styles.visualCard}>
              <div className={styles.visualIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className={styles.visualText}>品質保證</span>
            </div>
            <div className={styles.visualCard}>
              <div className={styles.visualIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className={styles.visualText}>用心服務</span>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className={styles.valuesSection}>
          <h3 className={styles.valuesTitle}>我們的核心價值</h3>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <article 
                key={value.id} 
                className={styles.valueCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.valueIcon}>
                  {value.icon}
                </div>
                <h4 className={styles.valueTitle}>{value.title}</h4>
                <p className={styles.valueDescription}>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
