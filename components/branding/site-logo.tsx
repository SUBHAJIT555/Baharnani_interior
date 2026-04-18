import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const LOGO_SRC =
  "https://v2.corporategiftsdubaii.ae/_next/static/media/logo.f0cacd7f.svg";

type SiteLogoLinkProps = {
  className?: string;
  /** Improves SEO/a11y in footer and other contexts */
  imageAlt?: string;
};

export function SiteLogoLink({ className, imageAlt = "" }: SiteLogoLinkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex shrink-0 items-center rounded-md p-0.5 outline-none ring-offset-background transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring md:p-1",
        className,
      )}
      aria-label="Baharnani Interior home"
    >
      <Image
        src={LOGO_SRC}
        alt={imageAlt}
        width={200}
        height={40}
        className="h-7 w-auto max-w-[140px] md:h-9 md:max-w-[200px]"
        priority
        unoptimized
      />
    </Link>
  );
}
