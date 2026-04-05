import { motion } from "motion/react";

export default function Hero({ onEnrollClick }: { onEnrollClick: () => void }) {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/clifton-cars.png" 
          alt="Clifton Driving School Cars" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-clifton-blue/60 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
        >
          <span className="text-white font-black text-xs md:text-sm uppercase tracking-[0.3em]">Clifton Driving School</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Master the Road <br />
          <span className="text-clifton-red">with Confidence.</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/90 mb-4 font-medium leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          We are a Kenyan driving school which offers professional driving course and training. <br className="hidden md:block" />
          We ensure that our students are the best on the road.
        </motion.p>

        <motion.p
          className="text-clifton-red font-black text-lg md:text-xl italic mb-10 uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          "Smart Driving Starts Here"
        </motion.p>

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <button 
            onClick={onEnrollClick}
            className="pulse-red bg-clifton-red text-white px-10 py-4 rounded-full font-black text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-clifton-red/30"
          >
            Enroll Now
          </button>
          <a 
            href="#branches"
            className="border-2 border-white text-white px-10 py-4 rounded-full font-black text-lg uppercase tracking-widest hover:bg-white hover:text-clifton-blue transition-all"
          >
            View Branches
          </a>
        </motion.div>
      </div>
    </section>
  );
}
