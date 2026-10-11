import { Wrench, Users, GitBranch } from 'lucide-react';

const About = () => (
  <section className="sect" id="about">
    <p className="sect__tag rv">COMPANY｜關於嘟嘟數位</p>
    <h2 className="rv">誰負責產品，誰陪你導入</h2>
    <p className="sect__lead rv">
      嘟嘟數位負責產品研發、修正與版本演進。台灣商業授權、企業導入、教育訓練與支援由正式總經銷 Future Corp（未來企業股份有限公司）提供。
    </p>
    <div className="cols">
      <div className="col rv">
        <h3><Wrench aria-hidden="true" />產品研發</h3>
        <p>
          產品功能與限制以文件、原始碼及版本紀錄為準。可在 GitHub 查閱已發布內容、提出問題，或參與開發。
        </p>
      </div>
      <div className="col rv">
        <h3><Users aria-hidden="true" />經銷體系</h3>
        <p>
          Future Corp 統籌台灣市場的商業授權、導入與支援。
          原廠不直售；報價、服務範圍及時程請向總經銷確認。
        </p>
      </div>
      <div className="col rv">
        <h3><GitBranch aria-hidden="true" />開源社群</h3>
        <p>
          DuDuClaw 核心以 Apache 2.0 釋出，可依授權自架與修改。
          商業擴充另有授權條件，不能將開源核心等同所有付費功能。
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
