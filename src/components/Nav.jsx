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
        <a href="#about">公司</a>
        <a href="#partners">合作</a>
        <a href="#contact">聯絡</a>
        <a
          className="nav__prod"
          href="https://duduclaw.dudustudio.monster/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DuDuClaw <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </nav>
    </div>
  </header>
);

export default Nav;
