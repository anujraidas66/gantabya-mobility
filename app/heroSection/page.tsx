
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div>
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/image.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full px-6 md:px-16 lg:px-24">
          <div className="max-w-2xl">
            
            {/* Heading */}
            <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight">
              The EV <br />
              <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Revolution
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-200 text-lg md:text-2xl leading-relaxed">
              Premium electric motorcycles made in Nepal for
              <br className="hidden md:block" />
              the future of mobility.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              
              <Link href="/Testride">
                <button className="bg-green-400 hover:bg-green-500 cursor-pointer text-black font-semibold px-6 py-3 rounded-xl transition duration-300">
                  Book Test Ride
                </button>
              </Link>

              <Link href="/bikes">
                <button
                  className="border bg-black border-green-400 text-green-400 cursor-pointer
                  font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition duration-300"
                >
                  Explore Bikes
                  <ArrowRight size={20} />
                </button>
              </Link>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}