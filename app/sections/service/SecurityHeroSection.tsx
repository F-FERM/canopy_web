import Button from "@/app/components/ui/Button";
import HeroBg from "../../../public/images/Service/Service1.png";

const SecurityHeroSection = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden

        px-4
        sm:px-6
        md:px-8
        lg:px-8

        py-6
        md:py-8
      "
    >
      {/* Main Container */}
      <div
        className="
          relative
          w-full
          max-w-[1760px]
          mx-auto

          h-[520px]
          sm:h-[620px]
          md:h-[700px]
          lg:h-[823px]

          rounded-[20px]
          overflow-hidden
        "
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HeroBg.src})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content Wrapper */}
        <div
          className="
            relative
            z-10

            flex
            items-center
            h-full

            px-5
            sm:px-8
            md:px-14
            lg:px-24
            xl:px-[148px]

            py-10
            sm:py-14
            md:py-16
            lg:py-[212px]
          "
        >
          {/* Content Box */}
          <div
            className="
              flex flex-col

              gap-4
              sm:gap-5
              md:gap-6
              lg:gap-[25px]

              w-full
              max-w-full
              lg:max-w-[870px]
            "
          >
            {/* Tag */}
            <p
              className="
                flex items-center gap-2

                text-[13px]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[18px]

                font-semibold
                tracking-[0.14em]
                uppercase
                text-[#F26A23]
              "
            >
              <span
                aria-hidden="true"
                className="
                  text-[14px]
                  sm:text-[16px]
                  md:text-[18px]

                  leading-none
                "
              >
                ⓘ
              </span>

              <span>WHAT WE OFFER</span>
            </p>

            {/* Heading */}
            <h1
              className="
                font-semibold
                leading-[1.1]

                text-[30px]
                sm:text-[40px]
                md:text-[48px]
                lg:text-[56px]
              "
            >
              <span className="text-white">Security Solutions</span>{" "}
              <span className="text-[#F26A23]">You</span>
              <br />
              <span className="text-[#F26A23]">Can Trust</span>
            </h1>

            {/* Description */}
            <p
              className="
                text-[#CDCDCD]

                text-[14px]
                sm:text-[15px]
                md:text-[16px]

                font-normal
                leading-[1.8]

                max-w-full
                lg:max-w-[760px]
              "
            >
              With highly trained and experienced security, you can be assured
              that we will deliver on your premises overtime. We use a rigorous
              and thorough screening and recruitment process in order to ensure
              that we get the best in order to provide you with the best. We
              even offer you the option of sitting with us and working together
              with us in order to develop your own generalized security system.
            </p>

            {/* Buttons */}
            <div
              className="
                flex flex-col
                sm:flex-row

                gap-4

                pt-2
                sm:pt-4
              "
            >
              <Button label="Explore" variant="primary" />

              <Button
                label="Contact Us"
                variant="outline"
                className="bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityHeroSection;