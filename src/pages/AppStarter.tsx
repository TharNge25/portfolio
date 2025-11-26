import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  NavLink,
  Link,
} from "react-router-dom";
import {
  Home,
  Briefcase,
  FolderGit2,
  Award,
  Mail,
  Menu,
  X,
} from "lucide-react";

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
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wide text-white hover:text-[#4ADE80] transition-colors"
        >
          Mai Thi Ha<span className="text-[#4ADE80]">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2 border">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({
                isActive,
              }) => `flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
                ${
                  isActive
                    ? "bg-[#4ADE80] text-black shadow-[0_0_20px_rgba(74,222,128,0.3)]"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
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
          <div className="flex flex-col space-y-4 bg-black">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({
                  isActive,
                }) => `flex items-center space-x-4 p-4 rounded-xl text-lg font-medium border transition-all
                  ${
                    isActive
                      ? "bg-[#4ADE80]/10 border-[#4ADE80] text-[#4ADE80]"
                      : "border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }`}
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

const AppStarter = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#4ADE80] selection:text-black">
      <Header />

      {/* Navbar က Fixed ဖြစ်နေလို့ အပေါ်ဘက်မှာ Padding (pt-24) နည်းနည်းခြားပေးရပါတယ် */}
      <div className="pt-24 px-4 sm:px-10 max-w-7xl mx-auto">
        <Outlet />
      </div>

      {/* Footer */}
    </div>
  );
};

export default AppStarter;
