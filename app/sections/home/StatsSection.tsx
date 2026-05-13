export default function StatsSection() {
  const stats = [
    {
      value: "16+",
      label: "Nationalities",
    },
    {
      value: "15+",
      label: "Years Experience",
    },
    {
      value: "500+",
      label: "Client Protected",
    },
    {
      value: "13+",
      label: "Industries",
    },
    {
      value: "24/7",
      label: "Monitoring",
    },
  ];

  return (
    <section
      className="
        w-full
        bg-[#6B0F1A]
        px-4 sm:px-6 md:px-10 lg:px-20 xl:px-60
      "
    >
      <div
        className="
          max-w-[1920px]
          h-auto lg:h-[148px]
          mx-auto
          py-8 lg:py-[20px]
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            w-full
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-5
            gap-y-8
            gap-x-6
            sm:gap-x-8
            md:gap-x-10
            lg:gap-x-[60px]
            items-center
            justify-items-center
          "
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                flex
                flex-col
                items-center
                text-center
                w-full
                min-w-0
              "
            >
              {/* NUMBER */}
              <h3
                className="
                  text-[#F97316]
                  text-[30px]
                  sm:text-[38px]
                  md:text-[46px]
                  lg:text-[58px]
                  leading-none
                  font-bold
                  whitespace-nowrap
                "
              >
                {item.value}
              </h3>

              {/* LABEL */}
              <p
                className="
                  mt-2 md:mt-3
                  text-white
                  text-[12px]
                  sm:text-[14px]
                  md:text-[16px]
                  lg:text-[20px]
                  font-medium
                  leading-snug
                  text-center
                  break-words
                "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}