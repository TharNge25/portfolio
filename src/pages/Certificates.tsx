import { useState } from "react";
import { Calendar, ExternalLink, X, Eye } from "lucide-react";

const Certificates = () => {
  // Modal အတွက် State
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  //Network Engineering & Administration
  // Sample Certificate Data (အစ်ကို့ရဲ့ သင်တန်းဆင်းလက်မှတ်များ)
  const certificates = [
    {
      id: 2,
      title: "Network Engineering & Administration",
      issuer: "Professional Training Center",
      date: "Issued 2023",
      image:
        "https://solutionsreview.com/network-monitoring/files/2019/10/networking-certifications.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "CCTV & WiFi Service Training",
      issuer: "Professional Training Center",
      date: "Issued 2023",
      image:
        "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop", // CCTV/Security Image Placeholder
      link: "#",
    },
    {
      id: 3,
      title: "Java Programming Masterclass",
      issuer: "Oracle / Udemy",
      date: "Issued 2023",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop", // Coding Image Placeholder
      link: "#",
    },
    {
      id: 4,
      title: "HTML5 & CSS3 Certification",
      issuer: "W3Schools / freeCodeCamp",
      date: "Issued 2023",
      image:
        "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1000&auto=format&fit=crop", // HTML Image Placeholder
      link: "#",
    },
    {
      id: 5,
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "Issued 2024",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop", // React Image Placeholder
      link: "#",
    },
    {
      id: 6,
      title: "TypeScript for Modern Development",
      issuer: "Total TypeScript",
      date: "Issued 2024",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop", // TypeScript Image Placeholder
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans py-20 px-6 relative">
      {/* --- Header Section --- */}
      <div className="max-w-5xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Certificates <span className="text-[#4ADE80]">.</span>
        </h1>
        <p className="text-zinc-400">
          Professional certifications and achievements.
        </p>
      </div>

      {/* --- Certificates List --- */}
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-[#4ADE80] bg-[#0a0a0a] hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] transition-all duration-300"
          >
            {/* Left Side: Image (Click to Open Modal) */}
            <div
              className="w-full md:w-64 h-48 flex-shrink-0 relative rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(cert.image)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Image Overlay Icon (Eye for View) */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-black/60 backdrop-blur-sm p-3 rounded-full">
                  <Eye size={24} className="text-white" />
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#4ADE80] mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-white text-lg font-medium mb-2">
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-2 text-zinc-500 text-sm font-mono">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Verify Button (Opens in New Tab) */}
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 md:mt-0 inline-flex items-center gap-2 bg-[#4ADE80] text-black px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#3ecf72] transition-colors w-fit"
              >
                <span>Show Credential</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* --- Image Modal (Popup) --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#4ADE80] transition-colors p-2"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Certificate Full View"
              className="w-full h-full object-contain rounded-lg shadow-2xl border border-zinc-800"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
