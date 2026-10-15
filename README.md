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

使用 React 19、Vite 6、lucide-react 與一般全域 CSS；沒有 CSS Modules。字型為 Avenir Next（Apple 裝置內建）與 Google Fonts 的 Nunito Sans，中文用系統字型。`npm run build` 產生 `dist/`。部署與發佈需另行授權。

## 實際結構與閱讀順序

```text
src/
  App.jsx                    # 主頁章節順序與 useReveal
  main.jsx                   # React 入口
  index.css                  # C1 色彩 token、深色模式、元件與響應式樣式
  assets/brand/*.svg         # C1 標誌（公司、DuDuClaw、Vettalon），以 ?raw 內嵌
  useReveal.js               # 單次入場；支援 reduced motion
  components/
    BrandMark.jsx            # 內嵌 SVG 標誌；深色模式只改 ink 層
    Nav.jsx                  # 標誌＋文字商標；保留手機上的全部主要導航
    Hero.jsx                 # 定位、按目的選擇入口、兩條產品線卡片
    Product.jsx              # 兩條產品線：DuDuClaw（平台／OS）與 Vettalon
    Workflow.jsx             # 可展開的工作情境與三步導入
    About.jsx                # 原廠／總經銷責任及公開證據
    Partners.jsx             # 正式合作夥伴名牌與企業導入，導流 Future Corp
    Faq.jsx                  # 原生 details 常見問題
    Contact.jsx              # 試用、企業導入、原廠技術回饋的下一步
    SiteFooter.jsx           # 公司識別（含統編）、原廠聯絡、產品、法務
public/
  favicon.svg / favicon.ico  # 公司標誌（C1）
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
```

重新產生 og.png（macOS）：

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars \
  --user-data-dir="$(mktemp -d)" --force-device-scale-factor=1 --window-size=1200,630 --screenshot=public/og.png "file://$PWD/scripts/og.html"
```

## 視覺與內容規則

- 視覺依 C1 識別規範（`Dudu_Brand_C1_Web/WEB-DESIGN-SPEC.md`）：米白底、海軍藍文字、公司輔色銀灰只作裝飾；DuDuClaw 用琥珀、Vettalon 用藍綠，各自只出現在自己的產品區塊。左側 4px 色條是固定識別元素。深色模式跟隨系統 `prefers-color-scheme`。
- 標誌一律用 `src/assets/brand/` 的 SVG，不要重畫、不要加底色圓框；舊的 DUDU STUDIO 金色標誌已停用。
- Vettalon 不可寫「程式碼不離開你的電腦」：預設 quick 模式在本機跑開源掃描器，deep 模式接雲端模型時程式碼會送到該廠商，只有全用 Ollama 才完全留在本機。
- 參考 [unvibe.site](https://unvibe.site/) 的資訊順序：明確定位 → 產品內容 → 工作流程 → 可查證證據 → FAQ → 下一步，不複製其視覺、推薦、使用量或價格。
- 正式合作區塊目前只呈現已確認的 Future Corp；文字名牌不是商標。使用到的 AI 廠商與工具不能當成官方合作或推薦背書。
- 工作流程與情境必須標示「示意」，不可當成實測成果或產品截圖。
- 平台功能以 [DuDuClaw README](https://github.com/zhixuli0406/DuDuClaw) 與文件為準，避免無根據的通道數、一鍵全整合、固定發版或修補時程承諾。
- 本地部署不表示資料不出門：雲端 runtime 會傳送提示與必要上下文給所選廠商；外部工具依連線設定傳送資料。
- OS 必須清楚標示 pre-GA、整碟映像有 QEMU 開機驗證紀錄、安裝器與部分功能仍有未驗證流程、真機尚未驗證；OS 和平台版本分開，以各自 release 文件為準。
- DuDuClaw 核心為 Apache 2.0，商業擴充另有條件。
- 台灣商業授權、企業導入、教育訓練與支援導流至正式總經銷 [Future Corp](https://www.futurecorp.tw/)。產品問題／開源貢獻及一般公司聯絡保留 info@dudustudio.monster。
- 手機不隱藏主要導航；保留鍵盤 focus、原生 details、reduced motion 和跳到主內容連結。這些實作不代表完成全站無障礙認證。

## 品牌與聯絡

嘟嘟數位科技有限公司（Dudu Technology Ltd.，統一編號 94139082），DuDuClaw 與 Vettalon 開發原廠。

- 原廠信箱：info@dudustudio.monster
- 電話：0971-753-062
- LINE：@dudustudio
- 正式總經銷：https://www.futurecorp.tw/

網站內容調整紀錄見 [CHANGELOG.md](CHANGELOG.md)。
