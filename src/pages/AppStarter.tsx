import  { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import {
  Home,
  Briefcase,
  FolderGit2,
  Award,
  Mail,
  Menu,
  X,
  TreePine, // ခရစ္စမတ်သစ်ပင် Icon အတွက် Import လုပ်ပါ
} from "lucide-react";

// --- 1. Snowfall Component (နှင်းမှုန့်များ) ---
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

// --- 2. Falling Gifts Component (လက်ဆောင်ပုံးများ) ---
const FallingGifts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute text-3xl animate-fall-gift opacity-90"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10%`,
            animationDuration: `${Math.random() * 5 + 8}s`, // ကျဆင်းနှုန်း မတူညီအောင်ချိန်ခြင်း
            animationDelay: `${Math.random() * 10}s`, // ကျလာမည့်အချိန် ကွာဟအောင်လုပ်ခြင်း
            fontSize: `${Math.random() * 15 + 15}px`, // အရွယ်အစား အကြီးအသေး
          }}
        >
          🎁
        </div>
      ))}
      <style>{`
        @keyframes fall-gift {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        .animate-fall-gift {
          animation: fall-gift linear infinite;
        }
      `}</style>
    </div>
  );
};

// --- Header Component ---
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: <Home size={18} />, path: "/" },
    { name: "Services", icon: <Briefcase size={18} />, path: "/services" },
    { name: "Projects", icon: <FolderGit2 size={18} />, path: "/projects" },
    { name: "Certificates", icon: <Award size={18} />, path: "/certificates" },
    { name: "Contact", icon: <Mail size={18} />, path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 border-b border-zinc-800 bg-black/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with Christmas Touch */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wide text-white hover:text-[#4ADE80] transition-colors flex items-center gap-2"
        >
          Mai Thi Ha
          {/* Logo ဘေးနားတွင် ခရစ္စမတ်သစ်ပင်အသေးလေး ထည့်ထားသည် */}
          <TreePine size={20} className="text-[#4ADE80]" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
                ${
                  isActive
                    ? "bg-[#4ADE80] text-black shadow-[0_0_20px_rgba(74,222,128,0.3)]"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 mt-24 px-6 md:hidden animate-in fade-in slide-in-from-top-10 duration-200">
          <div className="flex flex-col space-y-4 bg-black/95 border border-zinc-800 p-4 rounded-2xl backdrop-blur-xl">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center space-x-4 p-4 rounded-xl text-lg font-medium border transition-all
                  ${
                    isActive
                      ? "bg-[#4ADE80]/10 border-[#4ADE80] text-[#4ADE80]"
                      : "border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// --- AppStarter (Layout Component Only) ---
const AppStarter = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#4ADE80] selection:text-black relative">
      
      {/* Background Elements */}
      <Snowfall />
      <FallingGifts />

      {/* Decorative Fixed Christmas Tree (Bottom Left Corner) */}
      <div className="fixed bottom-6 left-6 z-20 pointer-events-none animate-bounce" style={{ animationDuration: '3s' }}>
         <div className="relative">
            <TreePine size={48} className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
            {/* အပေါ်က မီးလုံးအနီလေး */}
            <div className="absolute -top-1 right-3 w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
         </div>
      </div>

      <Header />

      {/* Navbar က Fixed ဖြစ်နေလို့ အပေါ်ဘက်မှာ Padding (pt-24) နည်းနည်းခြားပေးရပါတယ် */}
      {/* z-10 ထည့်ထားမှ Snowfall အပေါ်ရောက်ပါမယ် */}
      <div className="pt-24 px-4 sm:px-10 max-w-7xl mx-auto relative z-10">
        <Outlet />
      </div>

      {/* Footer (လိုအပ်ရင် ဒီနားမှာ ထည့်နိုင်ပါတယ်) */}
    </div>
  );
};

export default AppStarter;