// 'use client'

// import { motion, useInView } from 'framer-motion'
// import { useRef } from 'react'
// import { Mountain, Leaf, Award, Users } from 'lucide-react'

// const PILLARS = [
//   {
//     icon: Mountain,
//     title: 'Born in Nepal',
//     description:
//       'Designed and tested on Nepal mountain roads from low to high altitude.',
//   },
//   {
//     icon: Leaf,
//     title: 'Carbon Responsible',
//     description:
//       'We focus on sustainable manufacturing and eco-friendly mobility.',
//   },
//   {
//     icon: Award,
//     title: 'Award-Winning',
//     description:
//       'Recognized for innovation in EV design and engineering excellence.',
//   },
//   {
//     icon: Users,
//     title: 'Growing Community',
//     description:
//       'Thousands of drivers choosing clean and smart transportation.',
//   },
// ]

// const MILESTONES = [
//   { year: '2019', event: 'Founded in Kathmandu with EV vision' },
//   { year: '2020', event: 'First prototype tested in Nepal terrain' },
//   { year: '2021', event: 'Funding secured and development scaled' },
//   { year: '2022', event: 'First EV model launched' },
//   { year: '2023', event: 'Charging network expansion across cities' },
//   { year: '2024', event: 'Mass adoption and regional expansion' },
// ]

// export default function AboutSection() {
//   const ref = useRef(null)
//   const timelineRef = useRef(null)

//   const isVisible = useInView(ref, { once: true })
//   const timelineVisible = useInView(timelineRef, { once: true })

//   return (
//     <section className="py-24 bg-[#0d0d0d] text-white">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* HEADER */}
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 30 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="max-w-3xl mb-16"
//         >
//           <p className="text-green-500 text-sm mb-3">Our Story</p>

//           <h2 className="text-4xl font-bold mb-4">
//             Building the <span className="text-green-500">electric future</span>
//           </h2>

//           <p className="text-gray-400">
//             Gantabya is focused on building EV solutions designed for Nepal’s
//             roads, climate, and people.
//           </p>
//         </motion.div>

//         {/* PILLARS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
//           {PILLARS.map((pillar, i) => {
//             const Icon = pillar.icon

//             return (
//               <motion.div
//                 key={pillar.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isVisible ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: i * 0.08 }}
//                 className="p-5 rounded-xl border border-gray-800 bg-[#141414]"
//               >
//                 <Icon className="w-5 h-5 text-green-500 mb-3" />

//                 <h3 className="font-semibold mb-2">{pillar.title}</h3>

//                 <p className="text-gray-400 text-sm">
//                   {pillar.description}
//                 </p>
//               </motion.div>
//             )
//           })}
//         </div>

//         {/* TIMELINE */}
//         <motion.h3
//           ref={timelineRef}
//           initial={{ opacity: 0, y: 20 }}
//           animate={timelineVisible ? { opacity: 1, y: 0 } : {}}
//           className="text-2xl font-bold mb-10"
//         >
//           Our Journey
//         </motion.h3>

//         <div className="relative border-l border-gray-800 pl-6 space-y-8">
//           {MILESTONES.map((m, i) => (
//             <motion.div
//               key={m.year}
//               initial={{ opacity: 0, x: -20 }}
//               animate={timelineVisible ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: i * 0.1 }}
//             >
//               <div className="text-green-500 font-mono text-sm mb-1">
//                 {m.year}
//               </div>
//               <p className="text-gray-300">{m.event}</p>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }





















'use client'

import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: "#0a0a0a",
        color: "#ffffff",
        padding: "80px 24px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: "700",
            marginBottom: "48px",
            letterSpacing: "-0.5px",
          }}
        >
          About{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #22c55e, #16a34a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Gantabya
          </span>
        </h2>

        {/* Text */}
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.8",
            color: "#d1d5db",
            marginBottom: "28px",
          }}
        >
          Founded in 2019, Gantabya Mobility set out with a bold vision — to lead Nepal's
          electric vehicle revolution. From a small workshop in Kathmandu, we've grown into
          one of Nepal's most promising EV startups.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.8",
            color: "#d1d5db",
            marginBottom: "64px",
          }}
        >
          Our name "Gantabya" means "destination" in Nepali — a symbol of our mission to build
          a sustainable, emission-free future.
        </p>

        {/* Mission + Vision */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Mission */}
          <div
            style={{
              border: "1px solid #1f2937",
              borderRadius: "16px",
              padding: "28px",
              backgroundColor: "#0d0d0d",
            }}
          >
            <IconBox type="mission" />

            <h3 style={titleStyle}>Our Mission</h3>

            <p style={descStyle}>
              To make electric mobility accessible and desirable for every Nepali through
              world-class EV motorcycles.
            </p>
          </div>

          {/* Vision */}
          <div
            style={{
              border: "1px solid #1f2937",
              borderRadius: "16px",
              padding: "28px",
              backgroundColor: "#0d0d0d",
            }}
          >
            <IconBox type="vision" />

            <h3 style={titleStyle}>Our Vision</h3>

            <p style={descStyle}>
              A Nepal where every motorcycle is electric — clean air and green innovation.
            </p>
          </div>
        </div>
      </div>

      {/* VALUES */}
      <div style={{ maxWidth: "1100px", margin: "100px auto 0", padding: "0 24px" }}>
        
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: "700",
            marginBottom: "60px",
          }}
        >
          Our{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #22c55e, #16a34a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Values
          </span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          <ValueCard title="Sustainability" desc="Building a greener Nepal." />
          <ValueCard title="Innovation" desc="Pushing EV technology forward." />
          <ValueCard title="Community" desc="Empowering Nepali riders." />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

/* ---------------- HELPERS ---------------- */

const titleStyle = {
  fontSize: "1.4rem",
  fontWeight: "700",
  marginBottom: "16px",
};

const descStyle = {
  fontSize: "0.95rem",
  lineHeight: "1.7",
  color: "#9ca3af",
};

/* ICON BOX */
const IconBox = ({ type }: { type: "mission" | "vision" }) => {
  return (
    <div style={{ marginBottom: "16px" }}>
      {type === "mission" ? (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e">
          <circle cx="12" cy="12" r="3" />
          <path d="M19 12a7 7 0 1 0-14 0 7 7 0 1 0 14 0z" />
        </svg>
      ) : (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )}
    </div>
  );
};

/* VALUE CARD */
const ValueCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div
      style={{
        border: "1px solid #1f2937",
        borderRadius: "16px",
        padding: "28px",
        backgroundColor: "#0d0d0d",
        textAlign: "center",
      }}
    >
      <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "10px" }}>
        {title}
      </h3>
      <p style={{ fontSize: "0.9rem", color: "#9ca3af" }}>{desc}</p>
    </div>
  );
};






