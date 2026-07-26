import { Building2 } from 'lucide-react';

/* 台灣總經銷資訊 — 網址確定後填入即自動顯示導流按鈕。
   留空期間只顯示說明文字與原廠信箱轉介。 */
const DISTRIBUTOR_URL = '';
const DISTRIBUTOR_NAME = '';

const Partners = () => (
  <section className="sect" id="partners">
    <p className="sect__tag rv">SALES｜銷售與導入</p>
    <h2 className="rv">銷售與導入由台灣總經銷服務</h2>
    <div className="cols">
      <div className="col rv">
        <h3><Building2 aria-hidden="true" />企業導入 DuDuClaw</h3>
        <p>
          原廠專注研發，不做直售。報價、建置與陪跑輔導由台灣總經銷統籌。
          {DISTRIBUTOR_URL ? (
            <>
              {' '}請直接前往
              <a href={DISTRIBUTOR_URL} target="_blank" rel="noopener noreferrer">
                {DISTRIBUTOR_NAME || '總經銷網站'}
              </a>
              。
            </>
          ) : (
            <>
              {' '}來信 <a href="mailto:info@dudustudio.monster">info@dudustudio.monster</a>，
              我們協助你對接總經銷窗口。
            </>
          )}
        </p>
      </div>
    </div>
    {DISTRIBUTOR_URL && (
      <div className="hero__cta rv">
        <a className="btn btn--brand" href={DISTRIBUTOR_URL} target="_blank" rel="noopener noreferrer">
          前往總經銷網站
        </a>
      </div>
    )}
  </section>
);

export default Partners;
