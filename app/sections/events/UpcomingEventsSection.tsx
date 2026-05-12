import React from "react";
import Link from "next/link";

interface EventCard {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

const upcomingEvents: EventCard[] = [
  {
    id: 1,
    title: "Indoor Events",
    date: "22 April 2026",
    location: "Dubai",
    description:
      "Corporate meetings, conferences, exhibitions, award functions, product launches, and private indoor gatherings.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Night Parties & VIP Events",
    date: "10 May 2026",
    location: "Al Sofa Community Center",
    description:
      "Private parties, luxury gatherings, nightlife events, celebrity appearances, and high-profile VIP functions.",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Sports Events",
    date: "28 May 2026",
    location: "Dubai Industrial Stadium",
    description:
      "Stadium events, tournaments, competitions, fitness events, and large sporting gatherings.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "First Aid & Emergency Response",
    date: "5 June 2026",
    location: "Canopy Head Office",
    description:
      "Hands-on training for emergencies and quick response situations.",
    image:
      "https://images.unsplash.com/photo-1631217314830-4af5f90d0fb2?w=400&h=300&fit=crop",
  },
];

const UpcomingEventsSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white shadow">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-3xl font-bold">
            <span className="text-gray-900">Upcoming</span>{" "}
            <span className="text-orange-500">Events</span>
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="flex-shrink-0 w-full sm:w-40 h-40 rounded-2xl overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                {/* Title and Details */}
                <div>
                  <h3 className="text-xl md:text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>

                  {/* Date and Location */}
                  <div className="space-y-1 mb-3">
                    <p className="text-gray-600 text-sm md:text-sm font-semibold">
                      {event.date}
                    </p>
                    <p className="text-gray-600 text-sm md:text-sm">
                      • {event.location}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-sm ">
                    {event.description}
                  </p>
                </div>

                {/* View Details Link */}
                <Link
                  href={`/events/${event.id}`}
                  className="inline-flex items-center text-orange-500 bg-[orange-500] font-semibold hover:text-orange-600 transition-colors mt-4 w-fit"
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

export default UpcomingEventsSection;
