/**
 * Terra-Tech Atlas: Global contour-field background that keeps every route in the AI-ROS
 * ecosystem visually connected through deep navy, taupe, cream, and Atlas Gold details.
 */
export function SiteBackground() {
  return (
    <div className="site-background" aria-hidden="true">
      <div className="site-background__image" />
      <div className="site-background__wash" />
      <div className="site-background__grain" />
      <svg className="site-background__routes" viewBox="0 0 1440 1100" preserveAspectRatio="none">
        <path d="M-80 744C192 644 292 830 534 715s195-298 456-250 298 152 530-38" />
        <path d="M-10 914c244-139 391 30 613-154 180-149 242-88 378-179 169-112 245 5 507-137" />
        <circle cx="244" cy="796" r="5" />
        <circle cx="602" cy="683" r="4" />
        <circle cx="992" cy="484" r="6" />
        <circle cx="1274" cy="570" r="4" />
      </svg>
    </div>
  );
}

