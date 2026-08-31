import { Search, Heart, User, Clapperboard } from "lucide-react";

const HomeNavbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 lg:px-12 py-5">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#e7b54b] text-[#0a0b10]">
            <Clapperboard size={21} />
          </div>

          <span className="text-2xl font-bold tracking-tight text-[#f5f1e8]">
            Cine<span className="text-[#e7b54b]">Vault</span>
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#b9b3ae]">
          <a
            href="/home"
            className="text-[#e7b54b] transition hover:text-[#e7b54b]"
          >
            Home
          </a>

          <a
            href="/movies"
            className="transition hover:text-[#e7b54b]"
          >
            Movies
          </a>

          <a
            href="/tv-shows"
            className="transition hover:text-[#e7b54b]"
          >
            TV Shows
          </a>

          <a
            href="/favorites"
            className="transition hover:text-[#e7b54b]"
          >
            Favorites
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full text-[#b9b3ae] transition hover:bg-white/5 hover:text-[#e7b54b]"
          >
            <Search size={20} />
          </button>

          {/* Favorites */}
          <button
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full text-[#b9b3ae] transition hover:bg-white/5 hover:text-[#e7b54b]"
          >
            <Heart size={19} />
          </button>

          {/* Profile */}
          <button
            className="flex items-center gap-2 px-3 py-2 rounded-full border border-[#e7b54b]/20 bg-white/5 text-[#f5f1e8] transition hover:border-[#e7b54b]/50"
          >
            <User size={18} className="text-[#e7b54b]" />

            <span className="hidden sm:block text-sm">
              Shan
            </span>
          </button>

        </div>

      </div>
    </nav>
  );
};

export default HomeNavbar;