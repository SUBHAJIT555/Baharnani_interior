import * as React from "react";

import { cn } from "@/lib/utils";

type CompanyMenuIconProps = {
  href: string;
  className?: string;
};

function Svg({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0 text-foreground", className)}
      aria-hidden
    >
      {children}
    </svg>
  );
}

/** About, Blogs, Contact + legal links in Company mega menu / mobile */
export function CompanyMenuIcon({ href, className }: CompanyMenuIconProps) {
  const c = className ?? "size-6";

  switch (href) {
    case "/about":
      return (
        <Svg className={c}>
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M12 9h.01" />
          <path d="M11 12h1v4h1" />
        </Svg>
      );
    case "/blogs":
      return (
        <Svg className={c}>
          <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
          <path d="M8 8l4 0" />
          <path d="M8 12l4 0" />
          <path d="M8 16l4 0" />
        </Svg>
      );
    case "/contact":
      return (
        <Svg className={c}>
          <path d="M8 9h8" />
          <path d="M8 13h6" />
          <path d="M12.01 18.594l-4.01 2.406v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" />
          <path d="M16 19h6" />
          <path d="M19 16v6" />
        </Svg>
      );
    case "/cookie-policy":
      return (
        <Svg className={c}>
          <path d="M8 13v.01" />
          <path d="M12 17v.01" />
          <path d="M12 12v.01" />
          <path d="M16 14v.01" />
          <path d="M11 8v.01" />
          <path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296q -.745 1.18 -1.024 1.852q -.283 .684 -.66 2.216a3 3 0 0 1 -1.624 1.623q -1.572 .394 -2.216 .661q -.712 .295 -1.852 1.024a3 3 0 0 1 -2.296 0q -1.203 -.754 -1.852 -1.024q -.707 -.292 -2.216 -.66a3 3 0 0 1 -1.623 -1.624q -.397 -1.577 -.661 -2.216q -.298 -.718 -1.024 -1.852a3 3 0 0 1 0 -2.296q .719 -1.116 1.024 -1.852q .257 -.62 .66 -2.216a3 3 0 0 1 1.624 -1.623q 1.547 -.384 2.216 -.661q .687 -.285 1.852 -1.024a3 3 0 0 1 2.296 0" />
        </Svg>
      );
    case "/privacy-policy":
      return (
        <Svg className={c}>
          <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6" />
          <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
        </Svg>
      );
    case "/terms-and-condition":
      return (
        <Svg className={c}>
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
          <path d="M9 9l1 0" />
          <path d="M9 13l6 0" />
          <path d="M9 17l6 0" />
        </Svg>
      );
    default:
      return null;
  }
}

export function hasCompanyMenuIcon(href: string): boolean {
  return (
    href === "/about" ||
    href === "/blogs" ||
    href === "/contact" ||
    href === "/cookie-policy" ||
    href === "/privacy-policy" ||
    href === "/terms-and-condition"
  );
}
