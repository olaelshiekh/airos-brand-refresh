/**
 * Terra-Tech Atlas: The official AI-ROS neural-core wordmark is preserved exactly as supplied
 * and used as the primary brand anchor across the global navigation and footer.
 */
export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`brand-lockup ${inverse ? "brand-lockup--inverse" : ""}`}>
      <img className="brand-lockup__logo" src="/manus-storage/airos-logo-white_7be22606.png" alt="AI-ROS" />
    </span>
  );
}
