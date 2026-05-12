import React from "react";
import Button from "@/app/components/ui/Button";

interface JobOpening {
  id: number;
  title: string;
  description: string;
  requirements: string[];
}

const jobOpenings: JobOpening[] = [
  {
    id: 1,
    title: "Security Guard",
    description:
      "Provide security and surveillance for residential, commercial, and industrial properties.",
    requirements: [
      "Minimum 1 year UAE experience",
      "SIRA certificate required",
      "Good communication skills",
    ],
  },
  {
    id: 2,
    title: "Security Guard",
    description:
      "Provide security and surveillance for residential, commercial, and industrial properties.",
    requirements: [
      "Minimum 1 year UAE experience",
      "SIRA certificate required",
      "Good communication skills",
    ],
  },
  {
    id: 3,
    title: "Site Supervisor",
    description:
      "Lead security teams, manage shifts, and ensure safety standards are maintained.",
    requirements: [
      "2+ years supervisory experience",
      "Strong leadership skills",
      "Ability to manage large teams",
    ],
  },
];

const JobOpeningsSection = () => {
  return (
    <>
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-orange-500 font-semibold text-sm md:text-sm tracking-widest mb-2">
              OPENINGS
            </p>
            <h2 className="text-4xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">Current</span>{" "}
              <span className="text-orange-500">Job</span>
              <span className="text-gray-900"> Openings</span>
            </h2>
            <p className="text-gray-600 text-base md:text-xs max-w-2xl mx-auto">
              Explore our latest career opportunities and become part of a
              trusted and professional security team.
            </p>
          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-15">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300"
              >
                {/* Job Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {job.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm">{job.description}</p>

                {/* Requirements */}
                <ul className="space-y-3 mb-8">
                  {job.requirements.map((requirement, index) => (
                    <li
                      key={index}
                      className="text-gray-700 text-sm md:text-base flex items-start gap-3"
                    >
                      <span className="text-orange-500 font-bold mt-1">•</span>
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>

                {/* Apply Button */}
                <Button
                  variant="primary"
                  label="Apply Now ->"
                  className="w-3/4 px-6 h-[10px] rounded-md font-semibold"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-primary h-125"></div>
    </>
  );
};

export default JobOpeningsSection;
