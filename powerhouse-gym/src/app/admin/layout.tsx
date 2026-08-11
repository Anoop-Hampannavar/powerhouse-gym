import React from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <div className="bg-neutral-900 border-b border-neutral-800 px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-black uppercase italic tracking-wider">
          POWERHOUSE <span className="text-power-gold">ADMIN DASHBOARD</span>
        </h1>
        <a href="/" className="text-xs font-bold uppercase text-neutral-400 hover:text-white">
          Exit Admin
        </a>
      </div>
      <main className="p-6">{children}</main>
    </div>
  );
}
