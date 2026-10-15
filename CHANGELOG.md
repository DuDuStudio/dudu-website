# Change log

## Unreleased

### Changed
- 全站改用 C1 視覺識別：米白／海軍藍配色、銀灰公司輔色、DuDuClaw 琥珀與 Vettalon 藍綠產品色、4px 色條、Nunito Sans／Avenir Next 字型；首頁、隱私權政策、服務條款與 DuDuClaw Google 資料隱私頁一併更新，深色模式跟隨系統設定。
- 公司標誌換成 C1 標誌（導覽列、產品區、頁尾、法務頁、favicon、apple-touch-icon、JSON-LD logo）；導覽列與首頁標語的公司名稱改為 Dudu Technology Ltd.／嘟嘟數位科技有限公司。
- 產品區分成兩條產品線呈現，DuDuClaw 與 DuDuClaw OS 共用 DuDuClaw 標誌，Vettalon 使用自己的標誌。
- 新的 1200×630 og:image（og.png），Twitter 卡片改為 summary_large_image；JSON-LD 補上 legalName、taxID 與英文名稱。

### Fixed
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
