/**
 * LegalBanner Component
 * 
 * A prominent banner displaying legal links (Privacy Policy & Terms of Service)
 * to satisfy Google OAuth verification requirements.
 */

import styles from './LegalBanner.module.css';

const LegalBanner = () => {
  const legalLinks = [
    {
      href: '/privacy.html',
      label: '隱私權政策',
      labelEn: 'Privacy Policy'
    },
    {
      href: '/terms.html',
      label: '服務條款',
      labelEn: 'Terms of Service'
    }
  ];

  return (
    <section className={styles.legalBanner} aria-label="Legal Information">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.text}>
            使用我們的服務即表示您同意以下條款：
          </p>
          <div className={styles.links}>
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.linkIcon}>
                  {index === 0 ? (
                    // Shield icon for Privacy
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ) : (
                    // Document icon for Terms
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  )}
                </span>
                <span className={styles.linkText}>
                  <span className={styles.linkLabel}>{link.label}</span>
                  <span className={styles.linkLabelEn}>{link.labelEn}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalBanner;
