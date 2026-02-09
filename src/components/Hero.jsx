import React from 'react';
import styles from './Hero.module.css';

function Hero() {
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

  return (
    <section id="hero" className={styles.heroSection} aria-label="Hero section">
      {/* Background Elements */}
      <div className={styles.bgDecoration}>
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>
        <div className={styles.bgGrid}></div>
      </div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          {/* Company Name - Prominent Display */}
          <div className={styles.companyBrand}>
            <h2 className={styles.companyName}>嘟嘟數位科技有限公司</h2>
            <span className={styles.companyNameEn}>DuDu Technology Ltd.</span>
          </div>

          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span>專業數位解決方案</span>
          </div>

          {/* Main Heading */}
          <h1 className={styles.title}>
            <span className={styles.titleLine}>打造卓越</span>
            <span className={styles.titleGradient}>數位體驗</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            專注於網站設計、APP開發與系統架設，
            <br className={styles.brDesktop} />
            以創新技術和精湛工藝，為您的企業建立強大數位競爭力。
          </p>

          {/* AI Products Description */}
          <div className={styles.appDescription}>
            <p className={styles.appDescText}>
              我們開發的 <strong>AI 甘特圖生成器</strong>、<strong>AI 專案看板</strong> 與 <strong>AI Knowledge Hub</strong>，
              透過人工智慧技術協助您進行專案規劃、任務管理與知識整合，全方位提升團隊協作效率。
            </p>
          </div>

          {/* Tagline */}
          <p className={styles.tagline}>
            「做完沒用，做好才行。」
          </p>

          {/* Privacy Policy Link - Prominent */}
          <div className={styles.legalNotice}>
            <a href="/privacy.html" className={styles.privacyLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.privacyIcon}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              隱私權政策
            </a>
            <span className={styles.legalDivider}>|</span>
            <a href="/terms.html" className={styles.privacyLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.privacyIcon}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              服務條款
            </a>
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaGroup}>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className={styles.ctaPrimary}
            >
              <span>立即諮詢</span>
              <svg className={styles.ctaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a 
              href="#services" 
              onClick={(e) => scrollToSection(e, 'services')}
              className={styles.ctaSecondary}
            >
              <span>瀏覽服務</span>
            </a>
          </div>

          {/* Stats */}
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>成功專案</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>客戶滿意</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>技術支援</span>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className={styles.heroVisual}>
          <div className={styles.visualCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.codeBlock}>
                <span className={styles.codeLine}>
                  <span className={styles.codeKeyword}>const</span>
                  <span className={styles.codeVar}> success</span>
                  <span className={styles.codeOp}> = </span>
                  <span className={styles.codeFunc}>createWith</span>
                  <span className={styles.codeParen}>(</span>
                </span>
                <span className={styles.codeLine}>
                  <span className={styles.codeString}>  "創意"</span>
                  <span className={styles.codePunc}>,</span>
                </span>
                <span className={styles.codeLine}>
                  <span className={styles.codeString}>  "技術"</span>
                  <span className={styles.codePunc}>,</span>
                </span>
                <span className={styles.codeLine}>
                  <span className={styles.codeString}>  "熱情"</span>
                </span>
                <span className={styles.codeLine}>
                  <span className={styles.codeParen}>)</span>
                  <span className={styles.codePunc}>;</span>
                </span>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className={styles.floatingElement1}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.floatingElement2}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.floatingElement3}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <span className={styles.scrollText}>向下捲動</span>
      </div>
    </section>
  );
}

export default Hero;
