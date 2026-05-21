
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
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-5xl font-extrabold mb-14">
          What Our Rider{" "}
          <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Says
          </span>
        </h2>

        {/*readyToRide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {riders.map((item, index) => (
            <div
              key={index}
              className="border border-gray-500 rounded-2xl p-6 bg-[#050505]  transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 text-green-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 leading-7 text-[17px] mb-5">
                  &ldquo;{item.review}&rdquo;
                </p>

              {/* Name */}
              <h3 className="font-semibold text-lg">{item.name}</h3>

              {/* Location */}
              <p className="text-sm text-gray-500">{item.location}</p>
            </div>
          ))}
        </div>



       {/* CTA Box */}
<div className="mt-24 rounded-3xl bg-[#020202] shadow-[0_0_40px_rgba(35,170,70,0.40)] px-6 py-20 text-center">
  {/* Icon */}
  <div className="flex justify-center mb-6">
    <Zap
      size={40}
      className="text-green-400"
      fill="currentColor"
    />
  </div>

  {/* Title */}
  <h2 className="text-5xl font-extrabold leading-tight">
    Ready to Ride{" "}
    <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
      Electric?
    </span>
  </h2>

  {/* Description */}
  <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
    Join thousands of Nepali riders who’ve made the switch.
    <br />
    Book your free test ride today.
  </p>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
    <button className="bg-[#00E676] hover:bg-[#00c864] text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300">
      Book Test Ride
    </button>

    <button className="border border-green-500 text-green-400 hover:bg-gray-700 hover:text-green-400 font-semibold px-8 py-3 rounded-xl transition-all duration-300">
      View All Bikes
    </button>
  </div>
</div>



      </div>
    </section>
  );
}