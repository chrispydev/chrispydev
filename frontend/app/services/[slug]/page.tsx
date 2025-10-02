import { notFound } from "next/navigation";
import { services } from "@/data/services";
import ServiceDetail from "@/components/service-detail";
import type { Metadata } from "next";

interface Params {
  slug: string;
}

// ✅ Dynamic metadata per service
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);

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

export default function ServicePage({ params }: { params: Params }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  return (
    <main className="bg-white">
      <ServiceDetail service={service} />
    </main>
  );
}

