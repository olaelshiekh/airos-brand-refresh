/**
 * Terra-Tech Atlas: The orbital seed mark stays separate from the custom wordmark so the
 * AI-ROS identity reads as an ecosystem marker rather than a generic technology logo.
 */
export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`brand-lockup ${inverse ? "brand-lockup--inverse" : ""}`}>
      <img
        className="brand-lockup__mark"
        src="/manus-storage/airos-orbital-seed-mark_b82c149f.png"
        alt=""
      />
      <span className="brand-lockup__wordmark" aria-label="AI-ROS">
        AI<span>·</span>ROS
      </span>
    </span>
  );
}

