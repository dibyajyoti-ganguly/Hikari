import Header from "./components/Header";
import Anicontainer from "./components/Anicontainer";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <div className="my-5 h-px bg-zinc-800" />
      <Anicontainer />
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
