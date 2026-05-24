'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Battery,
  Cpu,
  Wifi,
  Shield,
  Wind,
  Sun,
  ArrowRight,
} from 'lucide-react'

const FEATURES = [
  {
    title: 'Advanced Battery System',
    description:
      'High-efficiency lithium battery designed for long-range performance.',
    icon: 'battery',
  },
  {
    title: 'AI Driving Assistance',
    description:
      'Smart CPU-powered driving assistance for safety and control.',
    icon: 'cpu',
  },
  {
    title: 'Smart Connectivity',
    description:
      'Real-time WiFi and cloud sync for vehicle data tracking.',
    icon: 'wifi',
  },
  {
    title: 'Safety Shield',
    description:
      'Multi-layer protection system ensuring maximum passenger safety.',
    icon: 'shield',
  },
  {
    title: 'Eco Wind Efficiency',
    description:
      'Aerodynamic design optimized for minimum air resistance.',
    icon: 'wind',
  },
  {
    title: 'Solar Assist System',
    description:
      'Integrated solar support for extended battery life.',
    icon: 'sun',
  },
]

const TECH_SPECS = [
  { label: 'Battery Capacity', value: '72 kWh' },
  { label: 'Range', value: '520 km' },
  { label: 'Top Speed', value: '180 km/h' },
  { label: '0-100 km/h', value: '4.8 sec' },
  { label: 'Charging Time', value: '45 min (Fast Charge)' },
  { label: 'Drivetrain', value: 'AWD Dual Motor' },
]

const ICON_MAP: any = {
  battery: Battery,
  cpu: Cpu,
  wifi: Wifi,
  shield: Shield,
  wind: Wind,
  sun: Sun,
}

export default function TechnologySection() {
  const ref = useRef(null)
  const specsRef = useRef(null)

  const isVisible = useInView(ref, { once: true })
  const specsVisible = useInView(specsRef, { once: true })

  return (
    <section className="py-24 bg-[#0d0d0d] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-green-500 text-sm mb-3">
            Engineering Excellence
          </p>

          <h2 className="text-4xl font-bold">
            Technology that <span className="text-green-500">thinks ahead</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl">
            Every Gantabya vehicle is packed with cutting-edge EV technology
            designed for performance and Nepal terrain.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {FEATURES.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon] || Battery

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl border border-gray-800 bg-[#141414]
                           hover:border-green-500/40 transition"
              >
                <Icon className="w-6 h-6 text-green-500 mb-4" />

                <h3 className="font-semibold mb-2">{feature.title}</h3>

                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>

                <div className="mt-4 flex items-center gap-1 text-green-500 text-xs opacity-70">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Specs */}
        <motion.div
          ref={specsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={specsVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="border border-gray-800 rounded-xl overflow-hidden"
        >
          <div className="p-6 border-b border-gray-800 flex justify-between">
            <div>
              <h3 className="font-bold text-xl">Technical Specifications</h3>
              <p className="text-gray-400 text-sm">Gantabya Apex Model</p>
            </div>
            <span className="text-green-500 text-sm">Apex</span>
          </div>

          <div className="grid md:grid-cols-2">
            {TECH_SPECS.map((spec, i) => (
              <div
                key={i}
                className="flex justify-between p-4 border-b border-gray-800"
              >
                <span className="text-gray-400 text-sm">{spec.label}</span>
                <span className="text-white text-sm">{spec.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}