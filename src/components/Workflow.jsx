const SCENARIOS = [
  { title: '整理資訊與交付草稿', request: '把這份會議資料整理成待辦與摘要。', setup: '限定可讀的資料範圍，訂好輸出格式。', review: '人工核對來源與內容後，再對外使用。' },
  { title: '讓日常工作有交接', request: '追蹤任務進度，遇到缺件時回報給我。', setup: '設定任務、回報通道與負責員工。', review: '在儀表板檢查紀錄，確認下一步。' },
  { title: '協助查詢業務系統', request: '查詢 Odoo 的訂單資料，整理待處理項目。', setup: '連接系統帳號，先給必要的查詢權限。', review: '涉及修改時，另行確認工具權限與審批設定。' },
];

const Workflow = () => (
  <section className="sect" id="workflow">
    <p className="eyebrow rv">從一件工作開始</p>
    <h2 className="rv">先想好交辦什麼，再決定接哪些工具</h2>
    <p className="sect__lead rv">以下是工作情境示意，並非實測成果。展開一個情境，看看除了交辦文字，還需要準備什麼。</p>
    <div className="scenarios rv">
      {SCENARIOS.map((scenario, index) => (
        <details key={scenario.title} open={index === 0}>
          <summary><span className="mono">0{index + 1}</span>{scenario.title}</summary>
          <div className="scenario-body">
            <p className="scenario-request">「{scenario.request}」</p>
            <dl><div><dt>事先設定</dt><dd>{scenario.setup}</dd></div><div><dt>人工確認</dt><dd>{scenario.review}</dd></div></dl>
          </div>
        </details>
      ))}
    </div>
    <ol className="steps rv" aria-label="導入步驟">
      <li><span className="mono">01</span><h3>定義一件可檢查的工作</h3><p>列出輸入、產出與完成條件，從低風險任務開始。</p></li>
      <li><span className="mono">02</span><h3>設定員工與最小權限</h3><p>選擇 runtime、資料範圍及工具，確認哪些操作需要人工批准。</p></li>
      <li><span className="mono">03</span><h3>檢查結果，再擴大範圍</h3><p>以實際資料測試，核對輸出與紀錄，再討論團隊導入。</p></li>
    </ol>
    <div className="hero__cta rv">
      <a className="btn btn--secondary" href="https://duduclaw.dudustudio.monster/" target="_blank" rel="noopener noreferrer">前往產品站開始試用</a>
      <a className="btn btn--secondary" href="#partners">需要導入協助</a>
    </div>
  </section>
);

export default Workflow;
