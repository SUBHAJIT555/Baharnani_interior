import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/services/service-detail";

const serviceTitleBySlug: Record<string, string> = {
  "villa-interior-design": "Villa Interior Design",
  "apartment-interior-design": "Apartment Interior Design",
  "office-interior-design": "Office Interior Design",
  "luxury-interior-design": "Luxury Interior Design",
  "turnkey-fit-out-services": "Turnkey Fit-Out Services",
  "kitchen-fit-out-services": "Kitchen Fit-Out Services",
  "bathroom-renovation": "Bathroom Renovation",
  "joinery-custom-furniture": "Joinery & Custom Furniture",
  "ceiling-lighting-solutions": "Ceiling & Lighting Solutions",
  "flooring-tiling-services": "Flooring & Tiling Services",
  "interior-design-marina": "Interior Design Dubai Marina",
  "palm-jumeirah-interior-design": "Palm Jumeirah Interior Design",
  "jvc-interior-design-services": "JVC Interior Design Services",
  "arabian-ranches-villa-interiors": "Arabian Ranches Villa Interiors",
  // Legacy slugs kept for backward compatibility
  "villa-interior-design-dubai": "Villa Interior Design",
  "apartment-interior-design-dubai": "Apartment Interior Design",
  "office-interior-design-dubai": "Office Interior Design",
  "luxury-interior-design-dubai": "Luxury Interior Design",
  "turnkey-fit-out-services-dubai": "Turnkey Fit-Out Services",
  "kitchen-fit-out-services-dubai": "Kitchen Fit-Out Services",
  "bathroom-renovation-dubai": "Bathroom Renovation",
  "joinery-custom-furniture-dubai": "Joinery & Custom Furniture",
  "ceiling-lighting-solutions-dubai": "Ceiling & Lighting Solutions",
  "flooring-tiling-services-dubai": "Flooring & Tiling Services",
  "interior-design-dubai-marina": "Interior Design Dubai Marina",
};

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = serviceTitleBySlug[slug];

  if (!title) {
    notFound();
  }

  return <ServiceDetail title={title} />;
}
