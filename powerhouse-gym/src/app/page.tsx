'use client';

import Navbar from '@/components/Navbar';
import { Phone, MapPin, Flame, Clock, CheckCircle2, Trophy } from 'lucide-react';

export default function Home() {
  const plans = [
    { name: 'Student Special', price: '₹499', period: '/month', tag: 'Most Popular' },
    { name: 'Strength Training', price: '₹699', period: '/month', tag: 'Standard' },
    { name: 'Strength + Cardio', price: '₹899', period: '/month', tag: 'Pro Athlete' },
    { name: 'Personal Training', price: '₹1999', period: '/month', tag: '1-on-1 Coach' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-power-gold/10 border border-power-gold/30 text-power-gold text-xs font-black uppercase tracking-widest">
            <Flame size={14} /> ದೇಹವಲ್ಲ, ಶಕ್ತಿ ನಿಮ್ಮ ಪರಿಚಯ
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight italic leading-none">
            DISCIPLINE TODAY.<br />
            <span className="text-power-gold">STRENGTH TOMORROW.</span>
          </h1>
          <p className="text-neutral-400 font-medium text-base md:text-lg">
            Train hard at Nidasoshi's premier fitness facility. Heavy machinery, cardio zones, and expert guidance under Coach Vinay Patil.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="tel:7996287341" 
              className="px-8 py-4 bg-power-gold text-black font-black uppercase tracking-wider text-sm hover:bg-power-yellow transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)]"
            >
              Call 7996287341
            </a>
            <a 
              href="#plans" 
              className="px-8 py-4 border border-neutral-700 hover:border-white font-black uppercase tracking-wider text-sm transition-all"
            >
              View Membership
            </a>
          </div>
        </div>

        <div className="flex-1 relative w-full border-2 border-power-gold/40 rounded-lg overflow-hidden shadow-2xl">
          <img src="/images/banner.jpg" alt="Powerhouse Gym Poster" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* GYM TIMINGS */}
      <section id="timings" className="py-16 bg-neutral-950 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-wide">
              BATCH <span className="text-power-gold">TIMINGS</span>
            </h2>
            <p className="text-neutral-400 text-sm font-semibold uppercase tracking-widest mt-2">Gents & Ladies Separate Schedules</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-none relative">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-power-gold" size={28} />
                <h3 className="text-2xl font-black uppercase tracking-wider">Gents Timings</h3>
              </div>
              <div className="space-y-4 text-neutral-300 font-bold">
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span>Morning Batch</span>
                  <span className="text-power-gold">05:30 AM - 09:00 AM</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span>Evening Batch</span>
                  <span className="text-power-gold">05:00 PM - 09:00 PM</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-none relative">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-power-gold" size={28} />
                <h3 className="text-2xl font-black uppercase tracking-wider">Ladies Timings</h3>
              </div>
              <div className="space-y-4 text-neutral-300 font-bold">
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span>Morning Batch</span>
                  <span className="text-power-gold">06:30 AM - 11:00 AM</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span>Evening Batch</span>
                  <span className="text-power-gold">03:00 PM - 05:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section id="plans" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic">
            MEMBERSHIP <span className="text-power-gold">PLANS</span>
          </h2>
          <p className="text-neutral-400 text-sm font-bold uppercase tracking-widest mt-2">Affordable Rates • Elite Equipment</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, i) => (
            <div key={i} className="p-8 bg-neutral-900 border border-neutral-800 hover:border-power-gold transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase text-power-gold tracking-widest">{p.tag}</span>
                <h3 className="text-xl font-black uppercase mt-2">{p.name}</h3>
                <div className="my-6">
                  <span className="text-4xl font-black text-white">{p.price}</span>
                  <span className="text-neutral-500 text-xs font-bold">{p.period}</span>
                </div>
                <ul className="space-y-2 text-xs font-bold text-neutral-400 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-power-gold" /> Heavy Machinery Access</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-power-gold" /> Trainer Guidance</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-power-gold" /> Free Workout Plan</li>
                </ul>
              </div>
              <a 
                href="https://wa.me/917996287341" 
                target="_blank" 
                className="w-full py-3 bg-neutral-800 hover:bg-power-gold hover:text-black font-black uppercase text-xs text-center transition-all"
              >
                Join Plan
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ACTUAL GYM PHOTOS GALLERY */}
      <section id="facility" className="py-20 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic">
              THE <span className="text-power-gold">IRON ARENA</span>
            </h2>
            <p className="text-neutral-400 text-sm font-bold uppercase tracking-widest mt-2">Take a Look Inside Powerhouse Gym</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-80 overflow-hidden border border-neutral-800">
              <img src="/images/gym1.jpg" alt="Gym Interior" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
            </div>
            <div className="h-80 overflow-hidden border border-neutral-800">
              <img src="/images/gym2.jpg" alt="Cardio Zone" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
            </div>
            <div className="h-80 overflow-hidden border border-neutral-800">
              <img src="/images/gym3.jpg" alt="Free Weights Area" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION & FOOTER */}
      <footer id="contact" className="py-16 bg-black border-t border-neutral-800 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-black uppercase italic mb-4">POWERHOUSE <span className="text-power-gold">GYM</span></h3>
            <p className="flex items-center gap-2 text-neutral-300 font-bold mb-2">
              <MapPin size={18} className="text-power-gold" /> Nidasoshi Gate, Tal. Hukkeri, Dist. Belagavi
            </p>
            <p className="flex items-center gap-2 text-neutral-300 font-bold mb-6">
              <Trophy size={18} className="text-power-gold" /> Head Coach: Vinay Patil
            </p>
            <a 
              href="tel:7996287341" 
              className="inline-flex items-center gap-2 text-2xl font-black text-power-gold hover:underline"
            >
              <Phone size={24} /> +91 7996287341
            </a>
          </div>

          <div className="text-left md:text-right text-xs text-neutral-500 font-bold space-y-2">
            <p>© 2026 Powerhouse Gym Nidasoshi. All Rights Reserved.</p>
            <p>Built for Power, Endurance & Strength.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}