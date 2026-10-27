import { ArrowUpRight } from 'lucide-react';
import BrandMark from './BrandMark';

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__in">
        <a className="nav__brand" href="/" aria-label="Dudu Technology Ltd. 嘟嘟數位科技有限公司 首頁">
          <BrandMark name="company" size={36} />
          <span className="nav__word"><span className="nav__word-en">Dudu Technology Ltd.</span><span className="nav__word-zh">嘟嘟數位科技有限公司</span></span>
        </a>
        <nav className="nav__links" aria-label="主選單">
          <a href="#product">選產品</a><a href="#workflow">開始使用</a><a href="#about">關於我們</a><a href="#faq">常見問題</a>
          <a className="nav__prod" href="#contact">聯絡窗口<ArrowUpRight size={13} aria-hidden="true" /></a>
        </nav>
      </div>
    </header>
  );
}
