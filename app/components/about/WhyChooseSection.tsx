"use client";

import Image from "next/image";
import CardShape from "../../../public/images/about/Rectangle 22.png";

interface WhatWeDoCardData {
  id: number;
  numberPrefix: string;
  numberSuffix: string;
  icon: string;
  title: string;
  description: string;
}

const cards: WhatWeDoCardData[] = [
  {
    id: 1,
    numberPrefix: "0",
    numberSuffix: "1",
    icon: "?",
    title: "WHAT WE DO",
    description:
      "With an unwavering sense of professionalism instilled into everyone working in the firm, we are constantly striving towards improving ourselves and satisfying our customers. One factor without which this industry cannot move forward is trust, and we offer that without any sort of bargain.",
  },
  {
    id: 2,
    numberPrefix: "0",
    numberSuffix: "2",
    icon: "★",
    title: "OUR VISION",
    description:
      "We envision a future where quality and reliability go hand in hand. Our team is dedicated to building long-lasting relationships with clients through transparent communication, consistent delivery, and an uncompromising commitment to excellence in every project.",
  },
  {
    id: 3,
    numberPrefix: "0",
    numberSuffix: "3",
    icon: "◆",
    title: "OUR VALUES",
    description:
      "Integrity, innovation, and impact drive everything we do. We believe in creating meaningful work that makes a difference — not just for our clients but for the communities we serve. Our values are not just words; they are the foundation of every decision we make.",
  },
  {
    id: 4,
    numberPrefix: "0",
    numberSuffix: "1",
    icon: "?",
    title: "WHAT WE DO",
    description:
      "With an unwavering sense of professionalism instilled into everyone working in the firm, we are constantly striving towards improving ourselves and satisfying our customers. One factor without which this industry cannot move forward is trust, and we offer that without any sort of bargain.",
  },
  {
    id: 5,
    numberPrefix: "0",
    numberSuffix: "2",
    icon: "★",
    title: "OUR VISION",
    description:
      "We envision a future where quality and reliability go hand in hand. Our team is dedicated to building long-lasting relationships with clients through transparent communication, consistent delivery, and an uncompromising commitment to excellence in every project.",
  },
  {
    id: 6,
    numberPrefix: "0",
    numberSuffix: "3",
    icon: "◆",
    title: "OUR VALUES",
    description:
      "Integrity, innovation, and impact drive everything we do. We believe in creating meaningful work that makes a difference — not just for our clients but for the communities we serve. Our values are not just words; they are the foundation of every decision we make.",
  },
];

function WhatWeDoCard({ card }: { card: WhatWeDoCardData }) {
  return (
    <div
      className="
        relative

        w-full
        max-w-[540px]

        h-[420px]
        sm:h-[480px]
        lg:h-[560px]
      "
    >
      {/* Number */}
      <div
        className="
          absolute z-20 flex items-end leading-none

          top-6 left-6
          sm:top-8 sm:left-10

          lg:top-10 lg:left-20
        "
      >
        <span
          className="
            text-[55px]
            sm:text-[65px]
            lg:text-[80px]

            font-semibold text-[#D9D9D9]
          "
        >
          {card.numberPrefix}
        </span>

        <span
          className="
            text-[75px]
            sm:text-[90px]
            lg:text-[110px]

            font-semibold text-[#F4A176]
          "
        >
          {card.numberSuffix}
        </span>
      </div>

      {/* Shape Card */}
      <div
        className="
          absolute

          top-[45px]
          left-1/2
          -translate-x-1/2

          sm:top-[50px]

          lg:top-[60px]
          lg:left-[70px]
          lg:translate-x-0

          w-[88%]
          sm:w-[430px]

          h-[360px]
          sm:h-[400px]
          lg:h-[455px]
        "
      >
        <Image
          src={CardShape}
          alt="shape card"
          fill
          className="object-contain"
          priority
        />

        {/* Content */}
        <div
          className="
            absolute inset-0 z-10 flex flex-col justify-end

            px-6
            sm:px-7
            lg:px-[34px]

            pt-[120px]
            lg:pt-[141px]

            pb-7
            lg:pb-9
          "
        >
          {/* Icon */}
          <div
            className="
              absolute

              top-5 right-5
              sm:top-6 sm:right-6

              lg:top-[28px]
              lg:right-[34px]

              w-[70px]
              h-[65px]

              sm:w-[80px]
              sm:h-[72px]

              lg:w-[92px]
              lg:h-[82px]

              rounded-[14px]
              bg-[#F2F2F2]

              flex items-center justify-center
            "
          >
            <span
              className="
                text-[36px]
                sm:text-[42px]
                lg:text-[50px]

                text-[#8B2E12]
                leading-none
              "
            >
              {card.icon}
            </span>
          </div>

          {/* Title */}
          <h2
            className="
              text-[17px]
              sm:text-[18px]
              lg:text-[20px]

              font-semibold
              tracking-[1px]
              text-black
            "
          >
            {card.title}
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              lg:mt-5

              text-[14px]
              sm:text-[15px]
              lg:text-[16px]

              text-[#979797]
              font-normal

              max-w-[320px]
              leading-[1.7]
            "
          >
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhatWeDoCards() {
  return (
    <section
      className="
        w-full

        px-5
        sm:px-8
        md:px-14
        lg:px-24
        xl:px-40
        2xl:px-60

        py-14
        md:py-20

        mx-auto
      "
    >
      <div
        className="
          grid

          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3

          gap-8
          lg:gap-10

          justify-items-center
        "
      >
        {cards.map((card) => (
          <WhatWeDoCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}