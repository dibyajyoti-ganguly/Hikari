import { useEffect, useRef } from "react";
import AniCard from "./Anicard";
import useFetch from "../utils/useFetch";

const Anicontainer = ({ isDark }) => {
  const { list, loading, error, hasMore, loadMore, page, maxPages } =
    useFetch();
  const loadTriggerRef = useRef(null);

  useEffect(() => {
    const trigger = loadTriggerRef.current;

    if (!trigger || !hasMore || loading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(trigger);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, loadMore, loading, list.length]);

  return (
    <section
      className={`px-4 pb-4 pt-2 transition-colors duration-500 ease-in-out sm:px-6 ${
        isDark ? "bg-black text-white" : "bg-zinc-50 text-zinc-950"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="hidden sm:mb-9 sm:flex flex-row sm:items-center sm:justify-between">
          <h2
            className={`text-sm tracking-wide sm:text-base ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Showing{" "}
            <span
              className={`text-base font-bold sm:text-lg ${
                isDark ? "text-white" : "text-zinc-950"
              }`}
            >
              {list.length}{" "}
            </span>
            animes
          </h2>
          <p
            className={`text-sm tracking-wide sm:text-base ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Based on{" "}
            <span
              className={`text-base font-bold sm:text-lg ${
                isDark ? "text-white" : "text-zinc-950"
              }`}
            >
              MAL{" "}
            </span>{" "}
            rankings
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {list.map((anime) => (
            <AniCard key={anime.mal_id} isDark={isDark} {...anime} />
          ))}
        </div>
        {error ? (
          <p className="mt-8 text-center text-sm text-red-400">{error}</p>
        ) : null}
        {loading ? (
          <p
            className={`mt-8 text-center text-sm tracking-wide ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Loading more anime...
          </p>
        ) : null}
        {!hasMore && list.length > 0 ? (
          <p
            className={`mt-12 text-center text-sm tracking-wide ${
              isDark ? "text-zinc-500" : "text-zinc-600"
            }`}
          >
            Reached the end of the list after {page} of {maxPages} batches.
          </p>
        ) : null}
        <div ref={loadTriggerRef} className="h-1 w-full" />
      </div>
    </section>
  );
};

export default Anicontainer;
