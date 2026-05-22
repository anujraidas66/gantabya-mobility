'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Zap, Clock, ChevronRight } from 'lucide-react'

interface Vehicle {
  id: string
  name: string
  tagline: string
  range: string
  speed: string
  price: string
  image: string
}

const VEHICLES: Vehicle[] = [
  {
    id: 'thunder-x',
    name: 'Thunder X',
    tagline: 'Born to dominate.',
    range: '180km',
    speed: '180km/hr',
    price: 'NPR 4,50,000',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 'volt-cruiser',
    name: 'Volt Cruiser',
    tagline: 'Silent power, endless roads',
    range: '200km',
    speed: '120km/hr',
    price: 'NPR 3,99,000',
    image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80',
  },
  {
    id: 'eco-ride',
    name: 'Eco Ride',
    tagline: 'Smart commute, zero emissions',
    range: '120km',
    speed: '80km/hr',
    price: 'NPR 2,49,000',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80',
  },
]

function VehicleCard({ vehicle, index }: { vehicle: Vehicle; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
      }}
      className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden
                 border border-transparent
                 hover:border-[#22c55e]/40
                 hover:shadow-[0_20px_60px_-12px_rgba(34,197,94,0.18)]
                 hover:-translate-y-2
                 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-[260px] overflow-hidden">
        {/* <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        /> */}
        <img
  src={vehicle.image}
  alt={vehicle.name}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
/>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
      </div>

      {/* Content */}
      <div className="px-5 pb-5 pt-4">
        <h3 className="text-white font-bold text-lg">{vehicle.name}</h3>

        <p className="text-gray-400 text-sm mt-1">{vehicle.tagline}</p>

        {/* Specs */}
        <div className="flex gap-5 mt-4">
          <div className="flex items-center gap-1 text-sm text-white">
            <Zap className="w-4 h-4 text-green-500" />
            {vehicle.range}
          </div>

          <div className="flex items-center gap-1 text-sm text-white">
            <Clock className="w-4 h-4 text-green-500" />
            {vehicle.speed}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center mt-5">
          <span className="text-green-500 font-bold text-lg">
            {vehicle.price}
          </span>

          <button className="flex items-center gap-1 text-sm text-gray-300 group-hover:text-white transition">
            Details <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* top glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-green-500 opacity-0 group-hover:opacity-100 transition" />
    </motion.div>
  )
}

export default function VehiclesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="vehicles" className="bg-[#0d0d0d] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <h2 className="text-white text-4xl font-bold">
            Featured <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Vehicles</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VEHICLES.map((vehicle, i) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}