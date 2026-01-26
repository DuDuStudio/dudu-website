# 嘟嘟數位科技有限公司 - 官方網站

DuDu Technology Ltd. 官方形象網站，採用 React + Vite 技術架構建置。

## 專案概述

這是一個現代化的企業形象網站，具備以下特色：

- **商業美感設計**：採用專業的藍色系配色，搭配漸層效果和微動畫
- **SEO 優化**：完整的 meta tags、結構化數據（JSON-LD）、sitemap 和 robots.txt
- **響應式設計**：支援桌面、平板和手機等各種裝置
- **無障礙設計**：符合 WCAG 標準的可及性設計
- **高效能**：使用 Vite 建置工具，確保快速載入

## 技術架構

### 前端框架
- **React 19** - 使用最新版本的 React
- **Vite 6** - 快速的建置工具
- **CSS Modules** - 模組化的樣式管理

### 專案結構

```
/workspace/
├── public/
│   ├── logo.png          # 網站 Logo
│   ├── sitemap.xml       # 網站地圖（SEO）
│   ├── robots.txt        # 搜尋引擎爬蟲設定
│   └── vite.svg
├── src/
│   ├── assets/           # 靜態資源
│   │   ├── logo.png
│   │   └── react.svg
│   ├── components/       # React 組件
│   │   ├── Navbar.jsx / Navbar.module.css      # 導航列
│   │   ├── Hero.jsx / Hero.module.css          # 首頁區塊
│   │   ├── AboutUs.jsx / AboutUs.module.css    # 關於我們
│   │   ├── Services.jsx / Services.module.css  # 服務項目
│   │   ├── ContactUs.jsx / ContactUs.module.css # 聯絡我們
│   │   └── Footer.jsx / Footer.module.css      # 頁腳
│   ├── App.jsx           # 主應用組件
│   ├── main.jsx          # 應用入口
│   └── index.css         # 全域樣式與設計系統
├── index.html            # HTML 模板（含 SEO meta tags）
├── package.json
├── vite.config.js
└── README.md
```

## 組件說明

### Navbar（導航列）
- 固定在頁面頂部
- 支援滾動時背景變化效果
- 響應式設計，手機版有漢堡選單
- 平滑滾動到各區塊功能

### Hero（首頁區塊）
- 吸引人的視覺設計
- 動態背景裝飾
- 公司標語展示
- CTA（行動呼籲）按鈕
- 統計數據展示
- 程式碼視覺卡片

### AboutUs（關於我們）
- 公司故事介紹
- 核心價值觀展示（追求卓越、品質至上、高效執行、夥伴關係）
- 視覺化圖標卡片

### Services（服務項目）
- 五大服務項目展示
  - 網頁設計開發
  - APP 設計開發
  - 系統架設
  - SEO 優化
  - 客製化系統開發
- 每項服務包含圖標、描述和功能列表
- 底部 CTA 區塊

### ContactUs（聯絡我們）
- 聯絡資訊卡片（Email、電話）
- 服務時間資訊
- 快速聯繫特色展示

### Footer（頁腳）
- 品牌資訊
- 快速連結
- 服務項目連結
- 聯絡資訊
- 返回頂部按鈕

## SEO 優化項目

### Meta Tags
- Title、Description、Keywords
- Open Graph（Facebook 分享）
- Twitter Card
- Canonical URL

### 結構化數據（JSON-LD）
- Organization Schema
- LocalBusiness Schema
- WebSite Schema
- Service Catalog

### 其他 SEO 設定
- `sitemap.xml` - 網站地圖
- `robots.txt` - 搜尋引擎爬蟲設定
- Google Analytics 追蹤碼

## 設計系統

### 色彩配置
```css
/* Primary Colors - Deep Blue */
--primary-500: #3b82f6;
--primary-600: #2563eb;
--primary-700: #1d4ed8;

/* Accent Colors - Warm Gold */
--accent-500: #f59e0b;
--accent-600: #d97706;

/* Neutral Colors */
--text-primary: #1e293b;
--text-secondary: #475569;
--bg-primary: #ffffff;
--bg-secondary: #f8fafc;
```

### 字型
- 主要字型：Noto Sans TC（繁體中文）
- 英文字型：Inter
- 程式碼：Monospace

## 開發指令

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置生產版本
npm run build

# 預覽生產版本
npm run preview

# 執行 ESLint 檢查
npm run lint
```

## 瀏覽器支援

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 聯絡資訊

- **公司名稱**：嘟嘟數位科技有限公司（DuDu Technology Ltd.）
- **業務洽詢**：sales@dudustudio.monster
- **一般資訊**：info@dudustudio.monster
- **電話**：0971-753-062
- **服務時間**：週一至週五 09:00 - 18:00

## 版本資訊

- **版本**：2.0.0
- **更新日期**：2026-01-26
- **主要更新**：全面改版設計，加強商業美感與 SEO 優化

---

© 2024-2026 DuDu Technology Ltd. All Rights Reserved.
