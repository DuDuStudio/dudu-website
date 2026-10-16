const About = () => (
  <section className="sect" id="about">
    <p className="eyebrow rv">關於 Dudu Technology Ltd.</p>
    <h2 className="rv">誰負責產品，誰陪你導入</h2>
    <p className="sect__lead rv">
      Dudu Technology Ltd. 負責 DuDuClaw 與 Vettalon 的研發、修正與版本演進。DuDuClaw 在台灣的商業授權、企業導入、教育訓練與支援由正式總經銷 Future Corp（未來企業股份有限公司）提供；Vettalon 的企業版與商業授權由本廠直接提供。
    </p>
    <div className="cols">
      <div className="col rv">
        <h3>產品研發</h3>
        <p>
          產品功能與限制以文件、原始碼及版本紀錄為準。可在 GitHub 查閱已發布內容、提出問題，或參與開發。
        </p>
      </div>
      <div className="col rv">
        <h3>銷售與導入</h3>
        <p>
          DuDuClaw 由 Future Corp 統籌台灣市場的商業授權、導入與支援，原廠不直售；報價、服務範圍及時程請向總經銷確認。
          Vettalon 企業版由 Dudu Technology Ltd. 直接提供，請直接與原廠聯絡。
        </p>
      </div>
      <div className="col rv">
        <h3>開源社群</h3>
        <p>
          DuDuClaw 與 Vettalon 的開源核心都以 Apache 2.0 釋出，可依授權自架與修改。
          商業擴充與企業版另有授權條件，不能將開源核心等同所有付費功能。
        </p>
      </div>
    </div>
    <div className="evidence-links rv" aria-label="公開產品證據">
      <a href="https://github.com/zhixuli0406/DuDuClaw" target="_blank" rel="noopener noreferrer">原始碼與授權 ↗</a>
      <a href="https://github.com/zhixuli0406/DuDuClaw/releases" target="_blank" rel="noopener noreferrer">平台版本紀錄 ↗</a>
      <a href="https://github.com/zhixuli0406/DuDuClaw/issues" target="_blank" rel="noopener noreferrer">問題追蹤 ↗</a>
      <a href="https://github.com/zhixuli0406/DuDuClaw-OS" target="_blank" rel="noopener noreferrer">OS 文件與原始碼 ↗</a>
    </div>
  </section>
);

export default About;
