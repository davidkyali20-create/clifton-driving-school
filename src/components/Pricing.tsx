import { motion } from "motion/react";

const courses = [
  { title: "A2", requirements: "18 Years And Above", price: "4,000/-" },
  { title: "A3", requirements: "18 Years And Above", price: "5,000/-" },
  { title: "B2 & B1 Combined", requirements: "18 Years And Above", price: "10,000/-" },
  { title: "B3 Endorsement", requirements: "18 Years And Above", price: "5,000/-" },
  { title: "C1", requirements: "More Than 3 Years Experience", price: "12,000/-" },
  { title: "C1 Endorsement", requirements: "2 Years Experience", price: "5,000/-" },
  { title: "C2 Endorsement", requirements: "2 Years Experience In C1", price: "5,000/-" },
  { title: "D1 Endorsement", requirements: "4 Years Experience", price: "5,000/-" },
  { title: "D2-14-32 Seater Minibus", requirements: "2 Years Experience In D1", price: "11,000/-" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-clifton-blue mb-2 uppercase tracking-tighter">Courses Outline</h2>
          <p className="text-clifton-red font-bold italic mb-4">"Smart Driving Starts Here"</p>
          <div className="w-20 h-1.5 bg-clifton-red mx-auto"></div>
        </div>

        <div className="overflow-x-auto mb-12 bg-white rounded-3xl shadow-xl border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-clifton-blue text-white">
                <th className="p-6 font-black uppercase tracking-wider">Courses</th>
                <th className="p-6 font-black uppercase tracking-wider">Requirements</th>
                <th className="p-6 font-black uppercase tracking-wider text-right">Charges (Ksh)</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <motion.tr 
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <td className="p-6 font-bold text-clifton-blue">{course.title}</td>
                  <td className="p-6 text-gray-600 font-medium italic">{course.requirements}</td>
                  <td className="p-6 text-right font-black text-clifton-red text-xl">{course.price}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <motion.div 
          className="bg-clifton-blue text-white p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-3 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg overflow-hidden shrink-0">
            <img src="/ntsa.png" alt="NTSA Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Mandatory NTSA Fees Alert</h4>
            <p className="text-white/80 leading-relaxed">
              Please note that the following fees are paid separately to NTSA: 
              <span className="font-bold text-white"> PDL (1,000/-)</span>, 
              <span className="font-bold text-white"> Test Booking (1,050/-)</span>, and 
              <span className="font-bold text-white"> Assessment (2,000/-)</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
