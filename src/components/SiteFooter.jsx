const SiteFooter = () => (
  <footer className="footer" id="contact">
    <div className="footer__in">
      <div className="footer__co">
        <b>嘟嘟數位科技有限公司</b>
        <p>DuDu Studio · DuDuClaw 開發原廠</p>
      </div>
      <div className="footer__grp">
        <span>聯絡</span>
        <a href="mailto:info@dudustudio.monster">info@dudustudio.monster</a>
        <a href="tel:+886971753062" className="mono">0971-753-062</a>
        <a href="https://line.me/R/ti/p/@dudustudio" target="_blank" rel="noopener noreferrer">LINE @dudustudio</a>
      </div>
      <div className="footer__grp">
        <span>產品</span>
        <a href="https://duduclaw.dudustudio.monster/" target="_blank" rel="noopener noreferrer">DuDuClaw</a>
        <a href="https://github.com/zhixuli0406/DuDuClaw" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div className="footer__grp">
        <span>法務</span>
        <a href="/privacy.html">隱私權政策</a>
        <a href="/terms.html">服務條款</a>
        <a href="/duduclaw/privacy/">Google 資料隱私</a>
      </div>
      <p className="footer__legal">
        © {new Date().getFullYear()} 嘟嘟數位科技有限公司 DuDu Technology Ltd. 保留所有權利。
      </p>
    </div>
  </footer>
);

export default SiteFooter;
