import { Play, Plus, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[75vh] flex items-end overflow-hidden bg-[#0a0b10]">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://image.tmdb.org/t/p/original/your-image.jpg"
          alt="Featured movie"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b10] via-[#0a0b10]/75 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0b10] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-14 pb-16 pt-40 max-w-3xl">

        {/* Label */}
        <div className="flex items-center gap-2 mb-5">
          <span className="w-8 h-[2px] bg-[#e7b54b]" />

          <span className="text-xs tracking-[0.25em] uppercase text-[#e7b54b]">
            Featured Movie
          </span>
        </div>

        {/* Movie Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-[#f5f1e8]">
          INTERSTELLAR
        </h1>

        {/* Movie Info */}
        <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-[#b9b3ae]">

          <span className="flex items-center gap-1 text-[#e7b54b]">
            <Star size={16} fill="currentColor" />
            8.7
          </span>

          <span>2014</span>

          <span>•</span>

          <span>2h 49m</span>

          <span>•</span>

          <span className="border border-[#b9b3ae]/30 px-2 py-0.5 rounded text-xs">
            PG-13
          </span>

        </div>

        {/* Description */}
        <p className="mt-5 max-w-xl text-[#b9b3ae] leading-relaxed text-sm sm:text-base">
          A team of explorers travel through a wormhole in space in an
          attempt to ensure humanity's survival.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-8">

          <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#e7b54b] text-[#1a1108] font-semibold hover:bg-[#f0c665] transition">
            <Play size={18} fill="currentColor" />
            Watch Trailer
          </button>

          <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#c9cdd6]/25 bg-white/5 text-[#f5f1e8] font-medium backdrop-blur-sm hover:bg-white/10 hover:border-[#e7b54b]/40 transition">
            <Plus size={18} />
            Add to Favorites
          </button>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;