import BrandMark from './BrandMark';

const LINES = [
  {
    id: 'duduclaw',
    name: 'DuDuClaw',
    sub: 'AI 員工平台，含 DuDuClaw OS',
    href: 'https://duduclaw.dudustudio.monster/',
    host: 'duduclaw.dudustudio.monster',
  },
  {
    id: 'vettalon',
    name: 'Vettalon',
    sub: '多模型程式碼資安稽核',
    href: 'https://vettalon.dudustudio.monster/',
    host: 'vettalon.dudustudio.monster',
  },
];

const Hero = () => (
  <section className="hero">
    <div className="hero__in">
      <div className="hero__copy">
        <p className="eyebrow rv">Dudu Technology Ltd. · 台灣 AI 軟體原廠</p>
        <h1 className="rv">
          讓 AI 幫你做事，<br />
          也<em>替你把關</em>
        </h1>
        <p className="hero__lead rv">
          Dudu Technology Ltd. 開發兩條產品線：DuDuClaw 把 AI 變成有職務與權限的員工；
          Vettalon 用多個模型互相覆核，替你的程式碼找出真漏洞。兩者都能從自己的電腦開始。
        </p>
        <div className="hero__cta rv">
          <a className="btn btn--primary" href="#product">看兩條產品線</a>
          <a className="btn btn--secondary" href="https://duduclaw.dudustudio.monster/" target="_blank" rel="noopener noreferrer">DuDuClaw</a>
          <a className="btn btn--secondary" href="https://vettalon.dudustudio.monster/" target="_blank" rel="noopener noreferrer">Vettalon</a>
        </div>
        <p className="hero__note rv">DuDuClaw 平台可自架，OS 為 pre-GA（已有 QEMU 開機驗證、真機尚未驗證）。Vettalon 開源核心採 Apache 2.0。</p>
      </div>
      <ul className="hero__lines rv" aria-label="產品線">
        {LINES.map((line) => (
          <li key={line.id} className={`line-card line-card--${line.id}`}>
            <a href={line.href} target="_blank" rel="noopener noreferrer">
              <BrandMark name={line.id} size={56} />
              <span className="line-card__text">
                <strong>{line.name}</strong>
                <span>{line.sub}</span>
                <span className="line-card__host">{line.host} ↗</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Hero;
