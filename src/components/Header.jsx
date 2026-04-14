import LogoContainer from "./LogoContainer";
import Links from "./Links";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 h-18 px-48 bg-zinc-900 flex justify-between items-center">
      <LogoContainer />
      <Links />
    </div>
  );
};

export default Header;
