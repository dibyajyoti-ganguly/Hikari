const handlePointerMove = (event) => {
  const { currentTarget, clientX, clientY } = event;
  const rect = currentTarget.getBoundingClientRect();

  currentTarget.style.setProperty("--glow-x", `${clientX - rect.left}px`);
  currentTarget.style.setProperty("--glow-y", `${clientY - rect.top}px`);
};

const handlePointerLeave = (event) => {
  event.currentTarget.style.setProperty("--glow-x", "50%");
  event.currentTarget.style.setProperty("--glow-y", "50%");
};

const AniCard = ({
  isDark,
  url,
  title,
  title_english,
  status,
  episodes,
  images,
  synopsis,
  genres,
  popularity,
}) => {
  const truncatedStatus = status.split(" ")[0];
  const truncatedTitle = title_english || title;
  truncatedTitle.replace(/:/g, "").trim().split(/\s+/).slice(0, 2).join(" ");
  if (episodes === null) episodes = "1000";

  const word = episodes === 1 ? "EPISODE" : "EPS";

  return (
    <article
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`group relative overflow-hidden rounded-2xl border shadow-md transition-[background-color,border-color,color,box-shadow] duration-500 ease-in-out hover:shadow-lg ${
        isDark
          ? "border-zinc-800 bg-zinc-950"
          : "border-zinc-200 bg-white shadow-zinc-200/80"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(220px_circle_at_var(--glow-x,50%)_var(--glow-y,50%),rgba(255,255,255,0.16),transparent_60%)]" />
      </div>
      <div className="relative z-10 p-5 pb-7">
        <div className="flex gap-4">
          {/* Image */}
          <img
            src={images?.webp?.image_url}
            alt={truncatedTitle}
            className={`h-32 w-24 rounded-lg border object-cover ${
              isDark ? "border-zinc-800" : "border-zinc-200"
            }`}
          />

          {/* Content */}
          <div className="flex min-w-0 flex-1 flex-col">
            {/* Title */}
            <h3
              className={`flex items-center gap-1 text-base font-extrabold tracking-normal ${
                isDark ? "text-white" : "text-zinc-950"
              }`}
            >
              <span className="truncate">{truncatedTitle.toUpperCase()}</span>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href={url}
                className={`inline-flex items-center justify-center transition-colors ${
                  isDark
                    ? "text-zinc-400 hover:text-white"
                    : "text-zinc-500 hover:text-zinc-950"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 translate-y-px"
                  fill="currentColor"
                >
                  <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z" />
                </svg>
              </a>
            </h3>

            {/* Chips */}
            <div
              className={`mt-5 flex flex-wrap gap-2 text-xs font-extrabold sm:font-edu-cursive ${
                isDark ? "text-white" : "text-zinc-950"
              }`}
            >
              {/* Status */}
              <span
                className={`flex h-7 items-center rounded-md border p-3 ${
                  isDark
                    ? "border-zinc-700 bg-zinc-900"
                    : "border-zinc-200 bg-zinc-100"
                }`}
              >
                {truncatedStatus.toUpperCase()}
              </span>

              {/* Genre */}
              <span
                className={`flex h-7 items-center rounded-md border p-3 ${
                  isDark
                    ? "border-zinc-700 bg-zinc-900"
                    : "border-zinc-200 bg-zinc-100"
                }`}
              >
                {genres[0]?.name.toUpperCase().split(" ")[0]}
              </span>
              {/* Votes */}
              <span
                className={`flex h-7 items-center rounded-md border p-3 ${
                  isDark
                    ? "border-zinc-700 bg-zinc-900"
                    : "border-zinc-200 bg-zinc-100"
                }`}
              >
                {popularity} VOTES
              </span>

              {/* Episodes */}
              <span
                className={`flex h-7 items-center rounded-md border p-3 ${
                  isDark
                    ? "border-zinc-700 bg-zinc-900"
                    : "border-zinc-200 bg-zinc-100"
                }`}
              >
                {episodes} {word}
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`my-4 h-px ${isDark ? "bg-zinc-800" : "bg-zinc-200"}`} />

        {/* Synopsis */}
        <p
          className={`line-clamp-5 text-sm leading-relaxed ${
            isDark ? "text-zinc-400" : "text-zinc-600"
          }`}
        >
          {synopsis}
        </p>
      </div>
    </article>
  );
};

export default AniCard;
