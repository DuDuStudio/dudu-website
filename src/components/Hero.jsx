const Hero = () => (
  <section className="hero">
    <div className="hero__in">
      <p className="hero__kicker rv">DUDU STUDIO · 台灣 AI 軟體原廠</p>
      <h1 className="rv">
        讓 AI 幫你做事，<br />
        也<em>替你把關</em>
      </h1>
      <p className="hero__lead rv">
        嘟嘟數位開發兩條產品線：DuDuClaw 把 AI 變成有職務與權限的員工；
        Vettalon 用多個模型互相覆核，替你的程式碼找出真漏洞。兩者都能從自己的電腦開始。
      </p>
      <div className="hero__cta rv">
        <a className="btn btn--brand" href="#product">看兩條產品線</a>
        <a className="btn btn--ghost" href="https://duduclaw.dudustudio.monster/" target="_blank" rel="noopener noreferrer">DuDuClaw</a>
        <a className="btn btn--ghost" href="https://vettalon.dudustudio.monster/" target="_blank" rel="noopener noreferrer">Vettalon</a>
      </div>
      <p className="hero__note rv">DuDuClaw 平台可自架，OS 為 pre-GA（已有 QEMU 開機驗證、真機尚未驗證）。Vettalon 開源核心採 Apache 2.0。</p>
    </div>
  </section>
);

export default Hero;
