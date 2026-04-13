const stats = [
  { value: "25K+", label: "Anime Entries" },
  { value: "8.2K", label: "Characters" },
  { value: "1.4K", label: "Studios" },
  { value: "90", label: "Seasons" },
];

const HeroSection = () => {
  return (
    <section className="bg-black px-6 pb-10 pt-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <div className="flex max-w-3xl flex-col items-center text-center">
          <img
            className="mb-6 h-20 w-20 rounded-3xl object-cover shadow-[0_20px_60px_rgba(255,255,255,0.08)]"
            src="https://static.vecteezy.com/system/resources/thumbnails/057/507/977/small_2x/anime-character-design-free-vector.jpg"
            alt="Hikari logo"
          />
          <h1 className="text-5xl leading-none font-black tracking-tight">
            Discover Anime in
            <span className="mt-2 block text-red-500">One Place</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            Browse trending shows, track fan-favorite characters, and explore
            rankings built from the anime community&apos;s latest attention.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-4 w-full max-w-4xl gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 px-6 py-7 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              <p className="text-3xl font-black tracking-tight">{stat.value}</p>
              <p className="mt-3 text-sm font-medium text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
