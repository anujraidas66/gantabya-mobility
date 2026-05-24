import Link from "next/link";
import { Star, Zap } from "lucide-react";

const riders = [
  {
    name: "Aashish Shrestha",
    location: "Kathmandu",
    review:
      "Switched from petrol to Gantabya Volt, saving NPR 3,000/month on fuel alone. The ride quality is unmatched.",
  },
  {
    name: "Priya Thapa",
    location: "Bhaktapur",
    review:
      "Silent, smooth, and stylish. My daily commute has never been this enjoyable. Proud to ride Made in Nepal!",
  },
  {
    name: "Rajesh Tamang",
    location: "Lalitpur",
    review:
      "The Storm handles hills effortlessly. I’ve taken it to Nagarkot multiple times — zero range anxiety.",
  },
];

export default function ReadyToRide() {
  return (
    <section className="bg-black text-white py-16 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Heading (smaller spacing) */}
        <h2 className="text-center text-4xl font-extrabold mb-10">
          What Our Rider{" "}
          <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Says
          </span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {riders.map((item, index) => (
            <div
              key={index}
              className="
                border border-gray-800
                rounded-xl
                p-4
                bg-[#050505]
                transition-all duration-300
                min-h-45
              "
            >
              {/* Stars */}
              <div className="flex gap-1 text-green-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 text-sm leading-5 mb-4">
                “{item.review}”
              </p>

              {/* Name */}
              <h3 className="font-semibold text-base">{item.name}</h3>

              {/* Location */}
              <p className="text-xs text-gray-500">{item.location}</p>
            </div>
          ))}
        </div>

        {/* CTA Box (compact spacing) */}
        <div className="mt-16 rounded-2xl bg-[#020202] shadow-[0_0_30px_rgba(35,170,70,0.30)] px-6 py-14 text-center">

          {/* Icon */}
          <div className="flex justify-center mb-4">
            <Zap size={34} className="text-green-400" fill="currentColor" />
          </div>

          {/* Title */}
          <h2 className="text-4xl font-extrabold leading-tight">
            Ready to Ride{" "}
            <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Electric?
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base">
            Join thousands of Nepali riders who’ve made the switch.
            <br />
            Book your free test ride today.
          </p>

          {/* Buttons */}
          {/* <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="bg-[#00E676] hover:bg-[#00c864] text-black font-semibold px-6 py-2.5 rounded-lg transition-all duration-300">
              Book Test Ride
            </button>

            <button className="border border-green-500 text-green-400 hover:bg-gray-800 font-semibold px-6 py-2.5 rounded-lg transition-all duration-300">
              View All Bikes
            </button>
          </div> */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

  <Link
    href="/Testride"
    className="bg-[#00E676] hover:bg-[#00c864] text-black font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 text-center"
  >
    Book Test Ride
  </Link>

  <Link
    href="/bikes"
    className="border border-green-500 text-green-400 hover:bg-gray-800 font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 text-center"
  >
    View All Bikes
  </Link>

</div>
        </div>

      </div>
    </section>
  );
}