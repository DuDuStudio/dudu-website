import { Check } from 'lucide-react';

const POINTS = [
  '本地端執行，對話與憑證留在自己的機器',
  '接上 LINE、Telegram、Slack 等 9 種通訊通道',
  'Odoo ERP、Google Workspace、Notion、GitHub 一鍵串接',
  '不可逆操作先送審批，行為契約與稽核紀錄可回放',
];

const Product = () => (
  <section className="sect" id="product">
    <p className="sect__tag rv">PRODUCT｜旗艦產品</p>
    <h2 className="rv">DuDuClaw：把 AI 員工裝進你自己的電腦</h2>
    <article className="prod rv">
      <div className="prod__head">
        <img src="/logo.png" alt="" width="40" height="44" />
        <div>
          <p className="prod__name">DuDuClaw</p>
          <p className="prod__type">本地端 AI 員工平台</p>
        </div>
        <span className="prod__oss">開源核心</span>
      </div>
      <p className="prod__desc">
        一顆執行檔，內建儀表板。AI 員工有職務說明、權限範圍與主管層級，
        會在群組值班、互相委派工作，卡住才來找你拍板。
      </p>
      <ul className="prod__points">
        {POINTS.map((p) => (
          <li key={p}>
            <Check aria-hidden="true" />
            {p}
          </li>
        ))}
      </ul>
      <div className="prod__cta">
        <a className="btn btn--brand" href="https://duduclaw.dudustudio.monster/" target="_blank" rel="noopener noreferrer">
          前往產品官網
        </a>
        <a className="btn btn--ghost" href="https://github.com/zhixuli0406/DuDuClaw" target="_blank" rel="noopener noreferrer">
          GitHub 原始碼
        </a>
      </div>
    </article>
  </section>
);

export default Product;
