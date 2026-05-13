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
        px-4 sm:px-6 md:px-12 lg:px-20 xl:px-60
      "
    >
      <div
        className="
          max-w-[1920px]
          min-h-[100px] sm:min-h-[120px] md:min-h-[140px] lg:h-[148px]
          mx-auto
          px-4 sm:px-6 md:px-8 lg:px-[40px] xl:px-[120px]
          py-6 sm:py-8 md:py-[20px]
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
            gap-6 sm:gap-8 md:gap-10 lg:gap-[60px]
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
              "
            >
              {/* NUMBER */}
              <h3
                className="
                  text-[#F97316]
                  text-[32px] sm:text-[40px] md:text-[48px] lg:text-[58px]
                  leading-none
                  font-bold
                "
              >
                {item.value}
              </h3>

              {/* LABEL */}
              <p
                className="
                  mt-2 sm:mt-2.5 md:mt-3
                  text-white
                  text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px]
                  font-medium
                  whitespace-nowrap
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