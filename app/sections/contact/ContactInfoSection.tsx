import React from "react";

interface ContactInfo {
  id: number;
  title: string;
  icon: string;
  details: string[];
}

const contactDetails: ContactInfo[] = [
  {
    id: 1,
    title: "Call Us",
    icon: "📱",
    details: ["Phone: 043384044", "Fax: 043384494"],
  },
  {
    id: 2,
    title: "Email",
    icon: "✉️",
    details: ["info@canopysecurityuae.com"],
  },
  {
    id: 3,
    title: "Address",
    icon: "📍",
    details: [
      "Office No 301, Al Sofa Commercial Building,",
      "Umm Hurair-1, Khalid Bin Al Waleed Road,",
      "Near Burjuman metro Exit-1, Dubai, UAE",
    ],
  },
];

const ContactInfoSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Call Now Get Free Quote</span>
            <br />
            <span className="text-orange-500">We're Here</span>
            <span className="text-gray-900"> To Help</span>
          </h2>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactDetails.map((contact) => (
            <div
              key={contact.id}
              className="relative p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon Badge */}
              <div className="absolute -top-5 right-8 w-14 h-14 rounded-full border-4 border-white bg-white flex items-center justify-center shadow-md">
                <span className="text-2xl">{contact.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 pt-2">
                {contact.title}
              </h3>

              {/* Details */}
              <div className="space-y-2">
                {contact.details.map((detail, index) => (
                  <p
                    key={index}
                    className="text-gray-600 text-sm md:text-base leading-relaxed"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
