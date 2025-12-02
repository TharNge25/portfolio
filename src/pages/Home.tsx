import { ArrowRight, TreePine, Gift } from "lucide-react";

// --- 1. Snowfall Component (နှင်းပွင့်များ) ---
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

// --- 2. Falling Gifts Component (လက်ဆောင်ပုံးများ အပေါ်မှကျလာခြင်း) ---
const FallingGifts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute text-3xl animate-fall-gift opacity-90"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10%`,
            animationDuration: `${Math.random() * 5 + 8}s`, // ကျဆင်းနှုန်း မတူညီအောင်ချိန်ခြင်း
            animationDelay: `${Math.random() * 10}s`, // ကျလာမည့်အချိန် ကွာဟအောင်လုပ်ခြင်း
            fontSize: `${Math.random() * 20 + 20}px`, // အရွယ်အစား အကြီးအသေး
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

// --- 3. Christmas Lights Component (အပေါ်က မီးလုံးလေးများ) ---
const ChristmasLights = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-8 z-20 flex justify-around items-start overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="flex flex-col items-center">
           {/* ကြိုး */}
           <div className="w-[1px] h-3 bg-zinc-700"></div>
           {/* မီးလုံး */}
           <div
            className={`w-3 h-3 rounded-full shadow-lg animate-pulse ${
              i % 3 === 0 ? 'bg-red-500 shadow-red-500/50' : 
              i % 3 === 1 ? 'bg-green-500 shadow-green-500/50' : 
              'bg-yellow-400 shadow-yellow-400/50'
            }`}
            style={{ animationDelay: `${i * 0.2}s`, animationDuration: '2s' }}
          />
        </div>
      ))}
    </div>
  );
};

// --- 4. Santa Animation Component (စန်တာကလော့စ် ပျံဝဲနေပုံ) ---
const SantaAnimation = () => {
  return (
    <div className="fixed top-32 -left-20 text-5xl z-0 animate-fly-santa opacity-90 pointer-events-none select-none filter drop-shadow-lg">
      🎅🛷🦌
      <style>{`
        @keyframes fly-santa {
          0% { transform: translateX(-10vw) translateY(0) rotate(-5deg); opacity: 0; }
          10% { opacity: 1; }
          25% { transform: translateX(25vw) translateY(20px) rotate(0deg); }
          50% { transform: translateX(50vw) translateY(0) rotate(5deg); }
          75% { transform: translateX(75vw) translateY(-20px) rotate(0deg); }
          90% { opacity: 1; }
          100% { transform: translateX(110vw) translateY(0) rotate(-5deg); opacity: 0; }
        }
        .animate-fly-santa {
          animation: fly-santa 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

const Home = () => {
  return (
    // relative နဲ့ min-h-screen ထည့်ထားမှ နှင်းကျတာ အဆင်ပြေပါမယ်
    <div className="font-sans relative min-h-screen bg-black overflow-hidden"> 

      {/* Decorative Elements */}
      <Snowfall />
      <FallingGifts /> {/* လက်ဆောင်ပုံးများ ကျလာမည့် Component */}
      <ChristmasLights />
      <SantaAnimation />

      {/* --- Main Hero Section --- */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 space-y-8">
            
            {/* Holiday Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <TreePine size={14} className="animate-bounce" />
              <span>Merry Christmas & Happy New Year</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Mai Thi Ha
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-lg font-mono">
              Digital ကမ္ဘာရဲ့ စိတ်ကူးစိတ်သန်းတွေကို လက်တွေ့အဖြစ်
              ပြောင်းလဲပေးသူ။ ကျွန်တော်သည် React, Node.js နှင့် Modern Web
              နည်းပညာများကို ပေါင်းစပ်ပြီး ဆွဲဆောင်မှုရှိသော Digital Experience
              များကို ဖန်တီးပါသည်။ ရိုးရှင်းမှုနှင့် သေသပ်လှပမှုကို အခြေခံပြီး
              သုံးစွဲသူများအတွက် အကောင်းဆုံး လက်ရာများကို တည်ဆောက်ပေးနေပါသည်။
            </p>

            <div className="flex gap-4">
              <a href="https://t.me/Thixa5298" target="_blank" rel="noreferrer">
                <button className="group relative inline-flex items-center gap-2 bg-[#4ADE80] hover:bg-[#3ecf72] text-black font-bold px-8 py-4 rounded shadow-[0_0_20px_rgba(74,222,128,0.4)] hover:shadow-[0_0_30px_rgba(74,222,128,0.6)] transition-all duration-300">
                  Let's get Telegram
                  <ArrowRight
                    size={25}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </a>
            </div>
          </div>

          {/* Right Side: Circular Image with Holiday Touch */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl shadow-green-900/20">
              {/* Placeholder Image */}
              <img
                src="./image copy 4.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* --- Footer / Logos Section --- */}
        <div className="mt-24">
          <p className="text-gray-500 font-mono text-sm mb-6 flex items-center gap-2">
            <Gift size={16} className="text-red-500"/>
            Wishing you a joyous holiday season! - MTA
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4"></div>
        </div>
      </main>
    </div>
  );
};

export default Home;