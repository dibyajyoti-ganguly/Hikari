import LogoContainer from "./LogoContainer";
import Links from "./Links";

const Header = ({ isDark, setIsDark }) => {
  return (
    <header
      className={`sticky top-0 z-50 px-4 backdrop-blur-sm transition-colors duration-500 ease-in-out sm:px-6 lg:px-10 ${
        isDark
          ? "bg-zinc-900/95 text-white"
          : "bg-white/95 text-zinc-950 shadow-sm shadow-zinc-200/80"
      }`}
    >
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 py-3">
        <LogoContainer isDark={isDark} />
        <Links isDark={isDark} setIsDark={setIsDark} />
      </div>
    </header>
  );
};

export default Header;
