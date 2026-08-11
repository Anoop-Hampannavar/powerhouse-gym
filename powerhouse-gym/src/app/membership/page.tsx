'use client';

import Navbar from '@/components/Navbar';
import { CheckCircle2, Phone } from 'lucide-react';

export default function MembershipPage() {
  const plans = [
    { name: 'Student Special', price: '₹499', period: '/month', tag: 'Student Offer' },
    { name: 'Strength Training', price: '₹699', period: '/month', tag: 'Standard' },
    { name: 'Strength + Cardio', price: '₹899', period: '/month', tag: 'Pro Athlete' },
    { name: 'Personal Training', price: '₹1999', period: '/month', tag: '1-on-1 Guidance' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic">
            POWERHOUSE <span className="text-power-gold">MEMBERSHIPS</span>
          </h1>
          <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest mt-2">
            Select Your Plan & Join Coach Vinay Patil
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, i) => (
            <div key={i} className="p-8 bg-neutral-900 border border-neutral-800 hover:border-power-gold transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase text-power-gold bg-power-gold/10 px-2 py-1 border border-power-gold/30 tracking-widest">
                  {p.tag}
                </span>
                <h3 className="text-xl font-black uppercase mt-4">{p.name}</h3>
                <div className="my-6">
                  <span className="text-4xl font-black text-white">{p.price}</span>
                  <span className="text-neutral-500 text-xs font-bold">{p.period}</span>
                </div>
                <ul className="space-y-2.5 text-xs font-bold text-neutral-300 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-power-gold" /> Heavy Machinery Access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-power-gold" /> Personal Trainer Guidance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-power-gold" /> Free Workout Chart
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/917996287341"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-power-gold text-black font-black uppercase text-xs text-center transition-all block flex items-center justify-center gap-2"
              >
                <Phone size={14} /> Claim Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
