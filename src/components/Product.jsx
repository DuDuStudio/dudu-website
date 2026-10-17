import { ArrowUpRight, ArrowRight } from 'lucide-react';
import BrandMark from './BrandMark';
import { PRODUCTS } from '../data/products';

const DETAILS = [
  {
    intro: '從現有電腦開始。',
    text: '在 macOS、Linux 或 Windows 上部署平台，選擇 AI runtime，再逐一設定員工與工具。適合想先驗證一件工作的開發者與團隊。',
    points: ['職務與權限：定義員工可以做什麼、由誰管理。', '通訊與工具：依需求連接 LINE、Telegram、Slack、MCP 或 Odoo。', '檢查與決定：從儀表板查看任務、審批與稽核紀錄。'],
    license: 'Apache 2.0 開源核心，商業擴充另有條件。',
  },
  {
    intro: '把平台帶進作業系統。',
    text: '以 Yocto 建立的 x86-64 Linux，整合桌面、DuDuClaw 平台、唯讀根目錄與 A/B 更新回退。這是給願意驗證硬體與系統映像的技術使用者的另一個起點。',
    points: ['已有紀錄：整碟映像做過 QEMU 開機驗證。', '仍待驗證：安裝器與部分功能流程。', '真實硬體：開機與相容性尚未驗證，請先閱讀版本與安裝注意事項。'],
    license: 'pre-GA 技術試用，OS 與平台版本各自管理。',
  },
  {
    intro: '找出風險，也檢查誤報。',
    text: '讓不同家族的 finder 與 verifier 分頭找洞、交叉覆核。開源核心可放進 CI；企業版另提供桌面 App、企業報告與供應鏈獵捕。',
    points: ['quick：在使用者機器上執行開源掃描器。', 'deep：自己選擇模型後端，雲端模型會收到程式碼片段。', '供應鏈獵捕：稽核相依套件，只送 name@version。'],
    license: 'Apache 2.0 開源核心，企業版由原廠直接提供。',
  },
];

export default function Product() {
  return (
    <section className="sect product-index" id="product" aria-labelledby="product-heading">
      <div className="section-heading"><p className="eyebrow">產品比較</p><h2 id="product-heading">你想從哪裡開始？</h2><p className="sect__lead">現有電腦、專用系統，或開發流程。依工作需求選擇，不必一次採用全部。</p></div>
      <div className="product-dossiers">
        {PRODUCTS.map((product,index)=>(
          <article className={`product-dossier product-dossier--${product.id}`} key={product.id}>
            <header className="dossier-heading"><BrandMark name={product.mark} size={52}/><div><h3>{product.name}</h3><p>{product.category}</p></div></header>
            <div className="dossier-statement"><h4>{DETAILS[index].intro}</h4><p>{DETAILS[index].text}</p><p className="dossier-license">{DETAILS[index].license}</p></div>
            <div className="dossier-actions"><a className="dossier-destination" href={product.href}>前往產品站 <ArrowUpRight size={18} aria-hidden="true"/></a><details className="dossier-details"><summary>查看能力與資料流向</summary><ul>{DETAILS[index].points.map(point=><li key={point}><ArrowRight size={16} aria-hidden="true"/>{point}</li>)}</ul><a href={product.source}>原始碼與版本 ↗</a></details></div>
          </article>
        ))}
      </div>
    </section>
  );
}
