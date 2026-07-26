const Hero = () => (
  <section className="hero">
    <div className="hero__in">
      <p className="hero__kicker rv">DUDU STUDIO · 台灣軟體原廠</p>
      <h1 className="rv">
        我們做讓 AI<br />
        <em>真正上工</em>的軟體
      </h1>
      <p className="hero__lead rv">
        嘟嘟數位是一家 AI 原生的軟體公司。旗艦產品 DuDuClaw 把 Claude、Codex、Gemini
        變成企業裡會值班、會回報的 AI 員工，裝在你自己的電腦上，資料不出門。
      </p>
      <div className="hero__cta rv">
        <a className="btn btn--brand" href="https://duduclaw.dudustudio.monster/" target="_blank" rel="noopener noreferrer">
          認識 DuDuClaw
        </a>
        <a className="btn btn--ghost" href="mailto:info@dudustudio.monster">合作洽詢</a>
      </div>
    </div>
  </section>
);

export default Hero;
