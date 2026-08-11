'use client';

import Navbar from '@/components/Navbar';
import { Phone, MapPin, Flame, Clock, CheckCircle2, Trophy, Dumbbell, Zap, HeartPulse, Activity } from 'lucide-react';

export default function Home() {
  const plans = [
    { name: 'Student Special', price: '₹499', period: '/month', tag: 'Student Offer', desc: 'Affordable entry rate for college and school students.' },
    { name: 'Strength Training', price: '₹699', period: '/month', tag: 'Standard', desc: 'Full access to weight training & dumbbell equipment.' },
    { name: 'Strength + Cardio', price: '₹899', period: '/month', tag: 'Pro Athlete', desc: 'Complete strength setup plus treadmill & cardio zones.' },
    { name: 'Personal Training', price: '₹1999', period: '/month', tag: '1-on-1 Guidance', desc: 'Customized workouts & direct personal coaching.' },
  ];

  const exercises = [
    { title: 'Weight Training', icon: Dumbbell },
    { title: 'Dumbbell Workout', icon: Activity },
    { title: 'Cardio Training', icon: HeartPulse },
    { title: 'Strength Training', icon: Zap },
    { title: 'Functional Training', icon: Flame },
    { title: 'Cross Training', icon: Trophy },
    { title: 'Core Training', icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-power-gold selection:text-black">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-16 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-power-gold/10 border border-power-gold/40 text-power-gold text-xs font-black uppercase tracking-widest">
              <Flame size={14} /> ದೇಹವಲ್ಲ, ಶಕ್ತಿ ನಿಮ್ಮ ಪರಿಚಯ
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-700 text-neutral-300 text-xs font-black uppercase tracking-widest">
              Gents & Ladies Gym
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight italic leading-none">
            DISCIPLINE TODAY.<br />
            <span className="text-power-gold">STRENGTH TOMORROW.</span>
          </h1>

          <p className="text-neutral-400 font-medium text-base md:text-lg max-w-xl">
            Train hard, be strong, and unleash beast mode at Nidasoshi’s premier fitness facility under Head Coach Vinay Patil.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="tel:7996287341" 
              className="px-8 py-4 bg-power-gold text-black font-black uppercase tracking-wider text-sm hover:bg-power-yellow transition-all shadow-[0_0_25px_rgba(255,215,0,0.35)] flex items-center gap-2"
            >
              <Phone size={18} /> Call 7996287341
            </a>
            <a 
              href="#plans" 
              className="px-8 py-4 border border-neutral-700 hover:border-power-gold hover:text-power-gold font-black uppercase tracking-wider text-sm transition-all"
            >
              Membership Plans
            </a>
          </div>

          <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-black tracking-widest uppercase text-neutral-400 border-t border-neutral-800">
            <div>⚡ Train Hard</div>
            <div>🔥 Be Strong</div>
            <div>💪 Beast Mode</div>
          </div>
        </div>

        {/* Hero Banner Image (.jpeg) */}
        <div className="flex-1 relative w-full border-2 border-power-gold/50 rounded-none overflow-hidden shadow-[0_0_40px_rgba(255,215,0,0.15)] bg-neutral-900">
          <img src="/images/banner.jpeg" alt="Powerhouse Gym Banner" className="w-full h-auto object-cover block" />
        </div>
      </section>

      {/* BATCH TIMINGS */}
      <section id="timings" className="py-16 bg-neutral-950 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-wide">
              BATCH <span className="text-power-gold">TIMINGS</span>
            </h2>
            <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest mt-2">Dedicated Separate Timings for Gents & Ladies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-neutral-900 border border-neutral-800 relative group hover:border-power-gold/50 transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="text-power-gold" size={28} />
                  <h3 className="text-2xl font-black uppercase tracking-wider">Gents Batch</h3>
                </div>
                <span className="text-[10px] bg-power-gold/10 text-power-gold border border-power-gold/30 px-2 py-1 font-bold uppercase">Morning & Evening</span>
              </div>
              <div className="space-y-4 text-neutral-300 font-bold">
                <div className="flex justify-between border-b border-neutral-800 pb-3">
                  <span className="text-neutral-400 uppercase text-xs">Morning Batch</span>
                  <span className="text-power-gold text-base font-black">05:30 AM – 09:00 AM</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-3">
                  <span className="text-neutral-400 uppercase text-xs">Evening Batch</span>
                  <span className="text-power-gold text-base font-black">05:00 PM – 09:00 PM</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-neutral-900 border border-neutral-800 relative group hover:border-power-gold/50 transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="text-power-gold" size={28} />
                  <h3 className="text-2xl font-black uppercase tracking-wider">Ladies Batch</h3>
                </div>
                <span className="text-[10px] bg-power-gold/10 text-power-gold border border-power-gold/30 px-2 py-1 font-bold uppercase">Morning & Afternoon</span>
              </div>
              <div className="space-y-4 text-neutral-300 font-bold">
                <div className="flex justify-between border-b border-neutral-800 pb-3">
                  <span className="text-neutral-400 uppercase text-xs">Morning Batch</span>
                  <span className="text-power-gold text-base font-black">06:30 AM – 11:00 AM</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-3">
                  <span className="text-neutral-400 uppercase text-xs">Evening Batch</span>
                  <span className="text-power-gold text-base font-black">03:00 PM – 05:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP PLANS */}
      <section id="plans" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic">
            MEMBERSHIP <span className="text-power-gold">PLANS</span>
          </h2>
          <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest mt-2">Transparent Monthly Pricing • No Hidden Costs</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, i) => (
            <div key={i} className="p-8 bg-neutral-900 border border-neutral-800 hover:border-power-gold transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-black uppercase text-power-gold bg-power-gold/10 px-2 py-1 border border-power-gold/30 tracking-widest">{p.tag}</span>
                <h3 className="text-xl font-black uppercase mt-4">{p.name}</h3>
                <p className="text-xs text-neutral-400 font-medium mt-1 mb-6">{p.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-black text-white group-hover:text-power-gold transition-colors">{p.price}</span>
                  <span className="text-neutral-500 text-xs font-bold">{p.period}</span>
                </div>
                <ul className="space-y-2.5 text-xs font-bold text-neutral-300 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-power-gold" /> Heavy Machinery Access</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-power-gold" /> Coach Vinay Patil Guidance</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-power-gold" /> Customized Workout Chart</li>
                </ul>
              </div>
              <a 
                href="https://wa.me/917996287341?text=Hi%20Coach%20Vinay,%20I%20want%20to%20join%20the%20" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 bg-neutral-800 hover:bg-power-gold hover:text-black font-black uppercase text-xs text-center transition-all block"
              >
                Join Plan
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* EXERCISES & DISCIPLINES */}
      <section className="py-16 bg-neutral-950 border-t border-neutral-800 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic">
              GYM <span className="text-power-gold">EXERCISES</span>
            </h2>
            <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest mt-2">Comprehensive Training Disciplines</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {exercises.map((e, idx) => {
              const IconComp = e.icon;
              return (
                <div key={idx} className="p-4 bg-neutral-900 border border-neutral-800 text-center flex flex-col items-center justify-center gap-3 hover:border-power-gold transition-all">
                  <IconComp className="text-power-gold" size={24} />
                  <span className="text-xs font-black uppercase tracking-wider">{e.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FACILITY GALLERY (.jpeg images) */}
      <section id="facility" className="py-20 bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic">
              THE <span className="text-power-gold">IRON ARENA</span>
            </h2>
            <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest mt-2">Real Photos from Powerhouse Gym Setup</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-80 overflow-hidden border border-neutral-800 bg-neutral-900">
              <img src="/images/gym1.jpeg" alt="Powerhouse Gym Setup 1" className="w-full h-full object-cover hover:scale-105 transition-all duration-500 block" />
            </div>
            <div className="h-80 overflow-hidden border border-neutral-800 bg-neutral-900">
              <img src="/images/gym2.jpeg" alt="Powerhouse Gym Setup 2" className="w-full h-full object-cover hover:scale-105 transition-all duration-500 block" />
            </div>
            <div className="h-80 overflow-hidden border border-neutral-800 bg-neutral-900">
              <img src="/images/gym3.jpeg" alt="Powerhouse Gym Setup 3" className="w-full h-full object-cover hover:scale-105 transition-all duration-500 block" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-16 bg-neutral-950 border-t border-neutral-800 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-black uppercase italic mb-2">POWERHOUSE <span className="text-power-gold">GYM</span></h3>
            <p className="text-sm text-power-gold font-bold mb-4">ದೇಹವಲ್ಲ, ಶಕ್ತಿ ನಿಮ್ಮ ಪರಿಚಯ</p>
            <p className="flex items-center gap-2 text-neutral-300 font-bold mb-2 text-sm">
              <MapPin size={18} className="text-power-gold shrink-0" /> Nidasoshi Gate, Tal. Hukkeri, Dist. Belagavi
            </p>
            <p className="flex items-center gap-2 text-neutral-300 font-bold mb-6 text-sm">
              <Trophy size={18} className="text-power-gold shrink-0" /> Contact: Vinay Patil
            </p>
            <a 
              href="tel:7996287341" 
              className="inline-flex items-center gap-2 text-2xl font-black text-power-gold hover:underline"
            >
              <Phone size={22} /> +91 7996287341
            </a>
          </div>

          <div className="text-left md:text-right text-xs text-neutral-500 font-bold space-y-2">
            <p>© 2026 Powerhouse Gym Nidasoshi. All Rights Reserved.</p>
            <p>Discipline Today. Strength Tomorrow.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
