import { Check } from 'lucide-react';

const POINTS = [
  '用職務、權限與主管層級定義 AI 員工',
  '透過 LINE、Telegram、Slack 等通道接收與回報工作',
  '依需求設定 MCP 工具與 Odoo 等系統的連線及授權',
  '依操作與設定進行審批，從儀表板查看任務與稽核紀錄',
];

const Product = () => (
  <section className="sect" id="product">
    <p className="sect__tag rv">PRODUCTS｜兩條產品線</p>
    <h2 className="rv">讓 AI 幫你做事，也替你把關</h2>
    <p className="sect__lead rv">嘟嘟數位做兩條產品線：DuDuClaw 把 AI 變成有職務與權限的員工（平台與 OS）；Vettalon 用多個模型互相覆核，替你的程式碼找出真漏洞。兩者都能從自己的電腦開始。</p>
    <article className="prod rv">
      <div className="prod__head">
        <img src="/logo.png" alt="" width="40" height="44" />
        <div>
          <h3 className="prod__name">DuDuClaw</h3>
          <p className="prod__type">在自己的電腦上部署 AI 員工平台</p>
        </div>
        <span className="prod__oss">Apache 2.0 開源核心</span>
      </div>
      <p className="prod__desc">適合想先用現有 macOS、Linux 或 Windows 電腦測試工作流程的開發者與團隊。內建儀表板，可選擇 AI runtime，逐一設定員工與工具。</p>
      <ul className="prod__points">
        {POINTS.map((point) => <li key={point}><Check aria-hidden="true" />{point}</li>)}
      </ul>
      <figure className="product-flow" aria-label="DuDuClaw 工作流程示意">
        <figcaption>工作流程示意 · 非實際執行畫面</figcaption>
        <ol>
          <li><span>交辦</span><strong>通訊通道／儀表板</strong><p>說明工作與完成條件</p></li>
          <li><span>執行</span><strong>AI 員工＋已授權工具</strong><p>在職務與權限範圍內工作</p></li>
          <li><span>確認</span><strong>任務／審批／稽核</strong><p>檢查產出，必要時人工決定</p></li>
        </ol>
      </figure>
      <div className="prod__cta">
        <a className="btn btn--brand" href="https://duduclaw.dudustudio.monster/" target="_blank" rel="noopener noreferrer">看產品與安裝方式</a>
        <a className="btn btn--ghost" href="https://github.com/zhixuli0406/DuDuClaw" target="_blank" rel="noopener noreferrer">查看原始碼</a>
      </div>
    </article>
    <article className="prod prod--os rv">
      <div className="prod__head">
        <div>
          <h3 className="prod__name">DuDuClaw OS</h3>
          <p className="prod__type">整合平台的 x86-64 Linux 作業系統</p>
        </div>
        <span className="prod__oss">pre-GA · 技術試用</span>
      </div>
      <p className="prod__desc">適合願意驗證硬體與系統映像的技術使用者。Yocto 映像整合桌面、DuDuClaw 平台、唯讀根目錄與 A/B 更新回退，提供專用系統的另一個起點。</p>
      <div className="os-status">
        <p><strong>已有紀錄：</strong>整碟映像做過 QEMU 開機驗證。</p>
        <p><strong>仍有未驗證流程：</strong>安裝器與部分功能；真實硬體開機與相容性也尚未驗證。請先閱讀映像版本、硬體需求與安裝注意事項。</p>
      </div>
      <div className="prod__cta">
        <a className="btn btn--brand" href="https://os.duduclaw.dudustudio.monster/" target="_blank" rel="noopener noreferrer">了解 OS 與試用前提</a>
        <a className="btn btn--ghost" href="https://github.com/zhixuli0406/DuDuClaw-OS/releases" target="_blank" rel="noopener noreferrer">查看映像與版本紀錄</a>
      </div>
    </article>
    <article className="prod prod--vettalon rv">
      <div className="prod__head">
        <div>
          <h3 className="prod__name">Vettalon</h3>
          <p className="prod__type">多模型對抗式程式碼資安稽核</p>
        </div>
        <span className="prod__oss">Apache 2.0 開源核心</span>
      </div>
      <p className="prod__desc">適合在意程式碼安全的開發者與團隊。讓不同家族的 AI 模型分頭找洞、再交叉覆核彼此的發現，壓下誤報，留下值得人看的候選。程式碼在你的機器上分析，不經我們手。開源核心可塞進 CI；企業版加上桌面 App、企業報告與供應鏈獵捕。</p>
      <ul className="prod__points">
        <li><Check aria-hidden="true" />多家族 finder／verifier 交叉覆核，壓低誤報</li>
        <li><Check aria-hidden="true" />碼不離機：預設零網路，模型後端自己挑</li>
        <li><Check aria-hidden="true" />供應鏈獵捕：稽核相依套件，只送 name@version</li>
      </ul>
      <div className="prod__cta">
        <a className="btn btn--brand" href="https://vettalon.dudustudio.monster/" target="_blank" rel="noopener noreferrer">看 Vettalon 官網</a>
        <a className="btn btn--ghost" href="https://github.com/zhixuli0406/vettalon" target="_blank" rel="noopener noreferrer">查看原始碼</a>
      </div>
    </article>
    <p className="section-note rv">本地部署不等於完全離線。DuDuClaw 使用雲端 AI runtime 時，提示內容與必要上下文會傳給所選服務廠商。Vettalon 的 AI 審查片段只送到你自己設定的模型；用本機 Ollama 則完全不出機器。</p>
  </section>
);

export default Product;
