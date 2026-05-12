import React from "react";
import Button from "@/app/components/ui/Button";

const ContactFormSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl border border-gray-200 bg-white">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Send Message
            </h3>

            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name.."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Title.."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Type Here.."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition resize-none"
                ></textarea>
              </div>

              {/* Send Button */}
              <Button
                variant="primary"
                className="w-full px-6 py-3 rounded-lg font-semibold"
              >
                Send Now
              </Button>
            </form>
          </div>

          {/* Benefits Section */}
          <div className="space-y-6">
            {/* Fast Response */}
            <div className="p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    Fast Response
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    We reply within hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Team */}
            <div className="p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-3xl">👥</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    Professional Team
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    Certified security experts.
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Plans */}
            <div className="p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    Custom Plans
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    Tailored security solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Value for Money */}
            <div className="p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💰</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    Value for Money
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    Best value for your investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
