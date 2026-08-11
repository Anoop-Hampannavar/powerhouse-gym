'use client';

import React from 'react';
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
    <div style={{ backgroundColor: '#000000', color: '#ffffff', fontFamily: 'Impact, sans-serif', minHeight: '100vh' }}>
      
      {/* NAVBAR */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(0,0,0,0.95)', borderBottom: '2px solid #FFD700', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ backgroundColor: '#FFD700', color: '#000', padding: '8px 12px', transform: 'skewX(-10deg)', fontWeight: '900' }}>
            <Dumbbell size={24} />
          </div>
          <span style={{ fontSize: '28px', fontStyle: 'italic', letterSpacing: '2px', color: '#FFF' }}>
            POWER<span style={{ color: '#FFD700' }}>HOUSE</span> GYM
          </span>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="tel:7996287341" style={{ backgroundColor: '#FFD700', color: '#000', padding: '10px 20px', fontWeight: 'bold', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Phone size={16} /> Call Coach Vinay
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '1200px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
        <div style={{ flex: '1 1 500px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid #FFD700', backgroundColor: 'rgba(255,215,0,0.1)', color: '#FFD700', padding: '6px 12px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
            <Flame size={16} /> ದೇಹವಲ್ಲ, ಶಕ್ತಿ ನಿಮ್ಮ ಪರಿಚಯ
          </div>

          <h1 style={{ fontSize: '56px', textTransform: 'uppercase', fontStyle: 'italic', lineHeight: '1', margin: '0 0 20px 0' }}>
            DISCIPLINE TODAY.<br />
            <span style={{ color: '#FFD700' }}>STRENGTH TOMORROW.</span>
          </h1>

          <p style={{ fontFamily: 'sans-serif', color: '#AAA', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
            Train hard, be strong, and unleash beast mode at Nidasoshi’s premier fitness facility under Head Coach Vinay Patil.
          </p>

          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://wa.me/917996287341" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#FFD700', color: '#000', padding: '15px 30px', fontSize: '18px', fontWeight: '900', textDecoration: 'none', textTransform: 'uppercase', display: 'inline-block', boxShadow: '0 0 20px rgba(255,215,0,0.4)' }}>
              Join Now on WhatsApp
            </a>
          </div>
        </div>

        {/* HERO BANNER IMAGE */}
        <div style={{ flex: '1 1 450px', border: '3px solid #FFD700', boxShadow: '0 0 30px rgba(255,215,0,0.2)', backgroundColor: '#111' }}>
          <img src="/images/banner.jpeg" alt="Powerhouse Gym Banner" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </section>

      {/* BATCH TIMINGS */}
      <section style={{ backgroundColor: '#0D0D0D', borderTop: '1px solid #222', borderBottom: '1px solid #222', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '42px', fontStyle: 'italic', margin: 0 }}>
              BATCH <span style={{ color: '#FFD700' }}>TIMINGS</span>
            </h2>
            <p style={{ fontFamily: 'sans-serif', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '5px' }}>Gents & Ladies Separate Schedules</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: '#141414', border: '1px solid #333', padding: '30px' }}>
              <div style={{ display: 'flex', itemsCenter: 'center', gap: '10px', marginBottom: '20px' }}>
                <Clock color="#FFD700" size={28} />
                <h3 style={{ fontSize: '24px', margin: 0, textTransform: 'uppercase' }}>Gents Batch</h3>
              </div>
              <div style={{ fontFamily: 'sans-serif', fontSize: '15px', color: '#DDD' }}>
                <div style={{ display: 'flex', justifyBetween: 'space-between', borderBottom: '1px solid #222', paddingBottom: '10px', marginBottom: '10px' }}>
                  <span>Morning Batch:</span>
                  <strong style={{ color: '#FFD700' }}>05:30 AM – 09:00 AM</strong>
                </div>
                <div style={{ display: 'flex', justifyBetween: 'space-between' }}>
                  <span>Evening Batch:</span>
                  <strong style={{ color: '#FFD700' }}>05:00 PM – 09:00 PM</strong>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#141414', border: '1px solid #333', padding: '30px' }}>
              <div style={{ display: 'flex', itemsCenter: 'center', gap: '10px', marginBottom: '20px' }}>
                <Clock color="#FFD700" size={28} />
                <h3 style={{ fontSize: '24px', margin: 0, textTransform: 'uppercase' }}>Ladies Batch</h3>
              </div>
              <div style={{ fontFamily: 'sans-serif', fontSize: '15px', color: '#DDD' }}>
                <div style={{ display: 'flex', justifyBetween: 'space-between', borderBottom: '1px solid #222', paddingBottom: '10px', marginBottom: '10px' }}>
                  <span>Morning Batch:</span>
                  <strong style={{ color: '#FFD700' }}>06:30 AM – 11:00 AM</strong>
                </div>
                <div style={{ display: 'flex', justifyBetween: 'space-between' }}>
                  <span>Evening Batch:</span>
                  <strong style={{ color: '#FFD700' }}>03:00 PM – 05:00 PM</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP PLANS */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '42px', fontStyle: 'italic', margin: 0 }}>
            MEMBERSHIP <span style={{ color: '#FFD700' }}>PLANS</span>
          </h2>
          <p style={{ fontFamily: 'sans-serif', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '5px' }}>Affordable Pricing • Heavy Equipment</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {plans.map((p, i) => (
            <div key={i} style={{ backgroundColor: '#111', border: '1px solid #222', padding: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ backgroundColor: 'rgba(255,215,0,0.1)', color: '#FFD700', border: '1px solid #FFD700', padding: '3px 8px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>{p.tag}</span>
                <h3 style={{ fontSize: '22px', margin: '15px 0 5px 0', textTransform: 'uppercase' }}>{p.name}</h3>
                <div style={{ margin: '15px 0' }}>
                  <span style={{ fontSize: '36px', color: '#FFD700', fontWeight: 'bold' }}>{p.price}</span>
                  <span style={{ fontFamily: 'sans-serif', color: '#666', fontSize: '12px' }}>{p.period}</span>
                </div>
              </div>
              <a href="https://wa.me/917996287341" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#222', color: '#FFD700', textAlign: 'center', padding: '12px', textDecoration: 'none', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '14px', border: '1px solid #FFD700', display: 'block', marginTop: '20px' }}>
                Select Plan
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ backgroundColor: '#0D0D0D', borderTop: '1px solid #222', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '42px', fontStyle: 'italic', margin: 0 }}>
              THE <span style={{ color: '#FFD700' }}>IRON ARENA</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ border: '1px solid #333', overflow: 'hidden', height: '260px' }}>
              <img src="/images/gym1.jpeg" alt="Powerhouse Setup 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ border: '1px solid #333', overflow: 'hidden', height: '260px' }}>
              <img src="/images/gym2.jpeg" alt="Powerhouse Setup 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ border: '1px solid #333', overflow: 'hidden', height: '260px' }}>
              <img src="/images/gym3.jpeg" alt="Powerhouse Setup 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#000', borderTop: '2px solid #FFD700', padding: '40px 20px', textFont: 'sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '28px', fontStyle: 'italic', margin: '0 0 5px 0' }}>POWERHOUSE <span style={{ color: '#FFD700' }}>GYM</span></h3>
            <p style={{ fontFamily: 'sans-serif', color: '#AAA', margin: '5px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} color="#FFD700" /> Nidasoshi Gate, Tal. Hukkeri, Dist. Belagavi
            </p>
            <p style={{ fontFamily: 'sans-serif', color: '#AAA', margin: '5px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Trophy size={16} color="#FFD700" /> Head Coach: Vinay Patil
            </p>
          </div>
          <div>
            <a href="tel:7996287341" style={{ fontSize: '24px', color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>
              📞 +91 7996287341
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
