"use client";

import * as React from "react";
import Link from "next/link";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/button";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import Shuffle from "@/components/ui/Shuffle";
import { ShinyButton } from "@/components/ui/shiny-button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { SiteLogoLink } from "@/components/branding/site-logo";
import { CompanyMenuIcon, hasCompanyMenuIcon } from "@/components/icons/company-menu-icon";
import { MobileMenuHomeIcon, MobileMenuServicesHubIcon } from "@/components/icons/mobile-menu-nav-icons";
import { ServiceMenuIcon } from "@/components/icons/service-menu-icon";
import { cn } from "@/lib/utils";
import { legalPages, servicePages } from "@/lib/site-data";
import GradientText from "./GradientText";

/** Company / legal rows until you add icons */
const ICON_PLACEHOLDER = "💡";

/** Desktop mega-menu card — border + radius (viewport in navigation-menu.tsx is transparent on purpose) */
const megaMenuPanelClass =
  "overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground ";

/** Header CTAs — pill shape, clearer hierarchy than default shadcn */
const navCtaOutlineClass =
  "h-10 rounded-full border-zinc-200/90 bg-white/90 px-6 text-sm font-semibold tracking-tight text-zinc-800 shadow-sm transition-all duration-200 hover:border-zinc-300 hover:bg-white hover:text-zinc-950 hover:shadow-md active:scale-[0.98]";
const navCtaPrimaryClass =
  "h-10 rounded-full border border-blue-700/30 bg-[#0000FF] px-6 text-sm font-semibold tracking-tight text-zinc-50 shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]";

const shinyContactStyle: React.CSSProperties = {
  ["--shiny-cta-bg" as string]: "#ffffff",
  ["--shiny-cta-bg-subtle" as string]: "#f5f5f5",
  ["--shiny-cta-fg" as string]: "#111827",
  ["--shiny-cta-highlight" as string]: "#d4d4d8",
  ["--shiny-cta-highlight-subtle" as string]: "#ffffff",
  ["--shiny-cta-dot" as string]: "rgba(17, 24, 39, 0.45)",
};

const shinyQuoteStyle: React.CSSProperties = {
  ["--shiny-cta-bg" as string]: "#0000FF",
  ["--shiny-cta-bg-subtle" as string]: "#1d4ed8",
  ["--shiny-cta-fg" as string]: "#ffffff",
  ["--shiny-cta-highlight" as string]: "#60a5fa",
  ["--shiny-cta-highlight-subtle" as string]: "#bfdbfe",
  ["--shiny-cta-dot" as string]: "rgba(255, 255, 255, 1)",
};

type LinkItem = {
  title: string;
  href: string;
  description?: string;
  /** When set, `ListItem` shows the matching service SVG */
  serviceSlug?: string;
};

const serviceBlurbs: Record<string, string> = {
  "villa-interior-design": "Bespoke layouts, finishes, and styling for Dubai villas.",
  "apartment-interior-design": "Space-smart plans for apartments across the city.",
  "office-interior-design": "Branded workplaces that support focus and collaboration.",
  "luxury-interior-design": "High-end materials, detailing, and curated aesthetics.",
  "turnkey-fit-out-services": "Design-to-handover delivery with one accountable team.",
  "kitchen-fit-out-services": "Cabinetry, surfaces, lighting, and appliance integration.",
  "bathroom-renovation": "Waterproofing, fixtures, and spa-like comfort.",
  "joinery-custom-furniture": "Built-ins, wardrobes, and feature joinery made to measure.",
  "ceiling-lighting-solutions": "Cove, feature ceilings, and layered lighting schemes.",
  "flooring-tiling-services": "Stone, tile, and wood finishes with expert installation.",
  "interior-design-marina": "Marina towers: compact luxury with strong sea-city views.",
  "palm-jumeirah-interior-design": "Signature island homes with elevated material palettes.",
  "jvc-interior-design-services": "Family-friendly JVC homes with efficient storage and flow.",
  "arabian-ranches-villa-interiors": "Community villas with warm, timeless interiors.",
};

const productLinks: LinkItem[] = servicePages.map((s) => ({
  title: s.title,
  href: `/services/${s.slug}`,
  description: serviceBlurbs[s.slug],
  serviceSlug: s.slug,
}));

const companyLinks: LinkItem[] = [
  {
    title: "About",
    href: "/about",
    description: "Our studio, process, and how we work with clients in Dubai.",
  },
  {
    title: "Blogs",
    href: "/blogs",
    description: "Ideas, trends, and project notes from our team.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Book a consultation or ask about your space.",
  },
];

const companyLinks2: LinkItem[] = legalPages.map((p) => ({
  title: p.title,
  href: `/${p.slug}`,
}));

export function MegaNavHeader() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn("fixed top-0 z-50 w-full border-b border-transparent bg-transparent", {
        "border-white/20 bg-transparent backdrop-blur-lg supports-backdrop-filter:bg-white/10": scrolled,
      })}
    >
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-3 md:px-4">
        <div className="flex min-w-0 flex-1 items-center gap-3 md:gap-5">
          <SiteLogoLink />
          <NavigationMenu className="hidden shrink-0 font-semibold md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="px-4">
                  <Link href="/" className="rounded-md p-2 font-semibold hover:bg-accent">
                    <Shuffle
                      text="Home"
                      tag="span"
                      triggerOnHover
                      triggerOnce={false}
                      duration={0.28}
                      shuffleTimes={2}
                      maxDelay={0.03}
                      className="inline-block"
                    />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="px-4">
                  <Link href="/services" className="rounded-md p-2 font-semibold hover:bg-accent">
                    <Shuffle
                      text="Services"
                      tag="span"
                      triggerOnHover
                      triggerOnce={false}
                      duration={0.28}
                      shuffleTimes={2}
                      maxDelay={0.03}
                      className="inline-block"
                    />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-base">
                  <Shuffle
                    text="All services"
                    tag="span"
                    triggerOnHover
                    triggerOnce={false}
                    duration={0.28}
                    shuffleTimes={2}
                    maxDelay={0.03}
                    className="inline-block"
                  />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="border-0 bg-transparent p-0 shadow-none">
                  <div className={cn(megaMenuPanelClass, "w-[min(100vw-2rem,42rem)] sm:w-2xl")}>
                    <ul className="grid max-w-2xl grid-cols-2 gap-1.5 p-1.5">
                      {productLinks.map((item) => (
                        <li key={item.href}>
                          <ListItem {...item} />
                        </li>
                      ))}
                    </ul>
                    <div className="inline-flex w-full min-w-0 flex-nowrap items-center gap-2 border-t border-border px-2 py-1.5">
                      <div className="size-3 shrink-0 animate-pulse rounded-sm bg-green-600" aria-hidden />
                      <div className="min-w-0 text-sm text-muted-foreground px-2 py-2">
                        Need guidance?{" "}
                        <Link href="/contact" className="font-medium text-foreground hover:underline">
                          <GradientText
                            colors={["#0f172a", "#2563eb", "#1d4ed8", "#0f172a"]}
                            animationSpeed={3}
                            direction="horizontal"
                            showBorder={false}
                            pauseOnHover={false}
                            yoyo
                            className="inline"
                          >
                            Request a consultation
                          </GradientText>
                        </Link>
                      </div>
                 
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-base">
                  <Shuffle
                    text="Company"
                    tag="span"
                    triggerOnHover
                    triggerOnce={false}
                    duration={0.28}
                    shuffleTimes={2}
                    maxDelay={0.03}
                    className="inline-block"
                  />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="border-0 bg-transparent p-0 shadow-none">
                  <div className={cn(megaMenuPanelClass, "w-[min(100vw-2rem,36rem)] sm:w-xl")}>
                    <div className="grid max-w-xl grid-cols-2 gap-1.5 p-1.5">
                      <ul className="space-y-1.5">
                        {companyLinks.map((item) => (
                          <li key={item.href}>
                            <ListItem {...item} />
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-1.5 border-border p-2 sm:border-l sm:border-border">
                        {companyLinks2.map((item) => (
                          <li key={item.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="flex flex-row items-center gap-x-1.5 rounded-md px-1.5 py-1 hover:bg-accent"
                              >
                                <span className="flex size-8 items-center justify-center" aria-hidden>
                                  <CompanyMenuIcon href={item.href} className="size-5" />
                                </span>
                                <span className="font-medium">{item.title}</span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden items-center gap-2.5 md:flex">
          <Link href="/contact">
            <ShinyButton className="shiny-cta--compact" style={shinyContactStyle}>
              Contact
            </ShinyButton>
          </Link>
          <ShinyButton
            className="shiny-cta--compact"
            style={shinyQuoteStyle}
            onClick={() => {
              window.dispatchEvent(new Event("openInquiryModal"));
            }}
          >
            Get a quote
          </ShinyButton>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden h-10 w-10 min-h-10 min-w-10 shrink-0 rounded-xl p-0 bg-neutral-100 border border-neutral-300 ring-1 ring-neutral-200 ring-offset-1 hover:bg-accent [&_svg]:size-6 [&_svg]:shrink-0"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          type="button"
        >
          <MenuToggleIcon open={open} className="size-6" duration={300} />
        </Button>
      </nav>
      <MobileMenu open={open} className="flex flex-col justify-between gap-2 overflow-y-auto">
        <NavigationMenu className="max-w-full font-semibold">
          <div className="flex w-full flex-col gap-y-2">
            <MobileMenuRowLink href="/" title="Home" onNavigate={() => setOpen(false)}>
              <MobileMenuHomeIcon />
            </MobileMenuRowLink>
            <MobileMenuRowLink href="/services" title="Services" onNavigate={() => setOpen(false)}>
              <MobileMenuServicesHubIcon />
            </MobileMenuRowLink>
            <span className="text-sm font-semibold text-muted-foreground">All services</span>
            {productLinks.map((link) => (
              <ListItem key={link.href} {...link} />
            ))}
            <span className="text-sm font-semibold text-muted-foreground">Company</span>
            {companyLinks.map((link) => (
              <ListItem key={link.href} {...link} />
            ))}
            {companyLinks2.map((link) => (
              <ListItem key={link.href} {...link} />
            ))}
          </div>
        </NavigationMenu>
        <div className="flex flex-col gap-2.5 px-0.5">
          <Link href="/contact" className="w-full">
            <ShinyButton className="shiny-cta--compact w-full" style={shinyContactStyle}>
              Contact
            </ShinyButton>
          </Link>
          <ShinyButton
            className="shiny-cta--compact w-full"
            style={shinyQuoteStyle}
            onClick={() => {
              setOpen(false);
              window.dispatchEvent(new Event("openInquiryModal"));
            }}
          >
            Get a quote
          </ShinyButton>
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = React.ComponentProps<"div"> & {
  open: boolean;
};

function MobileMenuRowLink({
  href,
  title,
  children,
  onNavigate,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="flex w-full flex-row gap-x-1.5 rounded-sm px-1 py-0.5 text-foreground hover:bg-accent hover:text-accent-foreground"
    >
      <div className="flex aspect-square size-10 shrink-0 items-center justify-center rounded-xl ">
        {children}
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-medium">{title}</span>
      </div>
    </Link>
  );
}

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        "fixed inset-x-0 bottom-0 top-14 z-40 flex flex-col overflow-hidden border-y bg-white md:hidden",
      )}
    >
      <div
        data-slot={open ? "open" : "closed"}
        className={cn(
          "size-full p-4 ease-out data-[slot=open]:animate-in data-[slot=open]:zoom-in-95",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

function ListItem({ title, description, className, href, serviceSlug }: LinkItem & { className?: string }) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className={cn(
          "flex w-full flex-row gap-x-1.5 rounded-sm px-1 py-0.5 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground data-[active=true]:hover:bg-accent data-[active=true]:focus:bg-accent",
          className,
        )}
      >
        <div className="flex aspect-square size-10 shrink-0 items-center justify-center rounded-xl ">
          {serviceSlug ? (
            <ServiceMenuIcon slug={serviceSlug} />
          ) : hasCompanyMenuIcon(href) ? (
            <CompanyMenuIcon href={href} />
          ) : (
            <span className="text-xl" aria-hidden>
              {ICON_PLACEHOLDER}
            </span>
          )}
        </div>
        <div className="flex flex-col items-start justify-center">
          <span className="font-medium">{title}</span>
          {description ? <span className="text-xs text-muted-foreground">{description}</span> : null}
        </div>
      </Link>
    </NavigationMenuLink>
  );
}

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);

  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  React.useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}
