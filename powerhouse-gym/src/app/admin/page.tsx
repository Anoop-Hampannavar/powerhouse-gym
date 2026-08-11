'use client';

import React from 'react';
import { Users, Calendar, Trophy, Dumbbell } from 'lucide-react';

export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 bg-neutral-900 border border-neutral-800">
          <Users className="text-power-gold mb-2" size={24} />
          <h3 className="text-3xl font-black">120+</h3>
          <p className="text-xs font-bold text-neutral-400 uppercase">Active Members</p>
        </div>
        <div className="p-6 bg-neutral-900 border border-neutral-800">
          <Calendar className="text-power-gold mb-2" size={24} />
          <h3 className="text-3xl font-black">4 Batches</h3>
          <p className="text-xs font-bold text-neutral-400 uppercase">Daily Schedules</p>
        </div>
        <div className="p-6 bg-neutral-900 border border-neutral-800">
          <Dumbbell className="text-power-gold mb-2" size={24} />
          <h3 className="text-3xl font-black">100%</h3>
          <p className="text-xs font-bold text-neutral-400 uppercase">Iron Fitness Equipment</p>
        </div>
        <div className="p-6 bg-neutral-900 border border-neutral-800">
          <Trophy className="text-power-gold mb-2" size={24} />
          <h3 className="text-3xl font-black">Vinay Patil</h3>
          <p className="text-xs font-bold text-neutral-400 uppercase">Head Coach</p>
        </div>
      </div>

      <div className="p-8 bg-neutral-900 border border-neutral-800">
        <h2 className="text-xl font-black uppercase mb-4">Coach Operations Control</h2>
        <p className="text-sm text-neutral-400">
          Manage member registrations, view active subscriptions, and update daily batch timings.
        </p>
      </div>
    </div>
  );
}
