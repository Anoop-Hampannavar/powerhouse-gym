'use client';

import Link from 'next/link';
import { Dumbbell, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
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
            MEMBER <span className="text-power-gold">LOGIN</span>
          </h1>
          <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest mt-1">
            Access Powerhouse Gym Portal
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-black uppercase text-neutral-300 tracking-wider mb-2">
              Phone Number / Email
            </label>
            <input 
              type="text" 
              placeholder="Enter registered contact"
              className="w-full px-4 py-3 bg-black border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-power-gold text-sm font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase text-neutral-300 tracking-wider mb-2">
              Password
            </label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-black border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-power-gold text-sm font-medium"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-power-gold text-black font-black uppercase text-sm tracking-wider hover:bg-power-yellow transition-all"
          >
            Enter Portal
          </button>
        </form>

        <div className="mt-8 text-center border-t border-neutral-800 pt-6">
          <p className="text-xs text-neutral-500 font-bold">
            Not a member yet?{' '}
            <a href="https://wa.me/917996287341" target="_blank" rel="noopener noreferrer" className="text-power-gold hover:underline">
              Contact Coach Vinay
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
