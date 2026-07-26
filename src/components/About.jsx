import { Wrench, Users, GitBranch } from 'lucide-react';

const About = () => (
  <section className="sect" id="about">
    <p className="sect__tag rv">COMPANY｜關於嘟嘟數位</p>
    <h2 className="rv">原廠只做一件事：把產品做好</h2>
    <p className="sect__lead rv">
      研發、資安與版本演進由我們負責。導入建置與售後陪跑交給授權經銷夥伴，
      他們比我們更靠近你的產業與現場。
    </p>
    <div className="cols">
      <div className="col rv">
        <h3><Wrench aria-hidden="true" />產品研發</h3>
        <p>
          DuDuClaw 每月固定發版，安全修補當天出貨。功能路線圖公開在
          GitHub，客戶回報的問題直接進開發排程。
        </p>
      </div>
      <div className="col rv">
        <h3><Users aria-hidden="true" />經銷體系</h3>
        <p>
          台灣市場的銷售、導入與陪跑輔導由總經銷統籌。
          原廠不直售，商務條件請洽總經銷。
        </p>
      </div>
      <div className="col rv">
        <h3><GitBranch aria-hidden="true" />開源社群</h3>
        <p>
          核心以開源授權釋出，開發者可以自架、自管、自己改。
          issue 與 PR 我們看得很勤。
        </p>
      </div>
    </div>
  </section>
);

export default About;
