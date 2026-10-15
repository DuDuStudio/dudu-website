import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import BrandMark from './BrandMark';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav__in">
        <a className="nav__brand" href="/" aria-label="Dudu Technology Ltd. 嘟嘟數位科技有限公司 首頁">
          <BrandMark name="company" size={32} />
          <span className="nav__word">
            <span className="nav__word-en">Dudu Technology Ltd.</span>
            <span className="nav__word-zh">嘟嘟數位科技有限公司</span>
          </span>
        </a>
        <nav className="nav__links" aria-label="主選單">
          <a href="#product">產品</a>
          <a href="#workflow">怎麼開始</a>
          <a href="#about">原廠與夥伴</a>
          <a href="#faq">常見問題</a>
          <a href="#contact">聯絡</a>
          <a
            className="nav__prod"
            href="https://www.futurecorp.tw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            企業導入 <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
