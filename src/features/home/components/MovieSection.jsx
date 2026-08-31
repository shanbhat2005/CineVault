import { ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

const MovieSection = ({ title }) => {
  return (
    <section className="px-6 lg:px-14 py-8">

      {/* Section Header */}
      <div className="flex items-center justify-between mb-5">

        <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f1e8]">
          {title}
        </h2>

        <button className="flex items-center gap-1 text-sm text-[#e7b54b] hover:underline">
          See All
          <ChevronRight size={17} />
        </button>

      </div>

      {/* Movie Cards */}
      <div className="flex gap-5 overflow-x-auto pb-3 scrollbar-hide">

        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />

      </div>

    </section>
  );
};

export default MovieSection;