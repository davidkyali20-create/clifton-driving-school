import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, Calculator, ChevronDown } from "lucide-react";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const branches = [
  { name: "Ruiru (HQ)", dial: "254745550777" },
  { name: "Githurai", dial: "254740710350" },
  { name: "Riuriro", dial: "254726374074" },
  { name: "Darasha", dial: "254748833571" },
  { name: "Kimbo", dial: "254707200916" },
  { name: "Makongeni", dial: "254798504718" }
];

const drivingClasses = [
  { id: "a2", label: "A2 Motorcycle (4,000/-)", price: 4000 },
  { id: "a3", label: "A3 Motorcycle Taxi (5,000/-)", price: 5000 },
  { id: "b1b2", label: "B1/B2 Light Vehicle (10,000/-)", price: 10000 },
  { id: "c1", label: "C1 Light Truck (12,000/-)", price: 12000 },
  { id: "endorsements", label: "Endorsements (5,000/-)", price: 5000 }
];

const idTypes = ["National ID", "Passport", "Waiting Card", "Alien ID"];

export default function EnrollmentModal({ isOpen, onClose }: EnrollmentModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState({
    fullName: "",
    idType: "National ID",
    documentNumber: "",
    phoneNumber: "",
    branch: "",
    drivingClass: ""
  });

  const [fees, setFees] = useState({
    tuition: 0,
    ntsa: 4050,
    total: 4050
  });

  useEffect(() => {
    const selectedClass = drivingClasses.find(c => c.id === formData.drivingClass);
    const tuition = selectedClass ? selectedClass.price : 0;
    setFees({
      tuition,
      ntsa: 4050,
      total: tuition + 4050
    });
  }, [formData.drivingClass]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Success state
    setStep("success");

    // WhatsApp Integration
    const selectedBranch = branches.find(b => b.name === formData.branch);
    const whatsappNumber = selectedBranch ? selectedBranch.dial : "254745550777"; // Fallback to HQ
    
    const selectedClassLabel = drivingClasses.find(c => c.id === formData.drivingClass)?.label || "";
    const message = `*New Student Enrollment*%0A%0A*Name:* ${formData.fullName}%0A*ID Type:* ${formData.idType}%0A*ID No:* ${formData.documentNumber}%0A*Phone:* ${formData.phoneNumber}%0A*Branch:* ${formData.branch}%0A*Class:* ${selectedClassLabel}%0A*Total Investment:* Ksh ${fees.total.toLocaleString()}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp after a short delay to let user see success message
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-clifton-blue/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-clifton-blue p-6 flex items-center justify-between text-white">
            <h2 className="text-2xl font-black uppercase tracking-tight">Student Registration</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6 max-h-[80vh] overflow-y-auto">
            {step === "form" ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-bold text-clifton-blue uppercase tracking-wider mb-2">Full Name</label>
                  <input 
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 focus:border-clifton-blue outline-none transition-colors font-medium"
                  />
                </div>

                {/* ID Selection & Doc Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-clifton-blue uppercase tracking-wider mb-2">ID Selection</label>
                    <div className="relative">
                      <select 
                        required
                        name="idType"
                        value={formData.idType}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 focus:border-clifton-blue outline-none transition-colors font-medium appearance-none bg-white"
                      >
                        {idTypes.map(type => <option key={type} value={type}>{type}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-clifton-blue uppercase tracking-wider mb-2">Document Number</label>
                    <input 
                      required
                      type="text"
                      name="documentNumber"
                      value={formData.documentNumber}
                      onChange={handleInputChange}
                      placeholder="ID / Passport No."
                      className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 focus:border-clifton-blue outline-none transition-colors font-medium"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-bold text-clifton-blue uppercase tracking-wider mb-2">Phone Number</label>
                  <input 
                    required
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="e.g. 0712345678"
                    className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 focus:border-clifton-blue outline-none transition-colors font-medium"
                  />
                </div>

                {/* Branch Selection */}
                <div>
                  <label className="block text-sm font-bold text-clifton-blue uppercase tracking-wider mb-2">Select Your Branch</label>
                  <div className="relative">
                    <select 
                      required
                      name="branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 focus:border-clifton-blue outline-none transition-colors font-medium appearance-none bg-white"
                    >
                      <option value="" disabled>Choose a branch</option>
                      {branches.map(branch => <option key={branch.name} value={branch.name}>{branch.name}</option>)}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </div>

                {/* Driving Class Selection */}
                <div>
                  <label className="block text-sm font-bold text-clifton-blue uppercase tracking-wider mb-2">Select Driving Class</label>
                  <div className="relative">
                    <select 
                      required
                      name="drivingClass"
                      value={formData.drivingClass}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 focus:border-clifton-blue outline-none transition-colors font-medium appearance-none bg-white"
                    >
                      <option value="" disabled>Choose a class</option>
                      {drivingClasses.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </div>

                {/* Fee Summary */}
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-2 text-clifton-blue font-black uppercase text-xs tracking-widest mb-4">
                    <Calculator size={16} />
                    Fee Summary
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 font-medium">Tuition Fee:</span>
                      <span className="font-bold text-clifton-blue">Ksh {fees.tuition.toLocaleString()}/-</span>
                    </div>
                    <div className="flex justify-between text-sm items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center p-0.5 border border-gray-100 overflow-hidden">
                          <img src="/ntsa.png" alt="NTSA" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                        </div>
                        <span className="text-gray-500 font-medium">Mandatory NTSA Fees:</span>
                      </div>
                      <span className="font-bold text-clifton-blue">Ksh {fees.ntsa.toLocaleString()}/-</span>
                    </div>
                    <div className="pt-3 border-t border-gray-200 flex justify-between items-center">
                      <span className="text-clifton-blue font-black uppercase text-sm">Total Investment:</span>
                      <span className="text-2xl font-black text-clifton-red">Ksh {fees.total.toLocaleString()}/-</span>
                    </div>
                  </div>
                  <p className="mt-4 text-center text-clifton-red font-black text-sm italic">
                    Installment Plans Available! Pay a deposit to start today.
                  </p>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full h-14 bg-clifton-red text-white rounded-2xl font-black text-lg uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg shadow-clifton-red/20"
                >
                  Confirm Enrollment
                </button>
              </form>
            ) : (
              <div className="py-10 text-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 size={48} />
                </motion.div>
                <h3 className="text-3xl font-black text-clifton-blue mb-4 uppercase tracking-tight">Success!</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Your registration for <span className="text-clifton-blue font-bold">{formData.branch}</span> has been received. <br />
                  Our instructor will call you on <span className="text-clifton-blue font-bold">{formData.phoneNumber}</span> within 24 hours.
                </p>
                <p className="mt-8 text-sm text-gray-400 font-medium">
                  Redirecting to WhatsApp for final confirmation...
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
