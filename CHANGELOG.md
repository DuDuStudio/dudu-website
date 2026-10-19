# Change log

## Unreleased

### Changed
- 2026-10-18 全頁 UI／UX 重設：需求選擇、可見產品比較、各產品開始路徑、原廠與夥伴角色、聯絡窗口。移除巨型 Dudu 字標與裝飾導覽／頁尾，WebGL 移至獨立展示窗，所有文字與控制使用純色背景與正常文流。
- 移除首頁導覽列下方重複的公司 Logo 與「台灣 AI 軟體原廠」標示，保留導覽列的公司識別。
- 移除關於區塊的裝飾概念圖、搭配標語與圖說，讓研發、導入與社群責任直接接在公司介紹之後。
- 公司首頁使用真正 WebGL2 七層 3D 絲帶匯聚，三產品切換同步改變構形、材質與 DOM 目的頁；移除舊 CSS 軌道與中心巨型 plinth。
- 字體採本地 Uncut Sans，附 SIL OFL 1.1 授權；網站執行不依賴字型 CDN。
- Build 加入 React SSR 靜態預渲染，使首頁在無 JavaScript 時仍有完整文字、原生展開內容、產品連結與真實 GPU poster。
- 首頁全面改為 D 標誌中心的互動品牌探索台：DuDuClaw、DuDuClaw OS 與 Vettalon 選擇會同步改變主視覺、說明、概念流程與 CTA。產品以可展開 dossier 呈現，降低重複卡片。
- 首頁更新為冷銀灰／海軍藍幾何視覺，所有 Logo 保留正式原色 PNG；深色環境以銀灰展示面承托，不改色、不加透明度。保留原導航、anchor、法務頁、SEO 與原廠／總經銷分工。

- 全站改用 C1 視覺識別：米白／海軍藍配色、銀灰公司輔色、DuDuClaw 琥珀與 Vettalon 藍綠產品色、4px 色條、Nunito Sans／Avenir Next 字型；首頁、隱私權政策、服務條款與 DuDuClaw Google 資料隱私頁一併更新，深色模式跟隨系統設定。
- 公司標誌換成 C1 標誌（導覽列、產品區、頁尾、法務頁、favicon、apple-touch-icon、JSON-LD logo）；導覽列與首頁標語的公司名稱改為 Dudu Technology Ltd.／嘟嘟數位科技有限公司。
- 產品區分成兩條產品線呈現，DuDuClaw 與 DuDuClaw OS 共用 DuDuClaw 標誌，Vettalon 使用自己的標誌。
- 新的 1200×630 og:image（og.png），Twitter 卡片改為 summary_large_image；JSON-LD 補上 legalName、taxID 與英文名稱。

### Added
- 一個 WebGL context、延遲載入、DPR 上限、offscreen／hidden 停止、持久暫停控制、即時 reduced-motion 與 context-lost／no-WebGL poster fallback。
- `npm run test:world` 驗證六種瀏覽器情境及 renderer 狀態；Playwright 僅作開發依賴。
- 產品選擇支援 roving tab、方向鍵、Home／End、觸控，並提供明確已選狀態及狀態朗讀。細指標微傾斜、產品切換與入場動畫均遵守 reduced-motion。


### Fixed

- 所有公司與產品標誌保留原始彩色 PNG；頁首、頁尾、法務頁與深色主題不再切換白色或公司單色圖。
- 所有品牌與圖示素材從 `Dudu_Brand_C1_Final` 正式包重新匯出，並記錄來源及成品 SHA-256，供後續核對。
- 導覽列、產品區、頁尾、法務頁與社群分享圖改用使用者指定的 `Dudu_Brand_C1_Final/01_Logos/` 正式 C1 PNG 圖片，移除向量描圖標誌的使用；深色模式也保留原始彩色版本。
- favicon、Apple 與 manifest 圖示重新由透明公司圖片匯出，移除原本不透明的米白底；深色模式也保留原色透明 PNG，更新圖示快取版本。
- 修正兩條產品線的銷售管道說法前後矛盾：首頁「原廠不直售」沒有限定產品，但 meta 描述與 llms.txt 寫 Vettalon 企業版由本廠直接提供。現在寫明 DuDuClaw 由總經銷 Future Corp 提供商業授權與導入、原廠不直售，Vettalon 企業版與商業授權由 Dudu Technology Ltd. 直接提供（關於、合作夥伴、聯絡、FAQ）；頁面 FAQ 與 llms-full.txt 逐題一致，新增 Vettalon 資料保護一題；JSON-LD 不再把 DuDuClaw 列為本公司直接提供的商品，改標由 Future Corp 提供。
- 修正 Vettalon 的資料流向說明：原本寫「碼不離機」「程式碼在你的機器上分析」，實際上 deep 模式接雲端模型時程式碼會送到該模型廠商（首頁、llms.txt、llms-full.txt）。

### Removed
- 舊金色 DUDU STUDIO 標誌（public/logo.png、src/assets/logo.png）、Vite／React 範本圖示，以及未被引用的 public/*.jpeg。
- 不再使用的自架字型套件 @fontsource-variable/inter、@fontsource-variable/geist-mono。

### Security
- Preserve server security headers on static assets and the health response; use relative redirects behind Cloud Run and hide nginx version details. This changes hosting response configuration only, not the accepted public site build.
- Refresh the existing compatible npm dependency ranges to patched lockfile versions for the static website build and development tools. No framework major version or public product functionality changes.

- 沿用 MDS 視覺，重整官網閱讀路徑：定位、產品、工作情境、導入流程、原廠與夥伴、FAQ、下一步。
- 新增 DuDuClaw OS 介紹，明標 pre-GA、整碟映像的 QEMU 開機驗證紀錄；安裝器、部分功能與真機仍有未驗證流程。
- 新增明確標記的流程／工作情境示意，以原生 details 展開內容；不以示意取代實測證據。
- 新增正式合作夥伴 Future Corp 文字名牌及導入／培訓／支援分工，企業導入直接導流其官網，和原廠產品回饋／開源貢獻分開。
- 移除資料不出門、固定通道數、一鍵串接、固定發版及當日修補承諾，補充雲端 runtime 與外部工具的資料流向。
- 新增公開原始碼、授權、版本紀錄、問題追蹤與 OS 文件入口；手機保留主要導航。
- 更新 README 的實際 React 元件、CSS 結構、內容規則及驗證指令；同步更新 SEO 描述。
