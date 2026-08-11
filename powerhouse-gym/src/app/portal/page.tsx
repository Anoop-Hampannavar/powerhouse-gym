'use client';

import Navbar from '@/components/Navbar';
import { Dumbbell, Trophy, Activity } from 'lucide-react';

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-8">
        <div className="p-8 bg-neutral-900 border border-neutral-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-xs font-black uppercase text-power-gold">Member Portal</span>
            <h1 className="text-3xl font-black uppercase italic mt-1">Welcome Warrior</h1>
            <p className="text-xs text-neutral-400 font-bold uppercase mt-1">Status: Active Gym Member</p>
          </div>
          <div className="px-4 py-2 bg-power-gold text-black font-black uppercase text-xs">
            Coach Vinay Patil Squad
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-neutral-900 border border-neutral-800">
            <Dumbbell className="text-power-gold mb-2" size={24} />
            <h3 className="text-xl font-black uppercase">Bench Press PR</h3>
            <p className="text-2xl font-black text-power-gold mt-2">100 KG</p>
          </div>
          <div className="p-6 bg-neutral-900 border border-neutral-800">
            <Trophy className="text-power-gold mb-2" size={24} />
            <h3 className="text-xl font-black uppercase">Deadlift PR</h3>
            <p className="text-2xl font-black text-power-gold mt-2">160 KG</p>
          </div>
          <div className="p-6 bg-neutral-900 border border-neutral-800">
            <Activity className="text-power-gold mb-2" size={24} />
            <h3 className="text-xl font-black uppercase">Squat PR</h3>
            <p className="text-2xl font-black text-power-gold mt-2">140 KG</p>
          </div>
        </div>
      </div>
    </div>
  );
}
