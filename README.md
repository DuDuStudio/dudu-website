# 嘟嘟數位科技有限公司官方網站

DuDu Studio 公司官網。介紹原廠、DuDuClaw AI 員工平台與 DuDuClaw OS，讓訪客依目的選擇自行試用、企業導入或原廠技術回饋。

## 開發與驗證

```sh
npm ci
npm run dev
npm run build
npm run lint
npm run preview
```

使用 React 19、Vite 6、lucide-react 與一般全域 CSS；沒有 CSS Modules。`npm run build` 產生 `dist/`。部署與發佈需另行授權。

## 實際結構與閱讀順序

```text
src/
  App.jsx                    # 主頁章節順序與 useReveal
  main.jsx                   # React 入口與自架字型
  index.css                  # MDS token、全域／元件與響應式樣式
  useReveal.js               # 單次入場；支援 reduced motion
  components/
    Nav.jsx                  # 保留手機上的全部主要導航
    Hero.jsx                 # 定位與按目的選擇入口
    Product.jsx              # 平台／OS 比較、工作流程示意與資料流說明
    Workflow.jsx             # 可展開的工作情境與三步導入
    About.jsx                # 原廠／總經銷責任及公開證據
    Partners.jsx             # 正式合作夥伴名牌與企業導入，導流 Future Corp
    Faq.jsx                  # 原生 details 常見問題
    Contact.jsx              # 試用、企業導入、原廠技術回饋的下一步
    SiteFooter.jsx           # 原廠聯絡、產品、法務
public/
  logo.png                   # 品牌標誌
  privacy.html
  terms.html
  duduclaw/privacy/index.html # Google 資料隱私說明
  robots.txt
  sitemap.xml
index.html                   # SEO、Organization JSON-LD 與既有 Analytics
```

## 視覺與內容規則

- 保留原有 MDS 藍／白（及系統深色模式）、OKLCH token、浮島、點陣與卡片。Inter Variable、Geist Mono 由 npm 套件自架；中文沿用系統字型。
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

嘟嘟數位科技有限公司（DuDu Technology Ltd.），DuDuClaw 開發原廠。

- 原廠信箱：info@dudustudio.monster
- 電話：0971-753-062
- LINE：@dudustudio
- 正式總經銷：https://www.futurecorp.tw/

網站內容調整紀錄見 [CHANGELOG.md](CHANGELOG.md)。
