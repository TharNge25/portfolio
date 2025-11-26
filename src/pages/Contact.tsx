import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "maizero528@gmail.com"; // သင့် Email ထည့်ပါ

  // Email Copy လုပ်သည့် Function
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans py-20 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* --- Left Side: Contact Info --- */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-[#4ADE80] font-mono text-sm tracking-widest uppercase font-bold">
              Get in Touch
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Let's work <br /> together
              <span className="text-[#4ADE80]">.</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
              ပရောဂျက်အသစ်တွေ ဆွေးနွေးချင်တာပဲဖြစ်ဖြစ်၊
              မိတ်ဆွေဖွဲ့ချင်တာပဲဖြစ်ဖြစ် အချိန်မရွေး ဆက်သွယ်နိုင်ပါတယ်။
            </p>
          </div>

          {/* Contact Details Cards */}
          <div className="space-y-4">
            {/* Email Card with Copy Feature */}
            <div
              className="group flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-[#4ADE80] transition-all cursor-pointer relative overflow-hidden"
              onClick={handleCopy}
            >
              <div className="p-3 bg-zinc-800 rounded-lg group-hover:bg-[#4ADE80] group-hover:text-black transition-colors">
                <Mail size={24} />
              </div>
              <div className="flex-1">
                <p className="text-zinc-500 text-xs font-mono uppercase">
                  Email Me
                </p>
                <p className="text-white font-medium">{email}</p>
              </div>
              {/* Copy Icon / Check Icon */}
              <div className="text-zinc-500 group-hover:text-[#4ADE80]">
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </div>
              {/* Feedback Text */}
              {copied && (
                <span className="absolute right-12 text-[#4ADE80] text-xs font-bold animate-in fade-in slide-in-from-right-2">
                  Copied!
                </span>
              )}
            </div>

            {/* Phone Card */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-[#4ADE80] transition-all">
              <div className="p-3 bg-zinc-800 rounded-lg group-hover:bg-[#4ADE80] group-hover:text-black transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-zinc-500 text-xs font-mono uppercase">
                  Call Me
                </p>
                <p className="text-white font-medium">+95 9 680144241</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-[#4ADE80] transition-all">
              <div className="p-3 bg-zinc-800 rounded-lg group-hover:bg-[#4ADE80] group-hover:text-black transition-colors">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-zinc-500 text-xs font-mono uppercase">
                  Location
                </p>
                <p className="text-white font-medium">
                  Myanmar Shan Nouth Nanshan
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
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
        <div className="bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-zinc-800 shadow-2xl relative">
          {/* Subtle Glow Effect behind form */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#4ADE80]/10 rounded-full blur-[50px] pointer-events-none"></div>

          <form className="space-y-6 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80] transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-zinc-400 font-medium">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80] transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-zinc-400 font-medium">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80] transition-all resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-[#4ADE80] text-black font-bold py-4 rounded-lg hover:bg-[#3ecf72] transition-colors flex items-center justify-center gap-2 group">
              <span>Send Message</span>
              <Send
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
