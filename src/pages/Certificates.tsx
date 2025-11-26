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
        "data:image/jpeg;base64,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", // Certificate ပုံအစစ်ထည့်ပါ
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
    {
      id: 4,
      title: "React - The Complete Guide (incl Hooks, Redux)",
      issuer: "Udemy",
      date: "Issued July 2023",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
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
          Certifications<span className="text-[#4ADE80]"></span>
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
