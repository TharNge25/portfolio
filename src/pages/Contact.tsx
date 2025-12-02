import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Loader2,
  X,
  ArrowUpRight,
  Check,
} from "lucide-react";

// --- 1. Snowfall Effect Component (နှင်းမှုန့်များ) ---
const Snowfall = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-80 animate-snow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes snow {
          0% { transform: translateY(-10vh) translateX(0); opacity: 1; }
          100% { transform: translateY(110vh) translateX(20px); opacity: 0.3; }
        }
        .animate-snow {
          animation: snow linear infinite;
        }
      `}</style>
    </div>
  );
};

// --- 2. Snow Cap Decoration (နှင်းခဲ/နှင်းဆက်) ---
const SnowCap = ({ className }: any) => (
  <div className={`absolute -top-3 left-0 right-0 h-4 z-10 ${className}`}>
    <svg
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
      className="w-full h-full text-white/90 drop-shadow-lg"
      fill="currentColor"
    >
      <path d="M0 10 C 20 0 40 0 50 10 C 60 0 80 0 100 10 V 0 H 0 Z" />
    </svg>
  </div>
);

// --- Main Contact Component ---
const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success, error
  const [showMap, setShowMap] = useState(false);
  const form = React.useRef<any>("");

  // Contact Info Data
  const contactInfo = {
    email: "maizero528@gmail.com",
    phone: "+95 9 680144241",
    location: "Namhsan, Shan State, Myanmar",
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setFormStatus("sending");

    // ---------------------------------------------------------
    // FORMSPREE INTEGRATION START
    // ---------------------------------------------------------
    // ဒီနေရာမှာ အစ်ကို့ရဲ့ Formspree ID ကို ထည့်ပါ (ဥပမာ: "xmqvonlo")
    const FORMSPREE_ID = "https://formspree.io/f/myzqbgjg";

    const endpoint = `https://formspree.io/f/${FORMSPREE_ID}`;

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus("success");
        e.target.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        console.error("Formspree submission failed");
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      console.error(error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans py-20 px-6 flex items-center justify-center relative overflow-hidden">
      <Snowfall />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* --- Left Side: Contact Info --- */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="space-y-4">
            <p className="text-[#4ADE80] font-mono text-sm tracking-widest uppercase font-bold">
              GET IN TOUCH
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Let's work <br /> together
              <span className="text-[#4ADE80]"></span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md font-sans">
              ပရောဂျက်အသစ်တွေ ဆွေးနွေးချင်တာပဲဖြစ်ဖြစ်၊
              မိတ်ဆွေဖွဲ့ချင်တာပဲဖြစ်ဖြစ် အချိန်မရွေး ဆက်သွယ်နိုင်ပါတယ်။
            </p>
          </div>
          <div className="space-y-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="group relative flex items-center gap-4 p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-[#4ADE80] transition-all cursor-pointer"
            >
              <SnowCap />
              <div className="p-3 bg-zinc-800 rounded-lg group-hover:bg-[#4ADE80] group-hover:text-black transition-colors">
                <Mail size={24} />
              </div>
              <div className="flex-1">
                <p className="text-zinc-500 text-xs font-mono uppercase font-bold tracking-wider">
                  EMAIL ME
                </p>
                <p className="text-white font-medium group-hover:text-[#4ADE80] transition-colors">
                  {contactInfo.email}
                </p>
              </div>
              <div className="text-zinc-500 group-hover:text-[#4ADE80]">
                <ArrowUpRight size={20} />
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${contactInfo.phone}`}
              className="group relative flex items-center gap-4 p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-[#4ADE80] transition-all cursor-pointer"
            >
              <SnowCap />
              <div className="p-3 bg-zinc-800 rounded-lg group-hover:bg-[#4ADE80] group-hover:text-black transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-zinc-500 text-xs font-mono uppercase font-bold tracking-wider">
                  CALL ME
                </p>
                <p className="text-white font-medium group-hover:text-[#4ADE80] transition-colors">
                  {contactInfo.phone}
                </p>
              </div>
            </a>
            <div
              className="group relative flex items-center gap-4 p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-[#4ADE80] transition-all cursor-pointer"
              onClick={() => setShowMap(true)}
            >
              <SnowCap />
              <div className="p-3 bg-zinc-800 rounded-lg group-hover:bg-[#4ADE80] group-hover:text-black transition-colors">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-zinc-500 text-xs font-mono uppercase font-bold tracking-wider">
                  LOCATION
                </p>
                <p className="text-white font-medium">{contactInfo.location}</p>
                <p className="text-zinc-500 text-xs mt-1 group-hover:text-[#4ADE80]">
                  Click to view map &rarr;
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-zinc-500 text-sm mb-4">
              Find me on social media:
            </p>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-3 rounded-full border border-zinc-800 text-zinc-400 hover:text-[#4ADE80] hover:border-[#4ADE80] hover:bg-[#4ADE80]/10 transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- Right Side: Message Form --- */}
        <div className="relative bg-[#050505] p-8 md:p-10 rounded-3xl border border-zinc-800 shadow-2xl animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
          <SnowCap className="w-1/2 left-1/4" />

          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#4ADE80]/5 rounded-full blur-[80px] pointer-events-none"></div>

          {formStatus === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]">
              <div className="w-20 h-20 bg-[#4ADE80]/20 rounded-full flex items-center justify-center text-[#4ADE80] mb-4">
                <Check size={40} strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="text-zinc-400">
                ကျေးဇူးတင်ပါတယ်။ ခင်ဗျားဆီကို အမြန်ဆုံး ပြန်ဆက်သွယ်ပါ့မယ်။
              </p>
              <button
                onClick={() => setFormStatus("https://formspree.io/f/myzqbgjg")}
                className="text-[#4ADE80] text-sm underline mt-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              {formStatus === "error" && (
                <div className="p-3 bg-red-500/10 border border-red-500/50 text-red-500 rounded text-sm text-center">
                  Something went wrong. Please check your Formspree ID.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400 font-medium">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80] transition-all placeholder:text-zinc-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400 font-medium">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80] transition-all placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-medium">
                  Subject
                </label>
                <input
                  required
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80] transition-all placeholder:text-zinc-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-medium">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  name="message"
                  placeholder="Tell me about your project..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80] transition-all resize-none placeholder:text-zinc-600"
                ></textarea>
              </div>

              <button
                disabled={formStatus === "sending"}
                className="w-full bg-[#4ADE80] text-black font-bold py-4 rounded-lg hover:bg-[#3ecf72] transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(74,222,128,0.2)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]"
              >
                {formStatus === "sending" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* --- Map Modal --- */}
      {showMap && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowMap(false)}
        >
          <div
            className="relative w-full max-w-4xl h-[500px] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white hover:text-[#4ADE80] rounded-full transition-colors backdrop-blur-md"
            >
              <X size={24} />
            </button>

            <iframe
              title="Location Map"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(90%)" }} // Dark mode map style filter
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                contactInfo.location
              )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
