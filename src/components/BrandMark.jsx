const MARKS = {
  company: '/brand/company-mark.png',
  duduclaw: '/brand/duduclaw-mark.png',
  vettalon: '/brand/vettalon-mark.png',
};

// Use the delivered PNG artwork, including its transparent negative space.
const BrandMark = ({ name, size = 32, className = '' }) => (
  <span
    className={`brand-mark ${className}`.trim()}
    style={{ width: size, height: size }}
  >
    <img src={MARKS[name]} alt="" width={size} height={size} />
  </span>
);

export default BrandMark;
