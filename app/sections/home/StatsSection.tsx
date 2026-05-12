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
        bg-[#7A0012]
     px-4 sm:px-8 lg:px-40
        
        
      "
    >
      <div
        className="
          max-w-[1920px]
          h-[148px]
          mx-auto
          px-[40px]
          xl:px-[120px]
          py-[20px]
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            w-full
            flex
            items-center
            justify-between
            gap-[60px]
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
                shrink-0
              "
            >
              {/* NUMBER */}
              <h3
                className="
                  text-[#F97316]
                  text-[58px]
                  leading-none
                  font-bold
                "
              >
                {item.value}
              </h3>

              {/* LABEL */}
              <p
                className="
                  mt-3
                  text-white
                  text-[20px]
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