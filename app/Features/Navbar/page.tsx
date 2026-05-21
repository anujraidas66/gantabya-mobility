'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`transition ${isActive ? 'text-green-500 font-medium' : 'text-gray-300 hover:text-white'}`}
    >
      {children}
    </Link>
  );
}

export default function Page() {
  return (
    <div className="bg-[#111111] text-white">
      <nav className="flex items-center justify-between px-10 py-6">
        
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center font-bold text-black">G</div>
          <span className="text-xl font-bold">gantabya</span>
        </div>

        <div className="flex items-center gap-8">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/our-bikes">Our Bikes</NavItem>
          <NavItem href="/technology">Technology</NavItem>
          <NavItem href="/about-us">About Us</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/support">Support</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </div>

        <button className="bg-[#00d65c] text-black px-8 py-2.5 font-bold rounded-full hover:bg-[#00b34d] transition-colors">
          Book Test Ride
        </button>
      </nav>
    </div>
  );
}