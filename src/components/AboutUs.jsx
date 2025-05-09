import React from 'react';
import styles from './AboutUs.module.css';

function AboutUs() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <h2 className={styles.title}>關於我們</h2>
        <div className={styles.story}>
          <p>
            嘟嘟數位科技有限公司成立於2023年。我們是一支對卓越品質有著不懈追求的專業團隊，堅信每一次的交付，都應是值得我們驕傲的代表作。
          </p>
          <p>
            有感於市場上許多專案成果的參差不齊，我們更堅定了以精湛的專業素養與嚴謹的態度，為客戶打造不僅滿足當下需求，更能為未來發展奠定穩固基礎、創造長遠價值的數位解決方案。
          </p>
          <p>
            『追求卓越，止於至善』是我們的核心理念。我們深知時間的寶貴，並致力於在確保頂尖品質的前提下，提供最高效率的服務，與客戶共創卓越成就。
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs; 