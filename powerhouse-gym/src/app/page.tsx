'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Flame, Clock, Trophy, Dumbbell } from 'lucide-react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const plans = [
    { name: 'Student Special', price: '₹499', period: '/month', tag: 'Student Offer' },
    { name: 'Strength Training', price: '₹699', period: '/month', tag: 'Standard' },
    { name: 'Strength + Cardio', price: '₹899', period: '/month', tag: 'Pro Athlete' },
    { name: 'Personal Training', price: '₹1999', period: '/month', tag: '1-on-1 Guidance' },
  ];

  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', fontFamily: 'Impact, sans-serif', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      
      {/* KEYFRAME ANIMATIONS & STYLES */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        @keyframes loaderProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 15px rgba(255, 215, 0, 0.2); }
          50% { box-shadow: 0 0 35px rgba(255, 215, 0, 0.6); }
        }
        .animate-progress {
          animation: loaderProgress 1.8s ease-in-out forwards;
        }
        .glow-box {
          animation: pulseGlow 3s infinite ease-in-out;
        }
        @media (max-width: 768px) {
          .nav-container { padding: 12px 16px !important; }
          .nav-logo-text { font-size: 20px !important; }
          .nav-btn { padding: 8px 12px !important; font-size: 12px !important; }
          .hero-section { padding-top: 100px !important; padding-bottom: 40px !important; gap: 24px !important; }
          .hero-title { font-size: 38px !important; }
          .section-title { font-size: 32px !important; }
          .coach-container { flex-direction: column !important; text-align: center !important; }
        }
      `}</style>

      {/* GYM LOADER SCREEN */}
      {loading && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: '#000000', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ backgroundColor: '#FFD700', color: '#000', padding: '10px 14px', transform: 'skewX(-10deg)', fontWeight: '900' }}>
              <Dumbbell size={32} />
            </div>
            <h1 style={{ fontSize: '40px', fontStyle: 'italic', letterSpacing: '2px', color: '#FFF', margin: 0 }}>
              POWER<span style={{ color: '#FFD700' }}>HOUSE</span> GYM
            </h1>
          </div>

          <p style={{ fontFamily: 'sans-serif', color: '#FFD700', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px', fontWeight: 'bold', textAlign: 'center' }}>
            📍 Nidasoshi Gate | Tal. Hukkeri | Dist. Belagavi
          </p>

          <div style={{ width: '260px', height: '6px', backgroundColor: '#1A1A1A', border: '1px solid #333', overflow: 'hidden' }}>
            <div className="animate-progress" style={{ height: '100%', backgroundColor: '#FFD700', boxShadow: '0 0 15px #FFD700' }} />
          </div>

          <span style={{ fontFamily: 'sans-serif', color: '#666', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '12px' }}>
            FORGING UNYIELDING STRENGTH...
          </span>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="nav-container" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(0,0,0,0.95)', borderBottom: '2px solid #FFD700', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ backgroundColor: '#FFD700', color: '#000', padding: '6px 10px', transform: 'skewX(-10deg)', fontWeight: '900' }}>
            <Dumbbell size={20} />
          </div>
          <span className="nav-logo-text" style={{ fontSize: '26px', fontStyle: 'italic', letterSpacing: '1px', color: '#FFF' }}>
            POWER<span style={{ color: '#FFD700' }}>HOUSE</span>
          </span>
        </div>

        <div>
          <a href="tel:7996287341" className="nav-btn" style={{ backgroundColor: '#FFD700', color: '#000', padding: '10px 18px', fontWeight: 'bold', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            <Phone size={14} /> Call Coach
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section" style={{ paddingTop: '120px', paddingBottom: '50px', maxWidth: '1200px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
        <div style={{ flex: '1 1 300px', width: '100%' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1px solid #FFD700', backgroundColor: 'rgba(255,215,0,0.1)', color: '#FFD700', padding: '6px 12px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
            <Flame size={14} /> ದೇಹವಲ್ಲ, ಶಕ್ತಿ ನಿಮ್ಮ ಪರಿಚಯ
          </div>

          <h1 className="hero-title" style={{ fontSize: '56px', textTransform: 'uppercase', fontStyle: 'italic', lineHeight: '1.05', margin: '0 0 16px 0' }}>
            DISCIPLINE TODAY.<br />
            <span style={{ color: '#FFD700' }}>STRENGTH TOMORROW.</span>
          </h1>

          <p style={{ fontFamily: 'sans-serif', color: '#AAA', fontSize: '16px', lineHeight: '1.5', marginBottom: '24px' }}>
            Train hard, be strong, and unleash beast mode at Nidasoshi’s premier fitness facility under Head Coach Vinay Patil.
          </p>

          <div style={{ display: 'flex', gap: '20px', marginBottom: '24px', backgroundColor: '#111', border: '1px solid #333', padding: '15px' }}>
            <div>
              <span style={{ fontSize: '24px', color: '#FFD700', display: 'block' }}>1,500,000+ LBS</span>
              <span style={{ fontFamily: 'sans-serif', fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>LIFTED THIS YEAR</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
            <a href="https://wa.me/917996287341?text=Hi%20Coach%20Vinay,%20I%20want%20to%20join%20Powerhouse%20Gym!" target="_blank" rel="noopener noreferrer" className="glow-box" style={{ backgroundColor: '#FFD700', color: '#000', padding: '16px 24px', fontSize: '16px', fontWeight: '900', textDecoration: 'none', textTransform: 'uppercase', display: 'block', width: '100%', textAlign: 'center' }}>
              Join on WhatsApp
            </a>
          </div>
        </div>

        {/* HERO BANNER IMAGE */}
        <div style={{ flex: '1 1 300px', width: '100%', border: '2px solid #FFD700', boxShadow: '0 0 25px rgba(255,215,0,0.15)', backgroundColor: '#111' }}>
          <img src="/images/banner.jpeg" alt="Powerhouse Gym Banner" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </section>

      {/* HEAD COACH SHOWCASE */}
      <section style={{ backgroundColor: '#0D0D0D', borderTop: '1px solid #222', borderBottom: '1px solid #222', padding: '50px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="coach-container" style={{ display: 'flex', alignItems: 'center', gap: '40px', backgroundColor: '#111', border: '1px solid #FFD700', padding: '30px' }}>
            <div style={{ flex: '0 0 240px', width: '100%', maxWidth: '240px', border: '2px solid #FFD700', overflow: 'hidden', margin: '0 auto' }}>
              <img src="/images/coach.jpeg" alt="Coach Vinay Patil" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1 }}>
              <span style={{ backgroundColor: 'rgba(255,215,0,0.1)', color: '#FFD700', border: '1px solid #FFD700', padding: '4px 10px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                FOUNDER & HEAD COACH
              </span>
              <h2 style={{ fontSize: '38px', fontStyle: 'italic', margin: '12px 0 6px 0', color: '#FFF' }}>
                VINAY <span style={{ color: '#FFD700' }}>PATIL</span>
              </h2>
              <p style={{ fontFamily: 'sans-serif', color: '#AAA', fontSize: '14px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                Personalized strength training, body transformation, and custom diet guidance tailored for gents and ladies at Nidasoshi Gate.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a href="tel:7996287341" style={{ backgroundColor: '#FFD700', color: '#000', padding: '12px 20px', textDecoration: 'none', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Phone size={14} /> Call 7996287341
                </a>
                <a href="https://wa.me/917996287341?text=Hi%20Coach%20Vinay,%20I%20have%20a%20question%20about%20Powerhouse%20Gym!" target="_blank" rel="noopener noreferrer" style={{ border: '1px solid #FFD700', color: '#FFD700', padding: '12px 20px', textDecoration: 'none', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  WhatsApp Direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BATCH TIMINGS */}
      <section style={{ backgroundColor: '#000000', borderBottom: '1px solid #222', padding: '50px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 className="section-title" style={{ fontSize: '42px', fontStyle: 'italic', margin: 0 }}>
              BATCH <span style={{ color: '#FFD700' }}>TIMINGS</span>
            </h2>
            <p style={{ fontFamily: 'sans-serif', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '6px', fontSize: '12px' }}>Gents & Ladies Separate Schedules</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ backgroundColor: '#141414', border: '1px solid #333', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Clock color="#FFD700" size={24} />
                <h3 style={{ fontSize: '22px', margin: 0, textTransform: 'uppercase' }}>Gents Batch</h3>
              </div>
              <div style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#DDD' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #222', paddingBottom: '10px', marginBottom: '10px' }}>
                  <span style={{ color: '#999' }}>Morning Batch:</span>
                  <strong style={{ color: '#FFD700' }}>05:30 AM – 09:00 AM</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#999' }}>Evening Batch:</span>
                  <strong style={{ color: '#FFD700' }}>05:00 PM – 09:00 PM</strong>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#141414', border: '1px solid #333', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Clock color="#FFD700" size={24} />
                <h3 style={{ fontSize: '22px', margin: 0, textTransform: 'uppercase' }}>Ladies Batch</h3>
              </div>
              <div style={{ fontFamily: 'sans-serif', fontSize: '14px', color: '#DDD' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #222', paddingBottom: '10px', marginBottom: '10px' }}>
                  <span style={{ color: '#999' }}>Morning Batch:</span>
                  <strong style={{ color: '#FFD700' }}>06:30 AM – 11:00 AM</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#999' }}>Evening Batch:</span>
                  <strong style={{ color: '#FFD700' }}>03:00 PM – 05:00 PM</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP PLANS */}
      <section style={{ padding: '50px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title" style={{ fontSize: '42px', fontStyle: 'italic', margin: 0 }}>
            MEMBERSHIP <span style={{ color: '#FFD700' }}>PLANS</span>
          </h2>
          <p style={{ fontFamily: 'sans-serif', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '6px', fontSize: '12px' }}>Affordable Pricing • Heavy Equipment</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          {plans.map((p, i) => {
            const encodedMessage = encodeURIComponent(`Hi Coach Vinay, I want to join the ${p.name} (${p.price}) plan at Powerhouse Gym!`);
            const whatsappUrl = `https://wa.me/917996287341?text=${encodedMessage}`;

            return (
              <div key={i} style={{ backgroundColor: '#111', border: '1px solid #222', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ backgroundColor: 'rgba(255,215,0,0.1)', color: '#FFD700', border: '1px solid #FFD700', padding: '3px 8px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>{p.tag}</span>
                  <h3 style={{ fontSize: '20px', margin: '12px 0 4px 0', textTransform: 'uppercase' }}>{p.name}</h3>
                  <div style={{ margin: '12px 0' }}>
                    <span style={{ fontSize: '32px', color: '#FFD700', fontWeight: 'bold' }}>{p.price}</span>
                    <span style={{ fontFamily: 'sans-serif', color: '#666', fontSize: '12px' }}>{p.period}</span>
                  </div>
                </div>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ backgroundColor: '#222', color: '#FFD700', textAlign: 'center', padding: '12px', textDecoration: 'none', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '13px', border: '1px solid #FFD700', display: 'block', marginTop: '16px' }}
                >
                  Select Plan
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ backgroundColor: '#0D0D0D', borderTop: '1px solid #222', padding: '50px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 className="section-title" style={{ fontSize: '42px', fontStyle: 'italic', margin: 0 }}>
              THE <span style={{ color: '#FFD700' }}>IRON ARENA</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            <div style={{ border: '1px solid #333', overflow: 'hidden', height: '220px' }}>
              <img src="/images/gym1.jpeg" alt="Powerhouse Setup 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ border: '1px solid #333', overflow: 'hidden', height: '220px' }}>
              <img src="/images/gym2.jpeg" alt="Powerhouse Setup 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ border: '1px solid #333', overflow: 'hidden', height: '220px' }}>
              <img src="/images/gym3.jpeg" alt="Powerhouse Setup 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ border: '1px solid #333', overflow: 'hidden', height: '220px' }}>
              <img src="/images/gym4.jpg" alt="Powerhouse Setup 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ border: '1px solid #333', overflow: 'hidden', height: '220px' }}>
              <img src="/images/gym5.jpg" alt="Powerhouse Setup 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ border: '1px solid #333', overflow: 'hidden', height: '220px' }}>
              <img src="/images/gym6.jpg" alt="Powerhouse Setup 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#000', borderTop: '2px solid #FFD700', padding: '36px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '26px', fontStyle: 'italic', margin: '0 0 8px 0' }}>POWERHOUSE <span style={{ color: '#FFD700' }}>GYM</span></h3>
            <p style={{ fontFamily: 'sans-serif', color: '#AAA', margin: '4px 0', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
              <MapPin size={16} color="#FFD700" /> Nidasoshi Gate, Tal. Hukkeri, Dist. Belagavi
            </p>
            <p style={{ fontFamily: 'sans-serif', color: '#AAA', margin: '4px 0', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
              <Trophy size={16} color="#FFD700" /> Head Coach: Vinay Patil
            </p>
          </div>
          <div>
            <a href="tel:7996287341" style={{ fontSize: '22px', color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>
              📞 +91 7996287341
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
