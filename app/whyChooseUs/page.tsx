"use client";

import {
  BatteryLow,
  Clock3,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Range",
    description:
      "Up to 200 km on a single charge, conquer any journey across Nepal.",
    icon: BatteryLow,
  },
  {
    id: 2,
    title: "Performance",
    description:
      "Instant torque, zero lag. Experience exhilarating acceleration.",
    icon: Clock3,
  },
  {
    id: 3,
    title: "Made in Nepal",
    description:
      "Proudly designed & assembled in Kathmandu for Nepali roads.",
    icon: MapPin,
  },
  {
    id: 4,
    title: "Reliable & Safe",
    description:
      "CBS brakes, IP67-rated batteries, and rigorous safety testing.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Why Choose{" "}
            <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Gantabya
            </span>
          </h2>

          <p className="text-gray-400 text-lg mt-4">
            Built for Nepal. Engineered for the future.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-gray-800 bg-black p-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(30,160,60,0.30)]"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon
                    className="w-10 h-10 text-[#00E676]"
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}