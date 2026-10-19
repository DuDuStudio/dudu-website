export const PRODUCTS = [
  {
    id: 'duduclaw', name: 'DuDuClaw', mark: 'duduclaw', category: 'AI 員工平台',
    title: '把工作交給 AI，\n把權限留在手上。',
    description: '在現有電腦上建立有職務、有權限的 AI 員工，從一件能檢查的工作開始。',
    href: 'https://duduclaw.dudustudio.monster/', cta: '探索 DuDuClaw',
    source: 'https://github.com/zhixuli0406/DuDuClaw',
    words: ['交辦工作', '授權工具', '檢查產出'],
    note: 'Apache 2.0 開源核心。雲端 runtime 會將提示與必要上下文傳給所選服務廠商。',
  },
  {
    id: 'os', name: 'DuDuClaw OS', mark: 'duduclaw', category: 'AI 原生 Linux',
    title: '給人與 AI 員工，\n一個共用的桌面。',
    description: '從平台延伸到作業系統，探索整合桌面、AI runtime 與更新回退的專用 Linux。',
    href: 'https://os.duduclaw.dudustudio.monster/', cta: '探索 DuDuClaw OS',
    source: 'https://github.com/zhixuli0406/DuDuClaw-OS',
    words: ['Linux 桌面', 'AI runtime', 'A/B 更新'],
    note: 'pre-GA 技術試用。整碟映像已有 QEMU 開機驗證；安裝器、部分流程與真實硬體尚未驗證。',
  },
  {
    id: 'vettalon', name: 'Vettalon', mark: 'vettalon', category: '程式碼資安稽核',
    title: '讓不同模型，\n互相檢查答案。',
    description: '多家族 AI 分頭尋找漏洞、交叉覆核，讓值得追查的程式碼風險浮上來。',
    href: 'https://vettalon.dudustudio.monster/', cta: '探索 Vettalon',
    source: 'https://github.com/zhixuli0406/vettalon',
    words: ['尋找漏洞', '交叉覆核', '人工判讀'],
    note: 'quick 在本機跑開源掃描器；deep 接雲端模型時會送出程式碼片段。全用 Ollama 才完全留在本機。',
  },
];
