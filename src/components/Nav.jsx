import { ArrowUpRight } from 'lucide-react';

const Nav = () => (
  <header className="nav">
    <div className="nav__in">
      <a className="nav__mark" href="/">
        <img src="/logo.png" alt="" width="22" height="24" />
        嘟嘟數位
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

export default Nav;
