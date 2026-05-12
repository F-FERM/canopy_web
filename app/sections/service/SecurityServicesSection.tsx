import React from "react";
import Link from "next/link";

interface ServiceCard {
  id: number;
  title: string;
  image: string;
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: "CCTV Operators",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Fire Watch Services",
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Construction Security",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "CVIT",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Housekeeping Services",
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Event Security",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
];

const SecurityServicesSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-orange-500 font-semibold text-sm md:text-sm tracking-widest mb-2">
            OUR SERVICES
          </p>
          <h2 className="text-4xl md:text-4xl font-bold mb-4">
            <span className="text-gray-900">Professional</span>{" "}
            <span className="text-orange-500">Security</span>
            <br />
            <span className="text-gray-900">Services</span>
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Explore our complete range of security services designed to protect
            your business, property, and people.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-lg overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 shadow"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="px-6 py-2">
                <h3 className="text-xl md:text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <Link
                  href={`/service/${service.id}`}
                  className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                >
                  View Details <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityServicesSection;
