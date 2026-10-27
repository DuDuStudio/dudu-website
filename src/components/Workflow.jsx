const STARTS = [
  { title:'讓 AI 處理第一件工作', product:'DuDuClaw', detail:'在現有電腦安裝平台，建立一位員工，設定資料與工具權限。先交辦一份能人工核對的摘要或待辦。', href:'https://duduclaw.dudustudio.monster/', action:'查看交辦與安裝方式' },
  { title:'體驗人與 AI 的工作空間', product:'DuDuClaw OS', detail:'先試操作接手流程，再閱讀映像與硬體條件。OS 目前為 pre-GA；已有 QEMU 開機紀錄，真實硬體仍待驗證。', href:'https://os.duduclaw.dudustudio.monster/', action:'體驗雙工作空間' },
  { title:'檢查一個程式碼專案', product:'Vettalon', detail:'從本機 quick 掃描開始。需要 AI 交叉覆核時，再設定模型與資料範圍，由人判讀風險與修正建議。', href:'https://vettalon.dudustudio.monster/', action:'查看稽核流程' },
];
export default function Workflow(){return <section className="sect start-guide" id="workflow" aria-labelledby="start-heading"><div className="start-intro"><p className="eyebrow">開始使用</p><h2 id="start-heading">先試一件<br/>能檢查結果的事。</h2><p className="sect__lead">三個入口各自獨立。選定範圍、跑一次、核對結果，再決定要走多遠。</p></div><ol className="start-paths">{STARTS.map((item,index)=><li key={item.product}><span className="start-number" aria-hidden="true">0{index+1}</span><div><p className="eyebrow">{item.product}</p><h3>{item.title}</h3><p>{item.detail}</p><a href={item.href}>{item.action} ↗</a></div></li>)}</ol></section>}
