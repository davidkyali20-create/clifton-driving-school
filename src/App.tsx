import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Branches from "./components/Branches";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import EnrollmentModal from "./components/EnrollmentModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-clifton-red selection:text-white">
      <Navbar />
      <main>
        <Hero onEnrollClick={() => setIsModalOpen(true)} />
        <Branches />
        <Pricing />
      </main>
      <Footer />
      <WhatsAppButton />
      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
