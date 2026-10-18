export const WebzaCta = ({ title, text, button = "Start building free", source = "docs", eyebrow, logo = false, variant = "default" }) => {
  const href = `https://webza.ai/register?utm_source=webza_docs&utm_medium=cta&utm_content=${source}`;
  const cls = `wz-ad not-prose${variant === "inverse" ? " wz-ad-inverse" : ""}${logo ? " wz-ad-has-logo" : ""}`;
  return (
    <a className={cls} href={href} target="_blank" rel="noopener">
      <span className="wz-ad-glow" aria-hidden="true" />
      {logo && <img className="wz-ad-logo" src="/images/webza-mark.svg" alt="" aria-hidden="true" noZoom />}
      <span className="wz-ad-copy">
        {eyebrow && <span className="wz-ad-eyebrow">{eyebrow}</span>}
        <span className="wz-ad-title">{title}</span>
        {text && <span className="wz-ad-text">{text}</span>}
      </span>
      <span className="wz-ad-btn">
        {button}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </span>
    </a>
  );
};
