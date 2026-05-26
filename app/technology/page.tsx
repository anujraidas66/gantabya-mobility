"use client";

import {
  Cpu,
  Smartphone,
  Settings,
  MapPin,
} from "lucide-react";

import { FaBatteryEmpty } from "react-icons/fa";
import { TbChargingPileFilled } from "react-icons/tb";

const technologies = [
  {
    id: 1,
    title: "Advanced Battery System",
    description:
      "IP67-rated lithium-ion cells with intelligent BMS for optimal range and longevity. Fast charging from 0–80% in under 2 hours.",
    icon: "battery",
  },
  {
    id: 2,
    title: "BLDC Motor Technology",
    description:
      "High-efficiency brushless DC motors deliver instant torque with zero maintenance. Regenerative braking recovers energy on the go.",
    icon: Cpu,
  },
  {
    id: 3,
    title: "Smart Connectivity",
    description:
      "Gantabya App connects you to your bike — GPS tracking, ride analytics, battery health, and remote diagnostics at your fingertips.",
    icon: Smartphone,
  },
  {
    id: 4,
    title: "Safety Engineering",
    description:
      "CBS braking, anti-theft immobilizer, and crash detection. Your safety is engineered into every component.",
    icon: Settings,
  },
  {
    id: 5,
    title: "Made for Nepal",
    description:
      "Tested on Kathmandu streets, hill roads, and highway conditions. Suspension and tires tuned for Nepali terrain.",
    icon: MapPin,
  },
  {
    id: 6,
    title: "Fast Charging Network",
    description:
      "Growing network of charging stations across major cities. Compatible with standard charging infrastructure.",
    icon: "charging",
  },
];

export default function Technology() {
  return (
    <section className="w-full bg-black text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our{" "}
            <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Technology
            </span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Cutting-edge EV technology designed and built in Nepal.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  group
                  relative
                  rounded-2xl
                  border
                  border-green-500/40
                  bg-black
                  p-8
                "
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-green-500/5 opacity-0" />

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  {/* Battery Icon */}
                  {item.icon === "battery" ? (
                    <div className="inline-flex items-center justify-center rounded-md bg-black">
                      <FaBatteryEmpty
                        size={42}
                        className="text-green-500"
                      />
                    </div>
                  ) : item.icon === "charging" ? (
                    /* Charging Icon */
                    <div className="bg-black inline-flex p-1 rounded-md">
                      <TbChargingPileFilled
                        size={42}
                        className="text-green-500"
                      />
                    </div>
                  ) : (
                    /* Lucide Icons */
                    <Icon
                      size={40}
                      className="text-green-500"
                      strokeWidth={2.2}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-8 text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Made in Nepal Section */}
        <div className="mt-28 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Proudly{" "}
            <span className="text-green-500">
              Made in Nepal
            </span>
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-9">
            Every Gantabya motorcycle is designed, engineered, and assembled in
            Kathmandu. We believe Nepal&apos;s EV future should be built by
            Nepali hands. From our R&amp;D lab to the production line,
            we&apos;re creating world-class electric vehicles that are
            tailor-made for Nepali roads, climate, and riding culture.
          </p>

          <p className="mt-6 text-gray-400 text-lg leading-9">
            By manufacturing locally, we support the Nepali economy, reduce
            import dependency, and ensure every bike is optimized for the
            unique conditions our riders face every day.
          </p>
        </div>
      </div>
    </section>
  );
}