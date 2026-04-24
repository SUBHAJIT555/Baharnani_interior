export type ServicePage = {
  slug: string;
  title: string;
};

export type LegalPage = {
  slug: string;
  title: string;
};

export const servicePages: ServicePage[] = [
  { slug: "villa-interior-design", title: "Villa Interior Design" },
  { slug: "apartment-interior-design", title: "Apartment Interior Design" },
  { slug: "office-interior-design", title: "Office Interior Design" },
  { slug: "luxury-interior-design", title: "Luxury Interior Design" },
  { slug: "turnkey-fit-out-services", title: "Turnkey Fit-Out Services" },
  { slug: "kitchen-fit-out-services", title: "Kitchen Fit-Out Services" },
  { slug: "bathroom-renovation", title: "Bathroom Renovation" },
  { slug: "joinery-custom-furniture", title: "Joinery & Custom Furniture" },
  { slug: "ceiling-lighting-solutions", title: "Ceiling & Lighting Solutions" },
  { slug: "flooring-tiling-services", title: "Flooring & Tiling Services" },
  { slug: "interior-design-marina", title: "Interior Design Dubai Marina" },
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
