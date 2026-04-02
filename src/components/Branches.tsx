import { Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";

const branches = [
  { name: "Ruiru (HQ)", address: "New Homes Bld, 1st Floor Rm 101", tel: "0708 433 111", dial: "0708433111" },
  { name: "Githurai", address: "Naivas Road, 1st Floor Rm 4", tel: "0740 710 350", dial: "0740710350" },
  { name: "Riuriro", address: "Judah Stage, 1st Floor, RM 3", tel: "0726 374 074", dial: "0726374074" },
  { name: "Darasha", address: "Bridge Business Centre, 1st Floor RM 2", tel: "0748 833 571", dial: "0748833571" },
  { name: "Kimbo", address: "Off Matangi Road, 1st Floor RM 1", tel: "0707 200 916", dial: "0707200916" },
  { name: "Makongeni", address: "Off Garissa Road, Opp. Leestar Supermarket", tel: "0798 504 718", dial: "0798504718" },
];

export default function Branches() {
  return (
    <section id="branches" className="py-24 bg-white px-6 relative overflow-hidden">
      {/* Blurred Background Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="/clifton-cars.png" 
          alt="Clifton Driving School Cars Background" 
          className="w-full h-full object-cover blur-xl scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-clifton-blue mb-4 uppercase tracking-tighter">Our Branches</h2>
          <div className="w-20 h-1.5 bg-clifton-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <motion.div 
              key={index}
              className="border-2 border-clifton-blue/10 p-8 rounded-2xl hover:border-clifton-blue transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-clifton-blue mb-4 group-hover:text-clifton-red transition-colors">{branch.name}</h3>
              <div className="flex items-start gap-3 text-gray-600 mb-6">
                <MapPin className="shrink-0 text-clifton-red" size={20} />
                <p className="font-medium">{branch.address}</p>
              </div>
              <a 
                href={`tel:${branch.dial}`}
                className="flex items-center justify-center gap-2 w-full bg-clifton-blue text-white py-3 rounded-xl font-bold hover:bg-clifton-red transition-colors"
              >
                <Phone size={18} />
                Call Branch
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
