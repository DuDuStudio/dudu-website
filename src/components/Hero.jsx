const Hero = () => (
  <section className="hero">
    <div className="hero__in">
      <p className="hero__kicker rv">DUDU STUDIO · 台灣軟體原廠</p>
      <h1 className="rv">
        把想交辦的工作，<br />
        交給<em>有職務與權限的 AI</em>
      </h1>
      <p className="hero__lead rv">
        嘟嘟數位開發 DuDuClaw AI 員工平台，以及承載平台的 DuDuClaw OS。
        從自己的電腦開始，設定員工的工作、工具與審批方式，再評估如何帶進團隊。
      </p>
      <div className="hero__cta rv">
        <a className="btn btn--brand" href="#product">選擇適合的產品</a>
        <a className="btn btn--ghost" href="https://os.duduclaw.dudustudio.monster/" target="_blank" rel="noopener noreferrer">了解 OS 試用</a>
        <a className="btn btn--ghost" href="#partners">洽談企業導入</a>
      </div>
      <p className="hero__note rv">平台可自架；OS 為 pre-GA，已有 QEMU 開機驗證紀錄。整碟映像做過開機驗證，安裝器與部分功能仍有未驗證流程；真機尚未驗證。</p>
    </div>
  </section>
);

export default Hero;
