
'use client'

import {
  faGear,
  faLeaf,
  faCircleNodes,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
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
          Founded in 2019, Gantabya Mobility set out with a bold vision — to lead Nepals
          electric vehicle revolution. From a small workshop in Kathmandu, we ve grown into
          one of Nepal most promising EV startups.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.8",
            color: "#d1d5db",
            marginBottom: "64px",
          }}
        >
          Our name Gantabya means destination in Nepali — a symbol of our mission to build
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
          {/* <div
            style={{
              border: "1px solid #1f2937",
              borderRadius: "16px",
              padding: "28px",
              backgroundColor: "#0d0d0d",
            }}
          >
            <FontAwesomeIcon icon={faGear} size="2xl" color="#22c55e" />

            <h3 style={titleStyle} className="mt-6">
              Our Mission
            </h3>

            <p style={descStyle}>
              To make electric mobility accessible and desirable for every Nepali through
              world-class EV motorcycles.
            </p>
          </div> */}
          <div
  style={{
    
    border: "1px solid #1f2937",
    borderRadius: "16px",
    padding: "28px",
    backgroundColor: "#0d0d0d",
    boxShadow: "0 0 30px rgba(34,197,94,0.30)",
    gap: "16px",
  
  }}
 
>
  <FontAwesomeIcon icon={faGear} size="2xl" color="#22c55e" />

  <h3 style={titleStyle} className="mt-6">
    Our Mission
  </h3>

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
              boxShadow: "0 0 30px rgba(34,197,94,0.30)",
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
          <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
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
          <ValueCard
            icon={
              <FontAwesomeIcon
                icon={faLeaf}
                className="text-[#00d84f] text-5xl mb-3"
              />
            }
            title="Sustainability"
            desc="Building a greener Nepal."
          />

          <ValueCard
            icon={
              <FontAwesomeIcon
                icon={faCircleNodes}
                className="text-[#00d84f] text-5xl mb-3"
              />
            }
            title="Innovation"
            desc="Pushing EV technology forward."
          />

          <ValueCard
            icon={
              <FontAwesomeIcon
                icon={faUsers}
                className="text-[#00d84f] text-5xl mb-3"
              />
            }
            title="Community"
            desc="Empowering Nepali riders."
          />
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


const ValueCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <div
      className="hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.30)] transition-all duration-300 group"
      style={{
        border: "1px solid #1f2937",
        borderRadius: "16px",
        padding: "28px",
        backgroundColor: "#0d0d0d",
        textAlign: "center",
      }}
    >
      {icon}

      <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "10px" }}>
        {title}
      </h3>

      <p style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
        {desc}
      </p>
    </div>
  );
};
