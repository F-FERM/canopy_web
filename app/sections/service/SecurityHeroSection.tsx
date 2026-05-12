import Button from "@/app/components/ui/Button";

const SecurityHeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-150 overflow-hidden p-4 md:p-6 lg:p-8 rounded-3xl">
      {/* Background Image */}
      <div
        className="absolute inset-4 md:inset-6 lg:inset-8 bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-12 lg:px-20 max-w-6xl">
        {/* Tag */}
        <div className="mb-4">
          <span className="text-orange-500 font-semibold text-sm md:text-base tracking-widest">
            WHAT WE OFFER
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight mb-6 max-w-2xl">
          <span className="text-white">Security Solutions</span>{" "}
          <span className="text-orange-500">You</span>
          <br />
          <span className="text-orange-500">Can Trust</span>
        </h1>

        {/* Description */}
        <p className="text-gray-200 text-xs max-w-2xl mb-8 ">
          With highly trained and experienced security, you can be assured that
          we will deliver on your premises overtime. We use a rigorous and
          thorough screening and recruitment process in order to ensure that we
          get the best in order to provide you with the best. We even offer you
          the option of sitting with us and working together with us in order to
          develop your own generalized security system. As our home suggests, we
          will cover and protect you from anything and everything. This is a
          promise we make to all our customers and these are promises that
          intend to and keep.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button label="Explore" variant="primary" />
          <Button label="Contact Us" variant="outline" className="bg-white" />
        </div>
      </div>
    </section>
  );
};

export default SecurityHeroSection;
