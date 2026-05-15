"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ImageCard from "@/app/components/detailpages/ImageCard";
import WhyCCTVOperators from "@/app/components/detailpages/WhyService";
import { CoreResponsibilities, IndustriesWeServe } from "@/app/components/detailpages/Service";
import CTASection from "@/app/sections/home/CTASection";
import { listSecurityServicesApi } from "@/app/api/HomeService";

interface Service {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  isActive: boolean;
}

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const data = await listSecurityServicesApi({});
        const allServices = data?.[0]?.services || [];
        
        // Find service where buttonLink ends with the slug
        const foundService = allServices.find((s: Service) => {
          const linkParts = s.buttonLink.split("/");
          const serviceSlug = linkParts[linkParts.length - 1];
          return serviceSlug === slug;
        });

        setService(foundService || null);
      } catch (error) {
        console.error("Error fetching service:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchService();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F26A23]"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Service not found</h1>
        <p className="text-gray-500">The requested service could not be found.</p>
      </div>
    );
  }

  return (
    <div>
      <ImageCard
        title={service.title}
        highlight="Service"
        description={service.description}
        backgroundImage={service.image}
      />
      
      <WhyCCTVOperators
        headingLine1Accent={service.title}
        paragraphs={[service.description]}
        image={service.image}
      />

      <CoreResponsibilities />
      <IndustriesWeServe />
      <CTASection />
    </div>
  );
};

export default ServiceDetailPage;
