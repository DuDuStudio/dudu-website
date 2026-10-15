import { Check } from 'lucide-react';
import BrandMark from './BrandMark';

const POINTS = [
  '用職務、權限與主管層級定義 AI 員工',
  '透過 LINE、Telegram、Slack 等通道接收與回報工作',
  '依需求設定 MCP 工具與 Odoo 等系統的連線及授權',
  '依操作與設定進行審批，從儀表板查看任務與稽核紀錄',
];

const VETTALON_POINTS = [
  '多家族 finder／verifier 交叉覆核，壓低誤報',
  '預設 quick 模式在本機跑開源掃描器；deep 模式的模型後端自己挑',
  '供應鏈獵捕：稽核相依套件，只送 name@version',
];

const Product = () => (
  <section className="sect" id="product">
    <p className="eyebrow rv">產品</p>
    <h2 className="rv">兩條產品線</h2>

    <div className="line line--duduclaw">
      <p className="line__label rv">產品線一 · DuDuClaw</p>
      <article className="prod rv">
        <div className="prod__head">
          <BrandMark name="duduclaw" size={48} />
          <div>
            <h3 className="prod__name">DuDuClaw</h3>
            <p className="prod__type">在自己的電腦上部署 AI 員工平台</p>
          </div>
          <span className="prod__badge">Apache 2.0 開源核心</span>
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
          <a className="btn btn--primary" href="https://duduclaw.dudustudio.monster/" target="_blank" rel="noopener noreferrer">看產品與安裝方式</a>
          <a className="btn btn--secondary" href="https://github.com/zhixuli0406/DuDuClaw" target="_blank" rel="noopener noreferrer">查看原始碼</a>
        </div>
      </article>
      <article className="prod prod--os rv">
        <div className="prod__head">
          <BrandMark name="duduclaw" size={40} />
          <div>
            <h3 className="prod__name">DuDuClaw <span className="prod__os">OS</span></h3>
            <p className="prod__type">整合平台的 x86-64 Linux 作業系統</p>
          </div>
          <span className="prod__badge">pre-GA · 技術試用</span>
        </div>
        <p className="prod__desc">適合願意驗證硬體與系統映像的技術使用者。Yocto 映像整合桌面、DuDuClaw 平台、唯讀根目錄與 A/B 更新回退，提供專用系統的另一個起點。</p>
        <div className="os-status">
          <p><strong>已有紀錄：</strong>整碟映像做過 QEMU 開機驗證。</p>
          <p><strong>仍有未驗證流程：</strong>安裝器與部分功能；真實硬體開機與相容性也尚未驗證。請先閱讀映像版本、硬體需求與安裝注意事項。</p>
        </div>
        <div className="prod__cta">
          <a className="btn btn--primary" href="https://os.duduclaw.dudustudio.monster/" target="_blank" rel="noopener noreferrer">了解 OS 與試用前提</a>
          <a className="btn btn--secondary" href="https://github.com/zhixuli0406/DuDuClaw-OS/releases" target="_blank" rel="noopener noreferrer">查看映像與版本紀錄</a>
        </div>
      </article>
    </div>

    <div className="line line--vettalon">
      <p className="line__label rv">產品線二 · Vettalon</p>
      <article className="prod rv">
        <div className="prod__head">
          <BrandMark name="vettalon" size={48} />
          <div>
            <h3 className="prod__name">Vettalon</h3>
            <p className="prod__type">多模型對抗式程式碼資安稽核</p>
          </div>
          <span className="prod__badge">Apache 2.0 開源核心</span>
        </div>
        <p className="prod__desc">適合在意程式碼安全的開發者與團隊。讓不同家族的 AI 模型分頭找洞、再交叉覆核彼此的發現，壓下誤報，留下值得人看的候選。預設的 quick 模式在你的機器上跑開源掃描器，不經我們手；deep 模式若接雲端模型，程式碼會送到該模型廠商。開源核心可塞進 CI；企業版加上桌面 App、企業報告與供應鏈獵捕。</p>
        <ul className="prod__points">
          {VETTALON_POINTS.map((point) => <li key={point}><Check aria-hidden="true" />{point}</li>)}
        </ul>
        <div className="prod__cta">
          <a className="btn btn--primary" href="https://vettalon.dudustudio.monster/" target="_blank" rel="noopener noreferrer">看 Vettalon 官網</a>
          <a className="btn btn--secondary" href="https://github.com/zhixuli0406/vettalon" target="_blank" rel="noopener noreferrer">查看原始碼</a>
        </div>
      </article>
    </div>
    <p className="section-note rv">本地部署不等於完全離線。DuDuClaw 使用雲端 AI runtime 時，提示內容與必要上下文會傳給所選服務廠商。Vettalon 的 AI 審查片段只送到你自己設定的模型；用本機 Ollama 則完全不出機器。</p>
  </section>
);

export default Product;
