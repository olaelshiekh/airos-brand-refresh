import { brandAssets } from "@/lib/site-content";

type BrandMarkProps = {
  variant?: "brand" | "white";
};

export function BrandMark({ variant = "brand" }: BrandMarkProps) {
  return (
    <img
      className="brand-logo"
      src={variant === "white" ? brandAssets.whiteLogo : brandAssets.logo}
      alt="AI-ROS"
    />
  );
}
