import { motion } from "motion/react";

export default function Navbar({ onEnrollClick }: { onEnrollClick: () => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-nav h-20 flex items-center px-6">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        {/* Logo and Brand Name on the Left */}
        <div className="flex items-center gap-4">
          <div className="w-[60px] h-[60px] rounded-full border-2 border-clifton-blue flex items-center justify-center bg-white shadow-md overflow-hidden p-0.5 shrink-0">
            <img src="/logo.png" alt="Clifton Driving School Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
          <span className="text-clifton-blue font-black text-lg md:text-xl uppercase tracking-tighter leading-none">
            Clifton <br className="md:hidden" />
            <span className="text-clifton-red">Driving School</span>
          </span>
        </div>
        
        {/* Navigation Links on the Right */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#hero" className="text-clifton-blue font-bold text-sm uppercase tracking-widest hover:text-clifton-red transition-colors">Home</a>
          <a href="#branches" className="text-clifton-blue font-bold text-sm uppercase tracking-widest hover:text-clifton-red transition-colors">Branches</a>
          <a href="#pricing" className="text-clifton-blue font-bold text-sm uppercase tracking-widest hover:text-clifton-red transition-colors">Pricing</a>
          <a href="#contact" className="text-clifton-blue font-bold text-sm uppercase tracking-widest hover:text-clifton-red transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Placeholder (Optional, but good for UX) */}
        <div className="md:hidden">
          <button 
            onClick={onEnrollClick}
            className="bg-clifton-red text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest"
          >
            Enroll
          </button>
        </div>
      </div>
    </nav>
  );
}
