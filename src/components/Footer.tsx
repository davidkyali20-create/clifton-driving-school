import { Facebook, Instagram, Phone, Award } from "lucide-react";

// Custom TikTok Icon as it's not in Lucide by default or sometimes missing
function TikTokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-clifton-blue text-white pt-20 pb-10 px-6 overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/clifton-cars.png" 
          alt="Clifton Driving School Cars Background" 
          className="w-full h-full object-cover scale-105 opacity-70"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-clifton-blue/60"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand & Hotline */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center p-0.5 shadow-lg">
                <img src="/logo.png" alt="Clifton Driving School Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <span className="font-black text-xl tracking-tighter uppercase">Clifton Driving School</span>
            </div>
            <p className="text-white/60 mb-8 max-w-xs">
              We are a Kenyan driving school which offers professional driving course and training. We ensure that our students are the best on the road. Our instructors are NTSA accredited with great experience in training.
            </p>
            <div className="flex flex-col gap-4 mb-8">
              <a 
                href="tel:0745550777" 
                className="flex items-center gap-3 text-2xl font-black hover:text-clifton-red transition-colors"
              >
                <Phone fill="currentColor" size={24} />
                0745 550 777
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <span className="font-bold uppercase tracking-wider text-xs bg-white/10 px-2 py-1 rounded">Email</span>
                <a href="mailto:Cliftondrivingschoolltd@gmail.com" className="hover:text-clifton-red transition-colors">Cliftondrivingschoolltd@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <span className="font-bold uppercase tracking-wider text-xs bg-white/10 px-2 py-1 rounded">Hours</span>
                <span>Always open</span>
              </div>
            </div>
          </div>

          {/* Social Media Hub */}
          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest">Social Media Hub</h4>
            <div className="flex flex-col gap-4">
              <a 
                href="https://www.tiktok.com/@cliftondrivingschoolltd?_r=1&_t=ZS-95A2nmB6OG8" 
                target="_blank" 
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TikTokIcon size={20} />
                </div>
                <span className="font-medium group-hover:text-clifton-red transition-colors">TikTok</span>
              </a>
              <a 
                href="https://facebook.com/cliftondrivingschool" 
                target="_blank" 
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Facebook size={20} fill="currentColor" />
                </div>
                <span className="font-medium group-hover:text-clifton-red transition-colors">Facebook</span>
              </a>
              <a 
                href="https://instagram.com/clifton_drivingschool" 
                target="_blank" 
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#E4405F] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram size={20} />
                </div>
                <span className="font-medium group-hover:text-clifton-red transition-colors">Instagram</span>
              </a>
            </div>
          </div>

          {/* NTSA Badge */}
          <div className="flex flex-col items-center md:items-end justify-center">
            <div className="border-4 border-white/20 p-6 rounded-3xl text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2 shadow-lg overflow-hidden">
                <img src="/ntsa.png" alt="NTSA Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <p className="font-black text-xl uppercase tracking-tighter">Proudly NTSA Approved</p>
              <p className="text-white/40 text-xs mt-2 uppercase tracking-widest">Certified Training Center</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm font-medium">
          <p>© 2026 Clifton Driving School. All rights reserved.</p>
          <p>Designed for Clifton Driving School.</p>
        </div>
      </div>
    </footer>
  );
}
