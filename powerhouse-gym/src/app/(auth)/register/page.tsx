'use client';

import Link from 'next/link';
import { Dumbbell, ArrowLeft } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-12 relative">
      <Link 
        href="/" 
        className="absolute top-8 left-8 flex items-center gap-2 text-xs font-black uppercase text-neutral-400 hover:text-power-gold transition-colors"
      >
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 p-8 shadow-2xl">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="p-3 bg-power-gold text-black transform -skew-x-12 mb-4">
            <Dumbbell size={28} />
          </div>
          <h1 className="text-3xl font-black uppercase italic tracking-wider">
            MEMBER <span className="text-power-gold">REGISTRATION</span>
          </h1>
          <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest mt-1">
            Join Powerhouse Gym Today
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-black uppercase text-neutral-300 tracking-wider mb-1.5">
              Full Name
            </label>
            <input 
              type="text" 
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-black border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-power-gold text-sm font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase text-neutral-300 tracking-wider mb-1.5">
              Phone Number
            </label>
            <input 
              type="tel" 
              placeholder="Enter 10-digit mobile number"
              className="w-full px-4 py-3 bg-black border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-power-gold text-sm font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase text-neutral-300 tracking-wider mb-1.5">
              Select Batch
            </label>
            <select className="w-full px-4 py-3 bg-black border border-neutral-800 text-white focus:outline-none focus:border-power-gold text-sm font-medium">
              <option>Gents Morning (05:30 AM - 09:00 AM)</option>
              <option>Gents Evening (05:00 PM - 09:00 PM)</option>
              <option>Ladies Morning (06:30 AM - 11:00 AM)</option>
              <option>Ladies Evening (03:00 PM - 05:00 PM)</option>
            </select>
          </div>

          <button 
            type="submit"
            className="w-full py-4 mt-2 bg-power-gold text-black font-black uppercase text-sm tracking-wider hover:bg-power-yellow transition-all"
          >
            Submit Details
          </button>
        </form>

        <div className="mt-8 text-center border-t border-neutral-800 pt-6">
          <p className="text-xs text-neutral-500 font-bold">
            Prefer direct enrollment?{' '}
            <a href="https://wa.me/917996287341" target="_blank" rel="noopener noreferrer" className="text-power-gold hover:underline">
              WhatsApp Coach Vinay
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
