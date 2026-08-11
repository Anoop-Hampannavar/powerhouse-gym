'use client';

import Link from 'next/link';
import { Dumbbell, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="p-2 bg-power-gold text-black transform -skew-x-12">
            <Dumbbell className="text-black font-bold" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-widest text-white uppercase italic leading-none">
              POWER<span className="text-power-gold">HOUSE</span>
            </span>
            <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">Gents & Ladies Gym</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-extrabold uppercase text-xs tracking-wider text-neutral-300">
          <a href="#plans" className="hover:text-power-gold transition-colors">Plans</a>
          <a href="#timings" className="hover:text-power-gold transition-colors">Timings</a>
          <a href="#facility" className="hover:text-power-gold transition-colors">Facility</a>
          <a href="#contact" className="hover:text-power-gold transition-colors">Contact</a>
        </div>

        <a 
          href="https://wa.me/917996287341?text=Hi%20Coach%20Vinay,%20I%20want%20to%20join%20Powerhouse%20Gym!" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-power-gold text-black font-black uppercase text-xs tracking-wider transform -skew-x-12 hover:bg-power-yellow transition-all flex items-center gap-2"
        >
          <Phone size={14} className="transform skew-x-12" />
          <span className="transform skew-x-12">Contact Coach</span>
        </a>
      </div>
    </nav>
  );
}