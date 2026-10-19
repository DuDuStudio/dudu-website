const QUESTIONS = [
  { question: 'DuDuClaw 與 DuDuClaw OS 有什麼不同？', answer: 'DuDuClaw 是可部署在現有電腦上的 AI 員工平台；DuDuClaw OS 則是整合平台與桌面的 Linux 作業系統映像。OS 使用獨立版本，目前為 pre-GA。已有 QEMU 開機驗證紀錄：整碟映像做過開機驗證，安裝器與部分功能仍有未驗證流程；真實硬體尚未驗證。' },
  { question: '資料都留在自己的電腦上嗎？', answer: '平台部署在本地，但資料流向取決於設定。使用雲端 AI runtime 時，提示與必要上下文會傳給所選廠商；MCP 與其他外部工具也可能傳送資料。導入前請確認模型服務、工具連線與資料範圍。' },
  { question: '我可以自己部署與修改嗎？', answer: 'DuDuClaw 與 Vettalon 的開源核心均採 Apache 2.0，可依授權使用與修改。商業擴充、企業版與支援另有條件：DuDuClaw 向總經銷 Future Corp 洽詢，Vettalon 直接向 Dudu Technology Ltd. 洽詢。' },
  { question: '接上業務系統後，就會自動完成所有工作嗎？', answer: '仍需要設定系統連線、帳號權限、員工職務與完成條件。AI 產出需要核對；先用範圍明確的工作驗證，再逐步開放工具與操作權限。' },
  { question: 'Vettalon 如何保護我的程式碼？', answer: 'Vettalon 的檢測在使用者機器上執行。AI 審查時，程式碼片段只送到使用者自己設定的模型（自己的 CLI 帳號或 API 金鑰）；用本機 Ollama 則完全不出機器。Dudu Technology Ltd. 不經手、不留存、不轉售。' },
  { question: '詢價、導入與技術問題應該找誰？', answer: 'DuDuClaw 的企業報價、商業授權、建置、教育訓練與支援請洽 Future Corp。Vettalon 的企業版與商業授權請直接洽 Dudu Technology Ltd.。產品原始碼問題可在 GitHub 提 issue；產品合作與原廠技術交流，可使用下方原廠聯絡資訊。' },
];

const Faq = () => (
  <section className="sect" id="faq">
    <h2 className="rv">你可能想先確認的事</h2>
    <div className="faq rv">
      {QUESTIONS.map(({ question, answer }) => (
        <details key={question}><summary>{question}</summary><p>{answer}</p></details>
      ))}
    </div>
  </section>
);

export default Faq;
