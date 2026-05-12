import React from "react";
import Button from "@/app/components/ui/Button";

const EventsHeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Tag */}
            <p className="text-orange-500 font-semibold text-sm md:text-sm tracking-widest mb-4">
              UPCOMING EVENTS
            </p>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-3xl font-bold mb-6 leading-tight">
              <span className="text-orange-500">Security Events</span>
              <span className="text-gray-900"> We Did, Training</span>
              <br />
              <span className="text-gray-900">Programs & Community</span>
              <br />
              <span className="text-gray-900">Activities</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-sm mb-8 ">
              Our event security services follow strict SIRA guidelines to
              ensure safe and well-managed events. We provide risk assessment,
              access control, crowd management, and trained SIRA-certified
              security personnel. With on-site supervision, continuous
              monitoring, and quick emergency response, we ensure the safety of
              guests, staff, and assets at all times.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                className="px-8 py-3 rounded-md font-semibold"
              >
                View Events →
              </Button>
              <Button
                variant="secondary"
                className="px-8 py-3 rounded-md font-semibold"
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative h-96 md:h-[500px] lg:h-full">
            {/* Grid Layout with rounded images */}
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Top Right - Large Image */}
              <div className="col-span-1 row-span-2">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop"
                  alt="Security Event"
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                />
              </div>

              {/* Top Left Small */}
              <div className="col-span-1 row-span-1">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
                  alt="Training Program"
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                />
              </div>

              {/* Middle Right Small */}
              <div className="col-span-1 row-span-1">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop"
                  alt="Community Activity"
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                />
              </div>

              {/* Bottom Left Large */}
              <div className="col-span-1 row-span-2">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=500&fit=crop"
                  alt="Event Security"
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                />
              </div>

              {/* Bottom Right */}
              <div className="col-span-1 row-span-1">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
                  alt="Event Management"
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsHeroSection;
