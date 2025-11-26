// Link ကို ဖယ်လိုက်ပါတယ် (Router မရှိဘဲ သုံးရင် Error တက်တတ်လို့ပါ)
import { Home, AlertTriangle } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4ADE80]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 text-center space-y-8">
        {/* --- 404 Text with Glitch/Cyber Effect --- */}
        <div className="relative">
          <h1 className="text-[150px] md:text-[200px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-800 select-none">
            404
          </h1>
          {/* Decorative Elements around 404 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-[150px] md:text-[200px] font-bold leading-none tracking-tighter text-[#4ADE80] opacity-20 blur-sm animate-pulse">
            404
          </div>
        </div>

        {/* --- Error Message --- */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#4ADE80] font-mono text-lg md:text-xl">
            <AlertTriangle size={24} />
            <span>Error: Page_Not_Found</span>
          </div>

          <p className="text-zinc-500 max-w-md mx-auto text-lg">
            We searched everywhere but couldn't find the page you're looking
            for. It might have been moved or deleted.
          </p>
        </div>

        {/* --- Back to Home Button --- */}
        <div className="pt-4">
          {/* Link အစား a tag ကို ပြောင်းသုံးထားပါတယ် - ဒါမှ Router error ကင်းပါမယ် */}
          <a
            href="/"
            className="group relative inline-flex items-center gap-2 bg-[#4ADE80] text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] hover:scale-105"
          >
            <Home
              size={20}
              className="group-hover:-translate-y-1 transition-transform"
            />
            <span>Return Home</span>
          </a>
        </div>

        {/* --- Code Decoration --- */}
        <div className="mt-12 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg text-left max-w-sm mx-auto font-mono text-xs md:text-sm text-zinc-500 overflow-hidden">
          <p>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-yellow-400">location</span> ={" "}
            <span className="text-green-400">useLocation()</span>;
          </p>
          <p>
            <span className="text-purple-400">if</span> (location.path !=={" "}
            <span className="text-orange-400">found</span>) {"{"}
          </p>
          <p className="pl-4">
            <span className="text-blue-400">throw new</span>{" "}
            <span className="text-red-400">Error</span>("404");
          </p>
          <p>{"}"}</p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
