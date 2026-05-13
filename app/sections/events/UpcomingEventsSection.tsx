"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import Event1 from "../../../public/images/events/Event2.jpg";
import Event2 from "../../../public/images/events/Event2.jpg";
import Event3 from "../../../public/images/events/Event2.jpg";
import Event4 from "../../../public/images/events/Event2.jpg";

interface EventCard {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: any;
}

const upcomingEvents: EventCard[] = [
  {
    id: 1,
    title: "Indoor Events",
    date: "22 April 2026",
    location: "Dubai",
    description:
      "Corporate meetings, conferences, exhibitions, award functions, product launches, and private indoor gatherings.",
    image: Event1,
  },
  {
    id: 2,
    title: "Night Parties & VIP Events",
    date: "10 May 2026",
    location: "Dubai Marina",
    description:
      "Private parties, luxury gatherings, nightlife events, celebrity appearances, and VIP functions.",
    image: Event2,
  },
  {
    id: 3,
    title: "Sports Events",
    date: "28 May 2026",
    location: "Dubai Stadium",
    description:
      "Stadium events, tournaments, competitions, and large sporting gatherings.",
    image: Event3,
  },
  {
    id: 4,
    title: "Emergency Response Training",
    date: "5 June 2026",
    location: "Canopy HQ",
    description:
      "Hands-on emergency response and first aid safety training sessions.",
    image: Event4,
  },
];

const UpcomingEventsSection = () => {
  return (
    <section
      className="
        px-5
        sm:px-8
        md:px-14
        lg:px-24
        xl:px-40
        2xl:px-60

        py-14
        md:py-20

        mx-auto
        bg-white
      "
    >
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <h2
          className="
            text-[32px]
            sm:text-[38px]
            md:text-[42px]
            lg:text-[46px]

            font-semibold
            leading-[110%]
            tracking-[0.04em]
          "
        >
          <span className="text-[#111111]">Upcoming</span>{" "}
          <span className="text-[#F26A23]">Events</span>
        </h2>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="
              w-full
              max-w-[722px]

              min-h-[269px]

              rounded-[20px]
              border border-[#D9D9D9]

              bg-white

              pt-[10px]
              pr-5
              sm:pr-[33px]

              pb-[10px]

              pl-[15px]

              flex
              flex-col
              sm:flex-row

              gap-[18px]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            {/* Image */}
            <div
              className="
                relative

                w-full
                sm:w-[250px]

                h-[220px]
                sm:h-[243px]

                rounded-[20px]
                overflow-hidden

                flex-shrink-0
              "
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 250px"
              />
            </div>

            {/* Content */}
            <div
              className="
                flex-1
                flex
                flex-col
                justify-center
              "
            >
              {/* Title */}
              <h3
                className="
                  text-[26px]
                  md:text-[30px]

                  font-bold
                  text-black

                  mb-4
                "
              >
                {event.title}
              </h3>

              {/* Date & Location */}
              <p
                className="
                  text-[#666666]

                  text-[16px]
                  md:text-[18px]

                  leading-[1.5]

                
                "
              >
                {event.date} • {event.location}
              </p>

              {/* Description */}
              <p
                className="
                  text-[#5C5C5C]

                  text-[15px]
                  md:text-[16px]

                  leading-[1.7]

                  mb-6
                "
              >
                {event.description}
              </p>

              {/* Button */}
              <Link
                href={`/events/${event.id}`}
                className="
                  w-fit

                  h-[48px]

                  px-6

                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  rounded-[12px]

                  bg-[#F26A23]
                  text-white

                  text-[16px]
                  font-semibold

                  transition-all
                  duration-300

                  hover:bg-[#dd5d18]
                "
              >
                View Details
                <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEventsSection;