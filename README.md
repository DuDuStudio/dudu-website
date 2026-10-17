# 嘟嘟數位科技有限公司官方網站

Dudu Technology Ltd.（嘟嘟數位科技有限公司）公司官網，網域 www.dudustudio.monster。介紹原廠與兩條產品線：DuDuClaw AI 員工平台（含 DuDuClaw OS）與 Vettalon 程式碼資安稽核，讓訪客依目的選擇自行試用、企業導入或原廠技術回饋。

## 開發與驗證

```sh
npm ci
npm run dev
npm run build
npm run lint
npm run preview
```

使用 React 19、Vite 6、lucide-react、原生 WebGL2 與一般全域 CSS；沒有 CSS Modules。英文字體為本地 Uncut Sans，中文用系統繁中字體。`npm run build` 產生 `dist/`。部署與發佈需另行授權。

## 實際結構與閱讀順序

```text
src/
  App.jsx                    # 主頁章節順序與 useReveal
  main.jsx                   # React 入口
  index.css                  # 流場＋編輯式排版、字體、原廠亮色環境與手機構圖
  useReveal.js               # 內容預設可見，進場只位移；支援 reduced motion
  world/vortex.js             # 原生 WebGL2 解析絲帶場，生命週期與暫停
  entry-server.jsx           # 靜態首頁預渲染入口
  components/
    BrandMark.jsx            # img 載入正式原色 PNG；所有主題使用同一圖片
    Nav.jsx                  # 標誌＋文字商標；保留手機上的全部主要導航
    Hero.jsx                 # 依需求選產品、原生鍵盤 tabs 與獨立流場展示
    Product.jsx              # 三個產品的可見比較列，次要能力與資料流向可展開
    Workflow.jsx             # 三個產品各自的第一步與結果核對
    About.jsx                # 原廠／總經銷責任及公開證據
    Faq.jsx                  # 原生 details 常見問題
    Contact.jsx              # 試用、企業導入、原廠技術回饋的下一步
    SiteFooter.jsx           # 公司識別（含統編）、原廠聯絡、產品、法務
public/
  brand/*.png                # 原始 C1 圖片衍生的透明標誌（所有主題保留原色）
  favicon.ico, favicon-*.png  # 透明公司圖示；深色模式保留原色 PNG
  apple-touch-icon.png, icon-192.png, icon-512.png, site.webmanifest
  company-mark-512.png       # JSON-LD Organization logo
  og.png                     # 1200×630 社群分享圖，由 scripts/og.html 產生
  llms.txt, llms-full.txt
  privacy.html
  terms.html
  duduclaw/privacy/index.html # Google 資料隱私說明
  robots.txt
  sitemap.xml
index.html                   # SEO、Organization JSON-LD 與既有 Analytics
scripts/og.html              # og.png 的版型
scripts/brand-sources.json   # Final 素材來源、SHA-256、匯出參數及成品校驗碼
```

重新產生 og.png（macOS）：

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars \
  --user-data-dir="$(mktemp -d)" --force-device-scale-factor=1 --window-size=1200,630 --screenshot=public/og.png "file://$PWD/scripts/og.html"
```

## 視覺與內容規則

- 首頁以原生 WebGL2 解析流場為主視覺：亮銀白紙面與 navy 絲帶，DuDuClaw／OS 的分支帶琥珀、Vettalon 分支帶藍綠。原色 D／貓／V 保持 PNG，不重畫、不反白、不降低透明度。法務頁保持既有主題與版型。
- 標誌一律用 `public/brand/` 的透明 PNG，來源為 2026-10-16 產出的 `Dudu_Brand_C1_Final/01_Logos/<brand>/icon-color-native.png`。僅裁去全透明邊界、等比例縮放並置中至 512×512，不向量描圖或重畫。頁首、頁尾、產品區與法務頁在深色模式也使用同一原色 PNG，不切換白色、單色或套用色彩濾鏡。舊的 DUDU STUDIO 金色標誌已停用。
- Vettalon 不可寫「程式碼不離開你的電腦」：預設 quick 模式在本機跑開源掃描器，deep 模式接雲端模型時程式碼會送到該廠商，只有全用 Ollama 才完全留在本機。
- 參考 [unvibe.site](https://unvibe.site/) 的資訊順序：明確定位 → 產品內容 → 工作流程 → 可查證證據 → FAQ → 下一步，不複製其視覺、推薦、使用量或價格。
- 正式合作區塊目前只呈現已確認的 Future Corp；文字名牌不是商標。使用到的 AI 廠商與工具不能當成官方合作或推薦背書。
- 工作流程與情境必須標示「示意」，不可當成實測成果或產品截圖。
- 平台功能以 [DuDuClaw README](https://github.com/zhixuli0406/DuDuClaw) 與文件為準，避免無根據的通道數、一鍵全整合、固定發版或修補時程承諾。
- 本地部署不表示資料不出門：雲端 runtime 會傳送提示與必要上下文給所選廠商；外部工具依連線設定傳送資料。
- OS 必須清楚標示 pre-GA、整碟映像有 QEMU 開機驗證紀錄、安裝器與部分功能仍有未驗證流程、真機尚未驗證；OS 和平台版本分開，以各自 release 文件為準。
- DuDuClaw 核心為 Apache 2.0，商業擴充另有條件。
- DuDuClaw 在台灣的商業授權、企業導入、教育訓練與支援導流至正式總經銷 [Future Corp](https://www.futurecorp.tw/)。Vettalon 企業版與商業授權由原廠直接提供；產品問題／開源貢獻及一般公司聯絡保留 info@dudustudio.monster。
- 手機不隱藏主要導航；保留鍵盤 focus、原生 details、reduced motion 和跳到主內容連結。這些實作不代表完成全站無障礙認證。

## WebGL 品牌世界與驗證

首頁採產品工作室方向：先說明用途，再依工作需求選產品。海軍藍與銀灰構成主要閱讀面，產品選擇改變獨立展示窗裡的絲帶流場。原色透明 PNG 是獨立 DOM 圖像，不進 shader、不反白、不改形，已移除上一版中心巨型方形 plinth。首頁使用精心設計的固定亮色環境，作為四個產品網站中原廠的明確區別。

- `src/world/vortex.js`：單一原生 WebGL2 context，7 條程序生成的 3D ribbon triangle strips；頂點 shader 控制螺旋、深度、指標與產品構形，片段 shader 負責法線光照與同品牌材質。這是解析幾何流場，沒有宣稱實作 Navier–Stokes 流體模擬。
- `src/components/VortexWorld.jsx`：延遲 400ms 動態載入引擎，先顯示真實 GPU 畫面的 WebP poster；無 WebGL／context lost 保留完整畫面與所有 HTML 內容。Canvas 只承擔裝飾，所有文字、控制與 Logo 都在 DOM。
- `src/components/Hero.jsx`：產品 tabs 支援左右方向鍵、Home／End，連動 GPU 構形、說明與 CTA。滑鼠／觸控在場景上改變視角與曲面；不攔截垂直捲動。沒有拖曳才能使用的功能。
- 同一 context／同一 rAF 迴圈，DPR 上限 1.5，粗指標上限 1。頁面 hidden 或場景離屏停止迴圈；暫停按鈕會持久記錄選擇。Reduced motion 顯示定格，OS 偏好在使用中改變也立即生效；定格時選產品仍可更新一張靜態畫面。
- 文字與控制皆在純色背景的正常文流；流場無疊字。移除巨大重複字標、導航裝飾及頁尾口號。產品比較不必先展開；流程、原廠與夥伴、FAQ、聯絡窗口形成完整路徑。手機使用單欄，保留全部導航。
- `npm run build` 先建立 client 與 SSR bundle，再由 `scripts/prerender.mjs` 輸出完整首頁 HTML。主入口有預渲染內容時 hydrate，開發模式則正常 mount。No-JS 仍有完整文字、真圖片、原生 details 與三個產品連結。
- 字體採作者提供的 Uncut Sans variable WOFF2，自架並隨檔保留 SIL OFL 1.1 授權與來源。此授權允許隨程式碼散布；中文保持系統繁中字體，執行時不依賴 font CDN。

```sh
npm run build
npm run lint
npm run preview -- --host 127.0.0.1 --port 18871 --strictPort
# 另一個終端，Chrome 存在時使用本機 Chrome，否則使用已安裝的 Playwright Chromium
npm run test:world
```

`PREVIEW_URL` 可更換測試網址，`QA_DIR` 可更換截圖與結果目錄，預設 `/tmp/dudu-vortex-qa`。`scripts/verify-world.cjs` 驗證真 WebGL 單 canvas／DPR、產品鍵盤與 GPU mode、暫停、離屏停止、live reduced-motion、手機、不支援 WebGL、無 JS 與封鎖外部 CDN。Playwright 是開發依賴，不進網站 bundle。沒有本機 Chrome 時先執行 `npx playwright install chromium`。

本機瀏覽器驗證不等於真實手機 GPU、field Web Vitals 或使用者驗收；尚未部署。公開的主頁／法務 URL、SEO、analytics 與原廠／總經銷事實維持既有內容。

## 品牌與聯絡

嘟嘟數位科技有限公司（Dudu Technology Ltd.，統一編號 94139082），DuDuClaw 與 Vettalon 開發原廠。

- 原廠信箱：info@dudustudio.monster
- 電話：0971-753-062
- LINE：@dudustudio
- 正式總經銷：https://www.futurecorp.tw/

素材來源、正式包 manifest 校驗結果與成品 SHA-256 記錄於 `scripts/brand-sources.json`。`app-icon.ico` 與 `avatar-1024.png` 原檔帶底色，因此網站圖示由同一正式包的透明 PNG 轉出。

favicon 的 ICO（16／24／32／48／64／128／256）、PNG（32／48）、Apple（180）、manifest（192／512）與 JSON-LD logo 都從透明公司 PNG 匯出，保留 alpha。頁面以 `v=c1-color-20261016` 更新圖示快取；未來換圖時需同步更新所有頁面與 manifest 的版本字串。`scripts/og.html` 也使用同一組 PNG。

網站內容調整紀錄見 [CHANGELOG.md](CHANGELOG.md)。

## 2026-10-18 UI／UX 重設

首頁、產品比較、開始使用、原廠角色、聯絡窗口與全頁 CSS 重新設計。主導覽「聯絡窗口」先到分類入口，避免把 Vettalon 訪客導向 DuDuClaw 總經銷。主要控制至少 44px，原生 details 保留鍵盤操作。瀏覽器驗證使用 CUA；舊 `test:world` 腳本僅留作專案自動化入口，本輪未以 CLI 瀏覽器執行，不將過往結果視為新版驗收。
