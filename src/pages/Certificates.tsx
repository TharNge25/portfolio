import { Calendar, ExternalLink, BadgeCheck } from "lucide-react";

const Certificates = () => {
  // Sample Certificate Data
  const certificates = [
    {
      id: 1,
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta",
      date: "Issued Dec 2023",
      image:
        "https://images.unsplash.com/photo-1589330694653-4d5c952c23ce?q=80&w=1000&auto=format&fit=crop", // Certificate ပုံအစစ်ထည့်ပါ
      link: "#",
    },
    {
      id: 2,
      title: "Google UX Design Professional Certificate",
      issuer: "Google",
      date: "Issued Oct 2023",
      image:
        "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=1000&auto=format&fit=crop",
      link: "#",
    },
    {
      id: 3,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "Issued Aug 2023",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
      link: "#",
    },
    {
      id: 4,
      title: "React - The Complete Guide (incl Hooks, Redux)",
      issuer: "Udemy",
      date: "Issued July 2023",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans py-20 px-6">
      {/* --- Header Section --- */}
      <div className="max-w-7xl mx-auto mb-16 space-y-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/20 text-[#4ADE80] font-mono text-xs font-bold uppercase tracking-wider mb-2">
          <BadgeCheck size={14} />
          <span>Proven Skills</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Licenses & <br className="hidden md:block" />
          Certifications<span className="text-[#4ADE80]">.</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mt-4">
          Continuous learning is my passion. Here are the professional
          certifications I've earned to validate my expertise.
        </p>
      </div>

      {/* --- Certificates Grid --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="group relative bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-6 flex flex-col md:flex-row gap-6 hover:border-[#4ADE80] transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.05)]"
          >
            {/* Certificate Image / Thumbnail */}
            <div className="w-full md:w-48 h-48 md:h-auto bg-zinc-900 rounded-xl overflow-hidden flex-shrink-0 relative">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              {/* Overlay Icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="text-white" />
              </div>
            </div>

            {/* Content Info */}
            <div className="flex flex-col justify-between flex-grow py-2">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#4ADE80] transition-colors leading-tight mb-2">
                  {cert.title}
                </h3>
                <p className="text-zinc-400 font-medium mb-1">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-zinc-500 text-sm mb-4">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Verify Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-white border border-zinc-700 bg-zinc-900/50 px-4 py-3 rounded-lg hover:bg-[#4ADE80] hover:text-black hover:border-[#4ADE80] transition-all w-fit"
              >
                <span>Show Credential</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* --- Decorative Element --- */}
      <div className="max-w-7xl mx-auto mt-20 p-8 border border-dashed border-zinc-800 rounded-2xl text-center">
        <p className="text-zinc-500 text-sm">
          More certifications loading... currently learning{" "}
          <span className="text-[#4ADE80] font-bold">
            Next.js & Cloud Computing
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default Certificates;
