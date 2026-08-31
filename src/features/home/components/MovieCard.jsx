import { Heart, Star } from "lucide-react";

const MovieCard = () => {
  return (
    <div className="group w-[180px] sm:w-[200px] shrink-0">

      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-[#191319]">

        <img
          src="https://image.tmdb.org/t/p/w500/your-image.jpg"
          alt="Movie"
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

        {/* Favorite button */}
        <button
          className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition hover:bg-[#e7b54b] hover:text-[#0a0b10]"
        >
          <Heart size={17} />
        </button>

        {/* Rating */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 rounded-md bg-black/70 backdrop-blur-sm">
          <Star
            size={13}
            className="text-[#e7b54b]"
            fill="currentColor"
          />

          <span className="text-xs font-medium text-white">
            8.7
          </span>
        </div>

      </div>

      {/* Movie information */}
      <div className="mt-3">

        <h3 className="text-sm font-semibold text-[#f5f1e8] truncate">
          Interstellar
        </h3>

        <div className="flex items-center gap-2 mt-1 text-xs text-[#8f8990]">
          <span>2014</span>

          <span>•</span>

          <span>Science Fiction</span>
        </div>

      </div>

    </div>
  );
};

export default MovieCard;