const LogoContainer = ({ isDark }) => {
  return (
    <div
      className={`flex min-w-0 items-center gap-2.5 font-mono font-extrabold transition-colors duration-500 ease-in-out sm:gap-3.5 ${
        isDark ? "text-white" : "text-zinc-950"
      }`}
    >
      <img
        className="w-8 rounded-lg sm:w-9"
        src="https://static.vecteezy.com/system/resources/thumbnails/057/507/977/small_2x/anime-character-design-free-vector.jpg"
        alt="logo"
      />
      <h1 className="truncate text-lg sm:text-xl">Hikari ヒカリ</h1>
    </div>
  );
};

export default LogoContainer;
