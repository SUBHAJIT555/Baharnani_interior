export type ServicePage = {
  slug: string;
  title: string;
};

export type LegalPage = {
  slug: string;
  title: string;
};

export const servicePages: ServicePage[] = [
  { slug: "villa-interior-design-dubai", title: "Villa Interior Design Dubai" },
  { slug: "apartment-interior-design-dubai", title: "Apartment Interior Design Dubai" },
  { slug: "office-interior-design-dubai", title: "Office Interior Design Dubai" },
  { slug: "luxury-interior-design-dubai", title: "Luxury Interior Design Dubai" },
  { slug: "turnkey-fit-out-services-dubai", title: "Turnkey Fit-Out Services Dubai" },
  { slug: "kitchen-fit-out-services-dubai", title: "Kitchen Fit-Out Services Dubai" },
  { slug: "bathroom-renovation-dubai", title: "Bathroom Renovation Dubai" },
  { slug: "joinery-custom-furniture-dubai", title: "Joinery & Custom Furniture Dubai" },
  { slug: "ceiling-lighting-solutions-dubai", title: "Ceiling & Lighting Solutions Dubai" },
  { slug: "flooring-tiling-services-dubai", title: "Flooring & Tiling Services Dubai" },
  { slug: "interior-design-dubai-marina", title: "Interior Design Dubai Marina" },
  { slug: "palm-jumeirah-interior-design", title: "Palm Jumeirah Interior Design" },
  { slug: "jvc-interior-design-services", title: "JVC Interior Design Services" },
  { slug: "arabian-ranches-villa-interiors", title: "Arabian Ranches Villa Interiors" },
];

export const legalPages: LegalPage[] = [
  { slug: "terms-and-condition", title: "Terms and Condition" },
  { slug: "cookie-policy", title: "Cookie Policy" },
  { slug: "privacy-policy", title: "Privacy Policy" },
];

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];
