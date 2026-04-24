import * as React from "react";

const common: React.SVGProps<SVGSVGElement> = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "size-5 text-foreground",
  "aria-hidden": true,
};

function Icon({ children }: { children: React.ReactNode }) {
  return <svg {...common}>{children}</svg>;
}

/** Tabler-outline paths — services mega menu / mobile list */
export function ServiceMenuIcon({ slug }: { slug: string }) {
  switch (slug) {
    case "villa-interior-design":
    case "villa-interior-design-dubai":
      return (
        <Icon>
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.645 0 1.218 .305 1.584 .78" />
          <path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h4" />
          <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39" />
        </Icon>
      );
    case "apartment-interior-design":
    case "apartment-interior-design-dubai":
      return (
        <Icon>
          <path d="M3 21l18 0" />
          <path d="M5 21v-14l8 -4v18" />
          <path d="M19 21v-10l-6 -4" />
          <path d="M9 9l0 .01" />
          <path d="M9 12l0 .01" />
          <path d="M9 15l0 .01" />
          <path d="M9 18l0 .01" />
        </Icon>
      );
    case "office-interior-design":
    case "office-interior-design-dubai":
      return (
        <Icon>
          <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" />
          <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
          <path d="M12 12l0 .01" />
          <path d="M3 13a20 20 0 0 0 18 0" />
        </Icon>
      );
    case "luxury-interior-design":
    case "luxury-interior-design-dubai":
      return (
        <Icon>
          <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />
          <path d="M10 12l-2 -2.2l.6 -1" />
        </Icon>
      );
    case "turnkey-fit-out-services":
    case "turnkey-fit-out-services-dubai":
      return (
        <Icon>
          <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0" />
          <path d="M15 9h.01" />
        </Icon>
      );
    case "kitchen-fit-out-services":
    case "kitchen-fit-out-services-dubai":
      return (
        <Icon>
          <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12m0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
        </Icon>
      );
    case "bathroom-renovation":
    case "bathroom-renovation-dubai":
      return (
        <Icon>
          <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1" />
          <path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25" />
          <path d="M4 21l1 -1.5" />
          <path d="M20 21l-1 -1.5" />
        </Icon>
      );
    case "joinery-custom-furniture":
    case "joinery-custom-furniture-dubai":
      return (
        <Icon>
          <path d="M11.414 10l-7.383 7.418a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l7.407 -7.385" />
          <path d="M18.121 15.293l2.586 -2.586a1 1 0 0 0 0 -1.414l-7.586 -7.586a1 1 0 0 0 -1.414 0l-2.586 2.586a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0" />
        </Icon>
      );
    case "ceiling-lighting-solutions":
    case "ceiling-lighting-solutions-dubai":
      return (
        <Icon>
          <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
          <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
          <path d="M9.7 17l4.6 0" />
        </Icon>
      );
    case "flooring-tiling-services":
    case "flooring-tiling-services-dubai":
      return (
        <Icon>
          <path d="M4 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
          <path d="M14 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
          <path d="M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
          <path d="M14 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
        </Icon>
      );
    case "interior-design-marina":
    case "interior-design-dubai-marina":
      return (
        <Icon>
          <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
          <path d="M13 7l0 .01" />
          <path d="M17 7l0 .01" />
          <path d="M17 11l0 .01" />
          <path d="M17 15l0 .01" />
        </Icon>
      );
    case "palm-jumeirah-interior-design":
      return (
        <Icon>
          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />
        </Icon>
      );
    case "jvc-interior-design-services":
      return (
        <Icon>
          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M10 12h4v4h-4l0 -4" />
        </Icon>
      );
    case "arabian-ranches-villa-interiors":
      return (
        <Icon>
          <path d="M16 5l3 3l-2 1l4 4l-3 1l4 4h-9" />
          <path d="M15 21l0 -3" />
          <path d="M8 13l-2 -2" />
          <path d="M8 12l2 -2" />
          <path d="M8 21v-13" />
          <path d="M5.824 16a3 3 0 0 1 -2.743 -3.69a3 3 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4l-.176 -.005" />
        </Icon>
      );
    default:
      return (
        <Icon>
          <path d="M12 12h.01" />
        </Icon>
      );
  }
}
