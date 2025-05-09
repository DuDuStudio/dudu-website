import React from 'react';
import styles from './ContactUs.module.css';

function ContactUs() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.title}>聯絡我們</h2>
        <p className={styles.intro}>
          我們期待與您一同打造卓越的數位產品。若您有任何專案需求或疑問，歡迎隨時透過以下方式與我們聯繫：
        </p>
        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <h3 className={styles.contactType}>Email (業務洽詢)</h3>
            <a href="mailto:sales@dudustudio.monster" className={styles.contactLink}>sales@dudustudio.monster</a>
          </div>
          <div className={styles.contactItem}>
            <h3 className={styles.contactType}>Email (一般資訊)</h3>
            <a href="mailto:info@dudustudio.monster" className={styles.contactLink}>info@dudustudio.monster</a>
          </div>
          <div className={styles.contactItem}>
            <h3 className={styles.contactType}>電話</h3>
            <a href="tel:0971753062" className={styles.contactLink}>0971-753-062</a>
          </div>
        </div>
        <p className={styles.availability}>
          服務時間：週一至週五 09:00 - 18:00 (國定假日除外)
        </p>
      </div>
    </section>
  );
}

export default ContactUs; 