
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function NavItem({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`transition duration-200 ${
        isActive 
          ? 'text-green-500 font-semibold' 
          : 'text-gray-300 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/electric', label: 'Our Bikes' },
    { href: '/Technology', label: 'Technology' },
    { href: '/about-us', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/Support', label: 'Support' },
    { href: '/Contact', label: 'Contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#111111]/95 backdrop-blur-md border-b border-gray-800' 
            : 'bg-[#111111]/90 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center font-bold text-black transition-transform group-hover:scale-105">
                G
              </div>
              <span className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
                gantabya
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <NavItem key={item.href} href={item.href}>
                  {item.label}
                </NavItem>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Link href="/Testride">
                <button className="bg-[#00d65c] text-black px-6 xl:px-8 py-2.5 font-semibold rounded-full hover:bg-[#00b34d] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-lg hover:shadow-green-500/25">
                  Book Test Ride
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-x-0 top-16 md:top-20 bg-[#111111]/95 backdrop-blur-md border-b border-gray-800 transition-all duration-300 lg:hidden ${
            isMenuOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-4'
          }`}
          style={{ height: isMenuOpen ? 'auto' : '0', overflow: 'hidden' }}
        >
          <div className="px-4 py-6 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navItems.map((item) => (
              <NavItem key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                <div className="block py-3 px-4 rounded-lg hover:bg-white/5 transition-colors">
                  {item.label}
                </div>
              </NavItem>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="pt-4 px-4">
              <Link href="/Testride" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-[#00d65c] text-black px-6 py-3 font-semibold rounded-full hover:bg-[#00b34d] transition-all duration-200 cursor-pointer">
                  Book Test Ride
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
}
