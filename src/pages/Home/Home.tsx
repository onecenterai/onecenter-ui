import Footer from "../../components/Footer";
import AboutOneCenter from "./AboutOneCenter";
import Faqs from "./Faqs";
import Features from "./Features";
import HeroSection from "./HeroSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutOneCenter />
      <Features />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Home;
