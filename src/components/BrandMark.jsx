import companyMark from '../assets/brand/company-mark.svg?raw';
import companyMarkMono from '../assets/brand/company-mark-mono.svg?raw';
import duduclawMark from '../assets/brand/duduclaw-mark.svg?raw';
import vettalonMark from '../assets/brand/vettalon-mark.svg?raw';

// C1 marks are inlined so CSS can recolor the ink layer (.ink) in dark mode.
const MARKS = {
  company: companyMark,
  'company-mono': companyMarkMono,
  duduclaw: duduclawMark,
  vettalon: vettalonMark,
};

const toDecorative = (svg) =>
  svg.replace('<svg role="img" ', '<svg aria-hidden="true" focusable="false" ');

const PREPARED = Object.fromEntries(
  Object.entries(MARKS).map(([name, svg]) => [name, toDecorative(svg)])
);

const BrandMark = ({ name, size = 32, className = '' }) => (
  <span
    className={`brand-mark ${className}`.trim()}
    style={{ width: size, height: size }}
    dangerouslySetInnerHTML={{ __html: PREPARED[name] }}
  />
);

export default BrandMark;
