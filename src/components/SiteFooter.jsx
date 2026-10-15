import BrandMark from './BrandMark';

const SiteFooter = () => (
  <footer className="footer">
    <div className="footer__in">
      <div className="footer__co">
        <BrandMark name="company-mono" size={36} className="footer__mark" />
        <p className="footer__id">
          <b>Dudu Technology Ltd.</b>
          <span>嘟嘟數位科技有限公司 · 統編 94139082</span>
          <span>DuDuClaw、Vettalon 開發原廠</span>
        </p>
      </div>
      <div className="footer__grp">
        <span>原廠聯絡</span>
        <a href="mailto:info@dudustudio.monster">info@dudustudio.monster</a>
        <a href="tel:+886971753062" className="mono">0971-753-062</a>
        <a href="https://line.me/R/ti/p/@dudustudio" target="_blank" rel="noopener noreferrer">LINE @dudustudio</a>
        <a href="https://github.com/zhixuli0406" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div className="footer__grp">
        <span>產品</span>
        <a href="https://duduclaw.dudustudio.monster/" target="_blank" rel="noopener noreferrer">DuDuClaw</a>
        <a href="https://os.duduclaw.dudustudio.monster/" target="_blank" rel="noopener noreferrer">DuDuClaw OS</a>
        <a href="https://vettalon.dudustudio.monster/" target="_blank" rel="noopener noreferrer">Vettalon</a>
        <a href="https://www.futurecorp.tw/" target="_blank" rel="noopener noreferrer">DuDuClaw 企業導入 · Future Corp</a>
      </div>
      <div className="footer__grp">
        <span>法務</span>
        <a href="/privacy.html">隱私權政策</a>
        <a href="/terms.html">服務條款</a>
        <a href="/duduclaw/privacy/">Google 資料隱私</a>
      </div>
      <p className="footer__legal">
        © {new Date().getFullYear()} Dudu Technology Ltd. · 嘟嘟數位科技有限公司 · 統編 94139082 · 保留所有權利。
      </p>
    </div>
  </footer>
);

export default SiteFooter;
