# Change log

## Unreleased

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
