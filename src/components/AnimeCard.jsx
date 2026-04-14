const AnimeCard = ({
  title,
  status,
  episodes,
  images,
  synopsis,
  genres,
  popularity,
}) => {
  const truncatedStatus = status.split(" ")[0];
  const truncatedTitle = title
    .split(" ")
    .slice(0, 3)
    .join(" ")
    .replace(/:/g, "");

  const word = episodes === 1 ? "EPISODE" : "EPISODES";
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-700 bg-black shadow-[6px_6px_0_rgba(39,39,42,0.95)]">
      <div className="px-6 pt-6 pb-8">
        <div className="flex gap-5">
          <img
            src={images?.webp?.image_url}
            alt={truncatedTitle}
            className="h-32 w-24 rounded-xl border border-zinc-800 bg-zinc-950 object-cover"
          />

          <div className="flex min-w-0 flex-1 flex-col">
            <h3 className="line-clamp-2 text-base leading-tight tracking-tight font-bold text-zinc-200 mb-2">
              {truncatedTitle.toUpperCase()}
            </h3>

            <div className="mt-4 flex flex-wrap gap-4 font-mono">
              <div className="rounded-md border border-zinc-600 bg-black pt-1 pb-1.5 px-2 shadow-[4px_4px_0_rgba(39,39,42,0.95)]">
                <p className="mt-1 text-xs font-semibold text-white">
                  {truncatedStatus.toUpperCase()}
                </p>
              </div>

              <div className="rounded-md border border-zinc-800 bg-red-500 py-1 px-2 shadow-[4px_4px_0_rgba(39,39,42,0.95)]">
                <p className="mt-1 text-xs font-black text-black">
                  {episodes} {word}
                </p>
              </div>

              <div className="rounded-md border border-zinc-800 bg-black py-1 px-2 shadow-[4px_4px_0_rgba(39,39,42,0.95)]">
                <p className="mt-1 text-xs font-bold text-zinc-400">
                  {popularity} VOTES
                </p>
              </div>

              <div className="rounded-md border border-zinc-600 bg-black pt-1 pb-1.5 px-2 shadow-[4px_4px_0_rgba(39,39,42,0.95)]">
                <p className="mt-1 text-xs font-semibold text-zinc-400">
                  {genres[0]?.name.toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-5 h-px bg-zinc-800" />

        <p className="text-sm leading-6 font-semibold text-zinc-400 line-clamp-6">
          {synopsis}
        </p>
      </div>
    </article>
  );
};

export default AnimeCard;
