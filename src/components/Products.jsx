import React from 'react';
import styles from './Products.module.css';

const productsData = [
  {
    id: 1,
    name: 'AI 甘特圖生成器',
    subtitle: 'AI Gantt Chart Generator',
    description: '透過自然語言對話，AI 自動生成專業甘特圖。無需複雜操作，只要描述您的專案需求，即可獲得完整的時程規劃。',
    features: [
      'AI 智能對話生成',
      '關鍵路徑分析 (CPM)',
      '資源分配管理',
      '風險預警分析',
      '智能時程建議',
      '專案模板庫'
    ],
    highlights: [
      { label: '生成速度', value: '30 秒' },
      { label: '模板數量', value: '20+' },
      { label: '滿意度', value: '98%' }
    ],
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    accentColor: '#3b82f6',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11h3v3H8z" fill="currentColor" opacity="0.3"/>
        <path d="M13 14h3v3h-3z" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
    url: 'https://ganttai.dudustudio.monster',
    badge: 'AI 驅動'
  },
  {
    id: 2,
    name: 'AI 專案看板',
    subtitle: 'AI Kanban Board',
    description: 'AI 驅動的敏捷看板，與甘特圖無縫整合。在規劃階段使用甘特圖，執行階段使用看板，形成完整的專案管理閉環。',
    features: [
      '甘特圖雙向同步',
      '拖拉排序操作',
      'AI 卡片描述生成',
      '標籤與篩選系統',
      '團隊協作功能',
      '@mention 標記'
    ],
    highlights: [
      { label: '同步速度', value: '即時' },
      { label: '看板數量', value: '無限' },
      { label: '協作人數', value: '不限' }
    ],
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    accentColor: '#8b5cf6',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12h6M9 16h6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    url: 'https://kanban.dudustudio.monster',
    badge: '甘特圖整合'
  },
  {
    id: 3,
    name: 'AI Knowledge Hub',
    subtitle: 'AI 知識中心',
    description: '智能知識管理平台，整合團隊所有文件與知識。透過 AI 驅動的語意搜尋與自動分類，讓團隊知識觸手可及，加速決策與協作。',
    features: [
      'AI 語意搜尋',
      '智能文件分類',
      '知識圖譜視覺化',
      'AI 摘要生成',
      '團隊知識共享',
      '多格式文件支援'
    ],
    highlights: [
      { label: '搜尋精準度', value: '95%+' },
      { label: '支援格式', value: '50+' },
      { label: '回應速度', value: '<1秒' }
    ],
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    accentColor: '#10b981',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    url: 'https://knowledgeai.dudustudio.monster',
    badge: '知識管理'
  }
];

function Products() {
  return (
    <section id="products" className={styles.productsSection} aria-labelledby="products-title">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Our Products</span>
          <h2 id="products-title" className={styles.sectionTitle}>我們的產品</h2>
          <div className={styles.divider}></div>
          <p className={styles.sectionDescription}>
            結合 AI 技術與專案管理專業，打造智能化的專案管理工具，
            <br className={styles.brDesktop} />
            讓您的團隊工作更有效率，專案執行更加順暢。
          </p>
        </div>

        {/* Products Grid */}
        <div className={styles.productsGrid}>
          {productsData.map((product, index) => (
            <article 
              key={product.id} 
              className={styles.productCard}
              style={{ 
                '--accent-color': product.accentColor,
                '--gradient': product.gradient,
                animationDelay: `${index * 0.15}s` 
              }}
            >
              {/* Badge */}
              <div className={styles.badge}>{product.badge}</div>

              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper} style={{ background: product.gradient }}>
                  {product.icon}
                </div>
                <div className={styles.titleGroup}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <span className={styles.productSubtitle}>{product.subtitle}</span>
                </div>
              </div>

              {/* Description */}
              <p className={styles.productDescription}>{product.description}</p>

              {/* Highlights */}
              <div className={styles.highlights}>
                {product.highlights.map((highlight, idx) => (
                  <div key={idx} className={styles.highlightItem}>
                    <span className={styles.highlightValue}>{highlight.value}</span>
                    <span className={styles.highlightLabel}>{highlight.label}</span>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className={styles.featuresSection}>
                <h4 className={styles.featuresTitle}>主要功能</h4>
                <ul className={styles.featureList}>
                  {product.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a 
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.productButton}
                style={{ background: product.gradient }}
              >
                <span>立即體驗</span>
                <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </article>
          ))}
        </div>

        {/* Integration Info */}
        <div className={styles.integrationSection}>
          <div className={styles.integrationContent}>
            <div className={styles.integrationIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.integrationText}>
              <h3 className={styles.integrationTitle}>三大產品，完美整合</h3>
              <p className={styles.integrationDescription}>
                AI 甘特圖規劃專案時程，AI 看板追蹤任務執行，AI Knowledge Hub 整合團隊知識。
                三者無縫連動，打造完整的智能工作流程，讓團隊協作更加順暢。
              </p>
            </div>
          </div>
          <div className={styles.integrationVisual}>
            <div className={styles.connectionLine}>
              <div className={styles.productDot} style={{ background: '#3b82f6' }}>
                <span>甘特圖</span>
              </div>
              <div className={styles.syncArrow}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12h16m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 12H4m7 7l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.productDot} style={{ background: '#8b5cf6' }}>
                <span>看板</span>
              </div>
              <div className={styles.syncArrow}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12h16m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 12H4m7 7l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.productDot} style={{ background: '#10b981' }}>
                <span>知識庫</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
