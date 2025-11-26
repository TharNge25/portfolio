import { useRef, useState } from "react";
import {
  Code,
  Layout,
  Smartphone,
  Database,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Search,
  X,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const scrollRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Popup ဖွင့်/ပိတ် အတွက် State
  const [selectedService, setSelectedService] = useState<any>(null);

  const scroll = (direction: any) => {
    const { current }: any = scrollRef;
    if (current) {
      current?.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  // Data
  const services = [
    {
      id: "01",
      title: "Web Development",
      icon: <Code className="w-8 h-8" />,
      desc: "Custom websites built with React & Node.js.",
      price: "$500+",
      features: [
        "Responsive Design (Mobile/PC)",
        "SEO Optimization",
        "Admin Dashboard Integration",
        "3 Months Free Support",
      ],
    },
    {
      id: "02",
      title: "UI/UX Design",
      icon: <Layout className="w-8 h-8" />,
      desc: "Modern, user-friendly interfaces.",
      price: "$300+",
      features: [
        "Figma / Adobe XD Prototyping",
        "User Research & Wireframing",
        "Interactive Mockups",
        "Design System Creation",
      ],
    },
    {
      id: "03",
      title: "Mobile Apps",
      icon: <Smartphone className="w-8 h-8" />,
      desc: "iOS and Android apps using React Native.",
      price: "$800+",
      features: [
        "Cross-Platform (iOS & Android)",
        "App Store Submission",
        "Push Notifications",
        "Offline Functionality",
      ],
    },
    {
      id: "04",
      title: "API Integration",
      icon: <Database className="w-8 h-8" />,
      desc: "Connecting your app to third-party services.",
      price: "Custom Quote",
      features: [
        "Payment Gateway Setup",
        "Social Media Login",
        "Google Maps Integration",
        "Secure Data Handling",
      ],
    },
    {
      id: "04",
      title: "API Integration",
      icon: <Database className="w-8 h-8" />,
      desc: "Connecting your app to third-party services.",
      price: "Custom Quote",
      features: [
        "Payment Gateway Setup",
        "Social Media Login",
        "Google Maps Integration",
        "Secure Data Handling",
      ],
    },
    {
      id: "04",
      title: "API Integration",
      icon: <Database className="w-8 h-8" />,
      desc: "Connecting your app to third-party services.",
      price: "Custom Quote",
      features: [
        "Payment Gateway Setup",
        "Social Media Login",
        "Google Maps Integration",
        "Secure Data Handling",
      ],
    },
  ];

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col justify-center py-20 relative">
      {/* --- Header Section --- */}
      <div className="max-w-7xl mx-auto px-6 w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <p className="text-[#4ADE80] font-mono text-sm tracking-[0.2em] uppercase font-bold">
            What I Do
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            My Services<span className="text-[#4ADE80]"></span>
          </h1>
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search services..."
            className="block w-full pl-10 pr-3 py-3 border border-zinc-800 rounded-full leading-5 bg-zinc-900 text-gray-300 focus:outline-none focus:border-[#4ADE80] transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Nav Buttons */}
        <div className="hidden md:flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-800 hover:border-[#4ADE80] hover:text-[#4ADE80] transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-800 hover:border-[#4ADE80] hover:text-[#4ADE80] transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* --- Horizontal Scroll Container --- */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {filteredServices.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedService(service as any)}
            className="group relative min-w-[320px] md:min-w-[380px] snap-center rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 
            bg-[#050505] border border-zinc-800 hover:border-[#4ADE80] cursor-pointer"
          >
            <div>
              <div className="flex justify-between items-start mb-10">
                <span className="font-mono text-xl font-bold text-[#4ADE80]">
                  {service.id}
                </span>
                <div className="text-[#4ADE80]">{service.icon}</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              <p className="font-mono text-sm leading-relaxed text-zinc-500 mb-6">
                {service.desc}
              </p>
            </div>

            <div className="mt-auto flex items-center justify-between pt-6">
              <span className="font-bold text-sm text-[#4ADE80] tracking-wide group-hover:underline">
                အသေးစိတ်ကြည့်ရန်
              </span>
              <button className="relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-[#4ADE80] text-black ring-2 ring-offset-2 ring-offset-black ring-[#2c8a4b] group-hover:scale-110">
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ))}
        <div className="min-w-[50px]"></div>
      </div>

      {/* --- MODAL / POPUP SECTION --- */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedService(null)}
          ></div>

          {/* Modal Content Box */}
          <div className="relative bg-[#111] border border-zinc-800 rounded-2xl max-w-lg w-full p-8 shadow-2xl shadow-green-900/20 transform transition-all scale-100 animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-zinc-900 rounded-xl text-[#4ADE80] border border-zinc-800">
                {selectedService.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {selectedService.title}
                </h2>
                <p className="text-[#4ADE80] font-mono text-sm mt-1">
                  Starting at {selectedService.price}
                </p>
              </div>
            </div>

            {/* Modal Body (Details) */}
            <div className="space-y-6">
              <p className="text-gray-400 leading-relaxed">
                {selectedService.desc} ဒီဝန်ဆောင်မှုတွင် အောက်ပါအချက်များ
                ပါဝင်ပါသည်။
              </p>

              <div className="space-y-3">
                <h4 className="font-bold text-white text-sm uppercase tracking-wider border-b border-zinc-800 pb-2">
                  Included Features
                </h4>
                <ul className="space-y-3 pt-2">
                  {selectedService.features.map((feature: any, idx: any) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <CheckCircle
                        size={18}
                        className="text-[#4ADE80] mt-0.5 flex-shrink-0?"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Button inside Modal */}
              <button className="w-full mt-4 bg-[#4ADE80] text-black font-bold py-4 rounded-xl hover:bg-[#3ecf72] transition-colors">
                ဆက်သွယ်ရန် (Get Started)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
