import { notFound } from "next/navigation";
import { services } from "@/data/services";
import ServiceDetail from "@/components/service-detail";
import type { Metadata } from "next";
import Wrapper from "@/components/wrapper";

// ✅ Define Params correctly for async usage
interface Params {
  slug: string;
}

// ✅ Dynamic metadata per service
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>; // <-- must be Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params; // ✅ Await params here

  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "Service Not Found | Your Agency",
      description: "The service you are looking for does not exist.",
    };
  }

  return {
    title: `${service.title} | Your Agency`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Your Agency`,
      description: service.description,
      url: `https://youragency.com/services/${service.slug}`,
      siteName: "Your Agency",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Your Agency`,
      description: service.description,
    },
  };
}

// ✅ Page Component (also async for params)
export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params; // ✅ Await params here too
  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <Wrapper>
      <ServiceDetail service={service} />
    </Wrapper>
  );
}

