import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="font-sans">
      {/* --- Main Hero Section --- */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Mai Thi Ha
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-lg font-mono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              beatae ipsa nihil veritatis necessitatibus officia consectetur
              praesentium, distinctio nesciunt iure aliquid laborum dolores
              similique, saepe omnis soluta natus cum. Reiciendis.
            </p>

            <a href="https://t.me/Thixa5298">
              <button className="group relative inline-flex items-center gap-2 bg-[#4ADE80] hover:bg-[#3ecf72] text-black font-bold px-8 py-4 rounded shadow-[0_0_20px_rgba(74,222,128,0.4)] hover:shadow-[0_0_30px_rgba(74,222,128,0.6)] transition-all duration-300">
                Let's get Telegram
                <ArrowRight
                  size={25}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </a>
          </div>

          {/* Right Side: Circular Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl">
              {/* Placeholder Image - ကိုယ့်ပုံ URL နဲ့ ပြန်ချိန်းပါ */}
              <img
                src="./mm.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* --- Footer / Logos Section --- */}
        <div className="mt-24">
          <p className="text-gray-500 font-mono text-sm mb-6">MTA</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4"></div>
        </div>
      </main>
    </div>
  );
};

export default Home;
