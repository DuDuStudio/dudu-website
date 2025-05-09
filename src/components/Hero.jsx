import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>嘟嘟數位科技有限公司</h1>
        <p className={styles.subtitle}>DuDu Technology Ltd.</p>
        <p className={styles.tagline}>做完沒用，做好才行。</p>
      </div>
    </section>
  );
}

export default Hero; 