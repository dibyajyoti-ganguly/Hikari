import LogoContainer from "./LogoContainer";
import Links from "./Links";

const Header = ({ isDark, setIsDark }) => {
  return (
    <header
      className={`sticky top-0 z-50 border-b px-4 backdrop-blur-sm transition-colors duration-300 ease-out sm:px-6 lg:px-10 ${
        isDark
          ? "border-zinc-800 bg-zinc-900 text-white"
          : "border-zinc-200 bg-white text-zinc-950"
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
