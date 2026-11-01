import { profile } from "@/data/portfolio";

/** Round profile photo. Change the image in data/portfolio.ts. */
export default function Avatar({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={profile.photo}
      alt={profile.name}
      width={size}
      height={size}
      className={`avatar-img ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
