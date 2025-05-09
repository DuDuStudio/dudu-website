import React from 'react';
import styles from './Services.module.css';

const servicesData = [
  {
    id: 1,
    title: '網頁設計開發',
    description: '提供美觀與實用兼具的客製化網頁設計與前後端開發服務，打造符合品牌形象與使用者需求的網站。' // Placeholder description
  },
  {
    id: 2,
    title: 'APP設計開發',
    description: 'ios 與 Android 平台的原生或混合式應用程式設計與開發，提供流暢的使用者體驗。' // Placeholder description
  },
  {
    id: 3,
    title: '系統架設',
    description: '依據業務需求提供穩固、安全的伺服器架構與雲端解決方案，確保系統高效運行。' // Placeholder description
  },
  {
    id: 4,
    title: 'SEO 優化',
    description: '透過專業的搜尋引擎優化策略，提升網站在搜尋結果中的排名，增加曝光與流量。' // Placeholder description
  },
  {
    id: 5,
    title: '客製化系統開發',
    description: '針對特定業務流程與管理需求，開發量身訂製的資訊系統，提升營運效率。' // Placeholder description
  }
];

function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <h2 className={styles.title}>服務項目</h2>
        <div className={styles.servicesGrid}>
          {servicesData.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services; 